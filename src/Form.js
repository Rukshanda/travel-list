import { useState } from "react";
 

export function Form({ handelItemsCtrl }) {
  // list for the items to get the list item
    const [list, setList] = useState("");
    const [count, setCount] = useState(1);
    function handelAdd(e) {
      e.preventDefault();
      // if there is not list then just return
      if (!list) return;
      // otherwise create a new object containg the list , count , stauts , and id
      const newItem = { list, count, packed: false, id: Date.now() };
      console.log(newItem);
      // pass this list to the handleItems where this list will be displayed
      handelItemsCtrl(newItem);
      // after adding turn back to its initial state
      setCount(1);
      setList("");
    }
    return (
      <form className="add-form" onSubmit={handelAdd}>
        <h3>What do you need for your 😍 trip</h3>
        <select value={count} onChange={(e) => setCount(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
          ;
        </select>
        <input
          type="text"
          placeholder="Item...."
          value={list}
          onChange={(e) => setList(e.target.value)}
        />
        {/* add item when the button is click */}
        <button onSubmit={handelAdd}>Add</button>
      </form>
    );
  }