import { useState } from 'react';
import { data } from '../data';

export default function Inventory() {
  const [items, setItems] = useState(data.items);
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');

  const addItem = () => {
    const newItem = { id: items.length + 1, name, stock: parseInt(stock) };
    setItems([...items, newItem]);
    setName('');
    setStock('');
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Inventory</h1>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Item Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="border p-2 mr-2"
        />
        <input 
          type="number" 
          placeholder="Stock" 
          value={stock} 
          onChange={(e) => setStock(e.target.value)} 
          className="border p-2 mr-2"
        />
        <button onClick={addItem} className="bg-blue-500 text-white px-4 py-2">Add Item</button>
      </div>
      <ul>
        {items.map(item => (
          <li key={item.id} className="border p-2 mb-2">
            <p>{`Name: ${item.name}`}</p>
            <p>{`Stock: ${item.stock}`}</p>
            <button onClick={() => deleteItem(item.id)} className="bg-red-500 text-white px-4 py-2 mt-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

