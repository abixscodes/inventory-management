// pages/index.js

export default function Home() {
    return (
      <div className="p-4">
        <h1 className="text-2xl mb-4">Inventory and Manufacturing Management System</h1>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="/orders" className="text-blue-600">Order List</a>
            </li>
            <li>
              <a href="/inventory" className="text-blue-600">Inventory Management</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  