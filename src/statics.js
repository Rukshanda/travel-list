 export function Statics({ itemsCtrl }) {
    if (!itemsCtrl.length)
      return (
        <footer className="stats">
          <p>No Items Yet! Add some to get started.😜</p>
        </footer>
      );
    const numItems = itemsCtrl.length;
    const numPacked = itemsCtrl.filter((items) => items.packed).length;
    const percentage = Math.round(numPacked / numItems) * 100;
  
    return (
      <footer className="stats">
        {percentage === 100 ? (
          <em>👜Now You are reday to fly...Enjoy your trip ✈</em>
        ) : (
          <em>
            👜You have {numItems} items on your list, and you already packed{" "}
            {numPacked} ({percentage}%)
          </em>
        )}
      </footer>
    );
  }