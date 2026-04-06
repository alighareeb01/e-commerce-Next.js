E-Commerce Frontend
Description
A Next.js storefront application for browsing products and categories, managing a cart and wishlist, authenticating users, placing orders, and reviewing order history.

This repository contains the frontend only. It integrates with a hosted REST API at:

https://nti-e-commerce-backend-project.vercel.app/api/v1

What problem it solves
The app provides a customer-facing shopping experience with:

Account registration and login
Product discovery
Cart and wishlist management
Checkout and order placement
Order history viewing
Architecture at a glance
Built with the Next.js App Router
Uses server components for page-level data fetching
Uses client components for forms, navigation, toasts, and interactive actions
Uses NextAuth Credentials Provider to authenticate against the external backend
Decodes the NextAuth session cookie server-side to forward the backend JWT as a Bearer token
Protects selected authenticated pages with Next.js middleware
Tech Stack
Core
Next.js 16
React 19
TypeScript
NextAuth.js
Styling & UI
Tailwind CSS 4
shadcn/ui
Radix-based UI primitives
Lucide React
Font Awesome
Forms & Validation
React Hook Form
Zod
@hookform/resolvers
Data & Networking
Native fetch
Axios
jwt-decode
Developer Tooling
ESLint
PostCSS
Features
Authentication
User registration form with validation
User login via NextAuth credentials provider
Logout from the navigation bar
Session available app-wide through SessionProvider
Middleware-based route protection for:
/cart
/wishlist
/allorders
Product Browsing
Home page with hero section
Product listing page
Product cards with:
image
price
description
stock
sold count
Product details page with:
cover image
gallery thumbnails
category and subcategory
pricing
quantity
rating
metadata
Categories
Categories listing section/page
Category cards rendered with images from the public/ folder
Cart
Add product to cart
View cart items
Remove a single cart item
Clear the entire cart
View total item count
View total price
Navigate to checkout from the cart
Wishlist
Add product to wishlist
View wishlist items
Remove wishlist items
Checkout & Orders
Checkout form with validation for:
full name
phone
address
city
country
payment method
notes
Place order via backend API
Orders page listing:
order ID
customer info
created date
payment method
paid status
delivered status
order items
total price
UX
Responsive navigation
Loading UI for shop and categories pages
Error boundary for the shop page
Toast notifications for:
add to cart
add to wishlist
checkout redirect
order placement
auth-required actions
API Documentation
This repository does not include backend source code. The following API documentation is derived from the frontend code and the requests it makes to the hosted backend.

Internal App API
Method	Endpoint	Description	Request Body	Response
GET / POST	/api/auth/[...nextauth]	NextAuth route handler for credentials-based authentication and session handling	Managed by NextAuth	Standard NextAuth auth/session responses
External Backend API Consumed by the Frontend
Auth
Method	Endpoint	Auth	Description	Request Body	Response Used by Frontend
POST	/auth/login	No	Login via email/password from NextAuth credentials provider	{ email, password }	Expects { token }; token is JWT-decoded to extract id, name, email, role
POST	/auth/signup	No	Register a new user	Form payload from registration page: { name, email, password, confirmPassword }	Frontend expects a JSON response containing token
Products
Method	Endpoint	Auth	Description	Request Body	Response Used by Frontend
GET	/product	No	Fetch all products	None	Expects { data: Product[] }
GET	/product/:productId	No	Fetch a single product’s details	None	Expects { data: ProductDetails }
Categories
Method	Endpoint	Auth	Description	Request Body	Response Used by Frontend
GET	/category/	No	Fetch all categories	None	Expects { data: Category[] }
Cart
Method	Endpoint	Auth	Description	Request Body	Response Used by Frontend
GET	/carts	Bearer token	Fetch current user cart	None	Frontend reads data.data and expects a cart object with _id, cartItems, and totalPrice
POST	/carts	Bearer token	Add a product to cart	{ product: productId }	Response is logged/ignored by UI
DELETE	/carts/:cartItemId	Bearer token	Remove a single cart item	None	Returns JSON; used after delete action
DELETE	/carts	Bearer token	Clear the cart	None	Frontend checks res.ok
Wishlist
Method	Endpoint	Auth	Description	Request Body	Response Used by Frontend
GET	/wishlist	Bearer token	Fetch wishlist	None	Frontend expects an object with .data array and a length field
POST	/wishlist	Bearer token	Add a product to wishlist	{ product: productId }	Response is logged/ignored by UI
DELETE	/wishlist/:cartItemId	Bearer token	Remove a wishlist item	None	Returns JSON; used after delete action
Orders
Method	Endpoint	Auth	Description	Request Body	Response Used by Frontend
GET	/orders?page=1&limit=50	Bearer token	Fetch current user orders	None	Expects { length, data: Order[] }
POST	/orders	Bearer token	Create a new order	{ items, shippingAddress, paymentMethod, notes }	Returns JSON; UI shows success toast then redirects
Example Order Payload
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
Authentication & Security
How authentication works
The user submits email and password on /login.
signIn("credentials") calls NextAuth.
NextAuth forwards the credentials to the backend login endpoint.
The backend returns a JWT token.
The frontend decodes that token with jwt-decode to extract user data.
The decoded user and raw token are stored inside the NextAuth JWT/session callbacks.
Server-side code later decodes the NextAuth session cookie to recover the backend token and send it as Authorization: Bearer <token>.
Route protection
Middleware checks for a valid NextAuth token before allowing access to:

/cart
/wishlist
/allorders
Unauthenticated users are redirected to /login.

Authorization behavior in the code
Protected backend calls are made only after retrieving the stored token.
The decoded JWT includes a role, but this repository does not implement role-based UI or role-based route separation.
Project Structure
.
├── public/                     # Static product/category images and fallback assets
├── src/
│   ├── app/
│   │   ├── api/auth/[...nextauth]/route.ts   # NextAuth route handler
│   │   ├── _api/               # API fetch helpers for products, categories, cart, wishlist
│   │   ├── _components/        # App-specific UI components
│   │   ├── _models/            # TypeScript model definitions
│   │   ├── cartAction/         # Server actions for cart, wishlist, and orders
│   │   ├── MySessionProvider/  # NextAuth SessionProvider wrapper
│   │   ├── utils/              # Auth token helper
│   │   ├── allorders/          # Orders page
│   │   ├── brands/             # Placeholder brands page
│   │   ├── cart/               # Cart page
│   │   ├── Category/           # Categories page
│   │   ├── checkout/           # Checkout page
│   │   ├── login/              # Login page
│   │   ├── productdetails/     # Product details page
│   │   ├── products/           # Products page
│   │   ├── register/           # Registration page
│   │   ├── shop/               # Combined products + categories page
│   │   ├── wishlist/           # Wishlist page
│   │   ├── auth.ts             # NextAuth configuration
│   │   ├── globals.css         # Global styles and theme tokens
│   │   └── layout.tsx          # Root layout with navbar/footer/session provider
│   ├── components/ui/          # Reusable shadcn-style UI primitives
│   ├── lib/                    # Shared utility helpers
│   └── middleware.ts           # Route protection middleware
├── components.json             # shadcn/ui configuration
├── next.config.ts              # Next.js config
├── postcss.config.mjs          # PostCSS config
├── eslint.config.mjs           # ESLint config
├── tsconfig.json               # TypeScript config
└── package.json                # Scripts and dependencies
Main directories
src/app/_api
Server-side fetch helpers for data retrieval.
src/app/cartAction
Server actions that mutate remote backend state.
src/app/_components
Feature-oriented UI such as cart cards, product cards, checkout form, and nav.
src/components/ui
Base UI primitives reused across the app.
public
Static images for products, categories, and fallback assets.
Installation
Prerequisites
Node.js 20+ recommended
npm
1. Clone the repository
git clone <your-repo-url>
cd e-commerce
2. Install dependencies
npm install
3. Create environment variables
Create a .env.local file in the project root.

Example:

NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://nti-ecommerce.vercel.app/api/v1
4. Start the development server
npm run dev
Open:

http://localhost:3000
5. Production build
npm run build
npm run start
6. Lint the project
npm run lint
Environment Variables
Variable	Required	Description
NEXTAUTH_SECRET	Yes	Secret used by NextAuth and by server-side token decoding logic in auth.ts, middleware.ts, and utils/getMyToken.ts
NEXTAUTH_URL	Recommended	Base URL for the frontend app; typically required by NextAuth runtime in local/dev or hosted environments
NEXT_PUBLIC_API_URL	Optional in current code	Present in .env files, but the current source code uses hardcoded backend URLs instead of this variable
Important note
Although NEXT_PUBLIC_API_URL exists in the environment files, the source currently calls the hosted backend using hardcoded URLs such as:

https://nti-e-commerce-backend-project.vercel.app/api/v1/...
If you want environment-based API switching, those hardcoded URLs should be refactored to use the env variable consistently.

Usage
User flow
Visit the home, products, or shop page to browse the catalog.
Register a new account on /register or sign in on /login.
Add products to:
cart
wishlist
Open /cart to review quantities and total price.
Click the checkout button to open /checkout.
Fill in shipping address and payment method.
Submit the order.
Open /allorders to review order history.
Open /wishlist to manage saved items.
Main pages
Route	Purpose
/	Home page
/shop	Combined products and categories view
/products	Products listing
/Category	Categories listing
/productdetails?productId=...	Product details page
/login	Sign in
/register	Sign up
/cart	Current cart
/checkout?cartId=...	Checkout form
/wishlist	Wishlist
/allorders	Orders history
/brands	Placeholder route
Deployment
What is detectable from the code
The frontend is a Next.js application and is naturally compatible with platforms like Vercel.
The backend being consumed appears to be deployed at:
https://nti-e-commerce-backend-project.vercel.app
Deployment considerations
Set NEXTAUTH_URL to the deployed frontend URL.
Set NEXTAUTH_SECRET in your hosting provider.
Consider replacing hardcoded backend URLs with environment-based configuration before production deployment.
Static assets in public/ must be included in the deployment build.
Contributing
Fork the repository.
Create a feature branch.
Make your changes.
Run linting locally.
Open a pull request with a clear description of:
what changed
why it changed
how it was tested
Suggested improvements for contributors
Replace hardcoded API URLs with a shared API client using env configuration.
Normalize TypeScript types for product/cart/category/order responses.
Remove placeholder fallback/mock data from fetch helpers.
Improve error handling and loading states across protected pages.
Add tests for auth flow, cart flow, and checkout flow.
Add role-aware authorization if the backend exposes admin capabilities.
License
No license file is included in this repository. If you plan to distribute or open-source it, add a LICENSE file with the intended terms.


