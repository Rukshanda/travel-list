import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { Statics } from "./statics";
import { PackingList } from "./PackingList";

// common parent
export default function App() {
  // items state -- to store the items in the  array
  const [items, setItems] = useState([]);
  // function to handel the items addition
  function handelItems(item) {
    setItems((items) => [...items, item]);
  }
  // function to delete the items
  function handelDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  // function to update the item
  function handelUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  // function to delete all the items at once
  function handelDeleteAll() {
    const confirm = window.confirm(
      "Are you sure you want to delete your list?"
    );
    if (confirm) setItems([]);
  }
  // parent component content displayed on the UI
  return (
    <div className="app">
      <Logo />
      {/* passing the prop that is in the parent componnet to the child one
          to handel the items  */}
      <Form handelItemsCtrl={handelItems} />
      <PackingList
        itemsCtrl={items}
        handelDeleteItemsCtrl={handelDeleteItems}
        handelUpdateItemCtrl={handelUpdateItem}
        handelDeleteAllCtrl={handelDeleteAll}
      />
      <Statics itemsCtrl={items} />
    </div>
  );
}

// Components----------
