import { useRouter } from 'next/router';
import { data } from '../../data';
import { useState } from 'react';

export default function OrderDetails() {
  const router = useRouter();
  const { id } = router.query;
  const order = data.orders.find(order => order.id === parseInt(id));
  const [orderStatus, setOrderStatus] = useState(order ? order.status : "");

  if (!order) {
    return <div>Order not found</div>;
  }

  const markAsCompleted = () => {
    setOrderStatus("Completed");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">{`Order ${order.id}`}</h1>
      <p>{`Customer: ${order.customer}`}</p>
      <p>{`Status: ${orderStatus}`}</p>
      <h2 className="text-xl mt-4 mb-2">Items</h2>
      <ul>
        {order.items.map(item => {
          const stockItem = data.items.find(i => i.id === item.id);
          return (
            <li key={item.id} className="border p-2 mb-2">
              <p>{`Name: ${item.name}`}</p>
              <p>{`Quantity: ${item.quantity}`}</p>
              <p>{`Stock: ${stockItem.stock}`}</p>
            </li>
          );
        })}
      </ul>
      {orderStatus !== "Completed" && (
        <button onClick={markAsCompleted} className="bg-blue-500 text-white px-4 py-2 mt-4">Mark as Completed</button>
      )}
    </div>
  );
}
