# #5 Online Nursery Website 🌱

### 1\. Public Routes 🚀

All routes on the website are accessible without authentication.

### 2\. Product and Category Management 🛠️

- **Product List Table:**
  - Display products in a table format. The table should include columns for the image, title, price, category, and actions.
- **Action Buttons:**
  - Include buttons for updating and deleting products.
  - Updating a product should open a form in a modal allowing the user to modify existing details.
  - Deleting a product should open a confirmation modal, asking the user for confirmation before removal.
- **Adding a Product:**
  - Include a button to create the new product.
  - Provide a form to add new products with fields for category, title, price, quantity, description, rating, image (you can use ImgBB for image upload or allow direct link entry).

> All update, delete, and create actions should reflect in real-time, implementing an optimistic update of the UI.

### 3\. Product Browsing 🌿

- **Filtering, Pagination, Sorting, and Searching**: Users can efficiently browse through our product offerings with advanced filtering, pagination for easy navigation across multiple pages of products, sorting options to arrange products by relevance, price, name, etc and robust searching capabilities to quickly find specific items.
- **Product Details**: Users can view detailed information about a product.

### 4\. Shopping Cart 🛒

- **Add to Cart**: Users can add products to their cart by clicking an "Add to Cart" button. If a product is out of stock, it cannot be added to the cart.
- **Quantity Management**: Duplicate products are not added; instead, the quantity of the existing product is increased. Users cannot add more products than the available quantity in stock
- **Proceed to Checkout**: Users can proceed to the checkout page from the cart section.

### 5\. Checkout and Payment 💳

- **Order Creation**: Orders are created in the database with customer details including name, phone number, address, and other required information collected from a form filled out before proceeding to the payment page. If any selected product is out of stock, the order creation process will be prevented. Upon order creation, the system automatically decreases the quantity of each product in the order from available stock levels.
- **Payment Options**
  - **Stripe Integration**: Users can make online payments securely using Stripe.js. (Optional)
  - **Cash on Delivery (COD)**: Alternatively, customers can choose to pay in cash upon delivery of their order.

## 📑Page List

- **Landing Page**: Main page with product search, filtering, pagination, category section, and product list.
- **Products Page**: Dedicated page with product pagination, filtering, and searching.
- **Product Details Page**: Detailed information about a specific product.
- **Checkout/Cart Page**: Displays products added to the cart and allows users to proceed to checkout.
- **Payment Page**: Page for handling payments through Stripe.js.
- **Product and Category Management Page**: Interface for managing products and categories.

## 🎁Bonus Features

- **Debounce API Calls**: Implement debouncing for the search functionality to reduce the number of API calls.
- **Page Refresh Warning**: Show a warning message when refreshing the page if the cart is not empty, to prevent loss of cart data.
