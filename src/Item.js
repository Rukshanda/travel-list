export function Item({ itemObj, handelDeleteItemsCtrl, handelUpdateItemCtrl }) {
    return (
      <li>
        <input
          type="checkbox"
          value={itemObj.packed}
          onChange={() => {
            handelUpdateItemCtrl(itemObj.id);
          }}
        />
        <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
          {itemObj.list}
        </span>
        <button onClick={() => handelDeleteItemsCtrl(itemObj.id)}>
          ❌&times;
        </button>
      </li>
    );
  }