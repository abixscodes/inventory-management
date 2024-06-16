This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Features
Order List Page:

Displays a list of orders with ID, customer name, status, and item count.
Filters orders by status (Pending, Completed).
Sorts orders by customer name and item count.
Order Details Page:

Shows detailed information about a specific order.
Displays items in the order, their quantities, and stock availability.
Button to mark the order as completed.
Inventory Management:

Displays a list of items with their stock levels.
Filters items by stock availability.
Form to add new items to the inventory.
Allows editing and deleting items.
Design Choices and Implementation
React and Next.js:
Utilized React components and Next.js for server-side rendering and routing.
State Management:
Managed local state using React's useState hook for simplicity.
Data Handling:
Demonstrated array and object manipulations through filtering, sorting, and updating data.
Styling:
Used Tailwind CSS for a responsive and modern user interface.
User Experience:
Implemented a user-friendly interface with clear navigation and accessibility features.
Additional Considerations
Local Storage:

Used local storage to persist the state of orders and inventory (if applicable).
Pagination and Search:

Added pagination to handle large datasets (if applicable).
Implemented search functionality for quick access to orders and items (if applicable).
![Screenshot 2024-06-17 042353](https://github.com/abixscodes/inventory-management/assets/89627182/3ccc951b-cba6-4c8c-a06e-fae72f6eca25)
![Screenshot 2024-06-17 042415](https://github.com/abixscodes/inventory-management/assets/89627182/45b77100-789c-44f1-9095-dab08db220c2)
![Screenshot 2024-06-17 042315](https://github.com/abixscodes/inventory-management/assets/89627182/b8208c9a-b67a-414b-a8fc-81e0517088de)
![Screenshot 2024-06-17 042340](https://github.com/abixscodes/inventory-management/assets/89627182/9f8530bf-a24c-4b18-bfd8-e645a9108412)
![Screenshot 2024-06-17 042254](https://github.com/abixscodes/inventory-management/assets/89627182/f480d64e-3b96-4514-b180-69c63ff62564)
![Screenshot 2024-06-17 042427](https://github.com/abixscodes/inventory-management/assets/89627182/3989c40d-a4c7-4c5d-9bfb-543e0deebd5c)
![Screenshot 2024-06-17 042519](https://github.com/abixscodes/inventory-management/assets/89627182/200041b5-da6f-425a-8ead-7a937f483fce)


