import { useState } from "react";
import  Logo  from "./Logo";
import  Form  from "./Form";
import  PackingList  from "./PackingList";
import  Stats from "./Stats";



export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleCleanItem(){
    const confirmed = window.confirm("Are you sure to clean list")
    
    if(confirmed) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        setItems={setItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onCleanItem={handleCleanItem}
      />
      <Stats items={items} />
    </div>
  );
}


