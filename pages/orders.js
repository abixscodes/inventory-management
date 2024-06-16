import { useState } from "react";
import { data } from "../data";

export default function Orders() {
  const [statusFilter, setStatusFilter] = useState("");
  const [sortType, setSortType] = useState("");

  const filteredOrders = data.orders.filter(order => 
    statusFilter ? order.status === statusFilter : true
  );

  const sortedOrders = filteredOrders.sort((a, b) => {
    if (sortType === "customer") {
      return a.customer.localeCompare(b.customer);
    }
    if (sortType === "itemCount") {
      return a.items.length - b.items.length;
    }
    return 0;
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Orders</h1>
      <div className="mb-4">
        <label className="mr-2">Filter by Status:</label>
        <select onChange={(e) => setStatusFilter(e.target.value)} className="mr-4">
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <label className="mr-2">Sort by:</label>
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="">None</option>
          <option value="customer">Customer</option>
          <option value="itemCount">Item Count</option>
        </select>
      </div>
      <ul>
        {sortedOrders.map(order => (
          <li key={order.id} className="border p-2 mb-2">
            <a href={`/orders/${order.id}`} className="text-blue-600">{`Order ${order.id}`}</a>
            <p>{`Customer: ${order.customer}`}</p>
            <p>{`Status: ${order.status}`}</p>
            <p>{`Items: ${order.items.length}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
