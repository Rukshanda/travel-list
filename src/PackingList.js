import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  // the item
    itemsCtrl,
    // to delete the item we have taken it from the app 
    handelDeleteItemsCtrl,
    handelUpdateItemCtrl,
    handelDeleteAllCtrl,
  }) {
    const [sortBy, setSortBy] = useState("input");
    let sortedItems;
  
    if (sortBy === "input") sortedItems = itemsCtrl;
    if (sortBy === "description")
      sortedItems = itemsCtrl
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed")
      sortedItems = itemsCtrl
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
  
    return (
      // the item
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              itemObj={item}
              handelDeleteItemsCtrl={handelDeleteItemsCtrl}
              handelUpdateItemCtrl={handelUpdateItemCtrl}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value={"input"}>Sort by input status</option>
            <option value={"description"}>Sort by aplphabetic order</option>
            <option value={"packed"}>Sort by packed status</option>
          </select>
          <button onClick={handelDeleteAllCtrl}>Clear all Items</button>
        </div>
      </div>
    );
  }