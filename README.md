# 🛒 E-Commerce Frontend

## 📌 Description
A Next.js storefront application for browsing products and categories, managing a cart and wishlist, authenticating users, placing orders, and reviewing order history.

This repository contains the **frontend only**. It integrates with a hosted REST API at:

`https://nti-e-commerce-backend-project.vercel.app/api/v1`

---

## 🎯 What Problem It Solves
The app provides a customer-facing shopping experience with:

- Account registration and login
- Product discovery
- Cart and wishlist management
- Checkout and order placement
- Order history viewing

---

## 🏗️ Architecture at a Glance
- Built with the **Next.js App Router**
- Uses **server components** for page-level data fetching
- Uses **client components** for forms, navigation, toasts, and interactive actions
- Uses **NextAuth Credentials Provider** to authenticate against the external backend
- Decodes the NextAuth session cookie server-side to forward the backend JWT as a Bearer token
- Protects selected authenticated pages with **Next.js middleware**

---

## 🧰 Tech Stack

### Core
- Next.js 16
- React 19
- TypeScript
- NextAuth.js

### Styling & UI
- Tailwind CSS 4
- shadcn/ui
- Radix-based UI primitives
- Lucide React
- Font Awesome

### Forms & Validation
- React Hook Form
- Zod
- `@hookform/resolvers`

### Data & Networking
- Native `fetch`
- Axios
- `jwt-decode`

### Developer Tooling
- ESLint
- PostCSS

---

## ✨ Features

### Authentication
- User registration form with validation
- User login via NextAuth credentials provider
- Logout from the navigation bar
- Session available app-wide through `SessionProvider`
- Middleware-based route protection for:
  - `/cart`
  - `/wishlist`
  - `/allorders`

### Product Browsing
- Home page with hero section
- Product listing page
- Product cards with:
  - image
  - price
  - description
  - stock
  - sold count
- Product details page with:
  - cover image
  - gallery thumbnails
  - category and subcategory
  - pricing
  - quantity
  - rating
  - metadata

### Categories
- Categories listing section/page
- Category cards rendered with images from the `public/` folder

### Cart
- Add product to cart
- View cart items
- Remove a single cart item
- Clear the entire cart
- View total item count
- View total price
- Navigate to checkout from the cart

### Wishlist
- Add product to wishlist
- View wishlist items
- Remove wishlist items

### Checkout & Orders
- Checkout form with validation for:
  - full name
  - phone
  - address
  - city
  - country
  - payment method
  - notes
- Place order via backend API
- Orders page listing:
  - order ID
  - customer info
  - created date
  - payment method
  - paid status
  - delivered status
  - order items
  - total price

### UX
- Responsive navigation
- Loading UI for shop and categories pages
- Error boundary for the shop page
- Toast notifications for:
  - add to cart
  - add to wishlist
  - checkout redirect
  - order placement
  - auth-required actions

---

## 📡 API Documentation

This repository does not include backend source code. The following API documentation is derived from the frontend code and the requests it makes to the hosted backend.

### Internal App API

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET / POST | `/api/auth/[...nextauth]` | NextAuth route handler for credentials-based authentication and session handling | Managed by NextAuth | Standard NextAuth auth/session responses |

### External Backend API Consumed by the Frontend

#### Auth

| Method | Endpoint | Auth | Description | Request Body | Response Used by Frontend |
|--------|----------|------|-------------|--------------|----------------------------|
| POST | `/auth/login` | No | Login via email/password from NextAuth credentials provider | `{ email, password }` | Expects `{ token }`; token is JWT-decoded to extract `id`, `name`, `email`, `role` |
| POST | `/auth/signup` | No | Register a new user | `{ name, email, password, confirmPassword }` | Frontend expects a JSON response containing token |

#### Products

| Method | Endpoint | Auth | Description | Request Body | Response Used by Frontend |
|--------|----------|------|-------------|--------------|----------------------------|
| GET | `/product` | No | Fetch all products | None | Expects `{ data: Product[] }` |
| GET | `/product/:productId` | No | Fetch a single product’s details | None | Expects `{ data: ProductDetails }` |

#### Categories

| Method | Endpoint | Auth | Description | Request Body | Response Used by Frontend |
|--------|----------|------|-------------|--------------|----------------------------|
| GET | `/category/` | No | Fetch all categories | None | Expects `{ data: Category[] }` |

#### Cart

| Method | Endpoint | Auth | Description | Request Body | Response Used by Frontend |
|--------|----------|------|-------------|--------------|----------------------------|
| GET | `/carts` | Bearer token | Fetch current user cart | None | Frontend reads `data.data` and expects a cart object with `_id`, `cartItems`, and `totalPrice` |
| POST | `/carts` | Bearer token | Add a product to cart | `{ product: productId }` | Response is logged/ignored by UI |
| DELETE | `/carts/:cartItemId` | Bearer token | Remove a single cart item | None | Returns JSON; used after delete action |
| DELETE | `/carts` | Bearer token | Clear the cart | None | Frontend checks `res.ok` |

#### Wishlist

| Method | Endpoint | Auth | Description | Request Body | Response Used by Frontend |
|--------|----------|------|-------------|--------------|----------------------------|
| GET | `/wishlist` | Bearer token | Fetch wishlist | None | Frontend expects an object with `.data` array and a `length` field |
| POST | `/wishlist` | Bearer token | Add a product to wishlist | `{ product: productId }` | Response is logged/ignored by UI |
| DELETE | `/wishlist/:cartItemId` | Bearer token | Remove a wishlist item | None | Returns JSON; used after delete action |

#### Orders

| Method | Endpoint | Auth | Description | Request Body | Response Used by Frontend |
|--------|----------|------|-------------|--------------|----------------------------|
| GET | `/orders?page=1&limit=50` | Bearer token | Fetch current user orders | None | Expects `{ length, data: Order[] }` |
| POST | `/orders` | Bearer token | Create a new order | `{ items, shippingAddress, paymentMethod, notes }` | Returns JSON; UI shows success toast then redirects |

### Example Order Payload

```json
{
  "items": [
    {
      "productId": "PRODUCT_ID",
      "quantity": 1
    }
  ],
  "shippingAddress": {
    "fullName": "Jane Doe",
    "phone": "0123456789",
    "addressLine1": "123 Main St",
    "city": "Cairo",
    "country": "EG"
  },
  "paymentMethod": "cash",
  "notes": "Leave at the door"
}
