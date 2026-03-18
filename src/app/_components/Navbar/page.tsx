"use client";
import React from "react";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

// export default function Navbar() {
//   return (
//     <div className="bg-amber-600">
//       <div className="container flex justify-between  mx-auto py-3 items-center">
//         <div className="logo">Logo</div>
//         <div className="middle">
//           <ul className="flex justify-center gap-3">
//             <li>
//               <a href="">home</a>
//             </li>
//             <li>
//               <a href="/shop">Shop</a>
//             </li>
//             <li>
//               <a href="category">category</a>
//             </li>
//             <li>
//               <a href="brand">brand</a>
//             </li>
//             <li>
//               <a href="product"></a>
//             </li>
//           </ul>
//         </div>
//         <div className="right">
//           <ul className="flex justify-center gap-2">
//             <li>
//               <a href="">facebook</a>
//             </li>
//             <li>
//               <a href="">instagram</a>
//             </li>
//             <li>
//               <a href="">twitter</a>
//             </li>
//           </ul>
//         </div>
//         <div className="auth">
//           <ul className=" flex justify-center gap-1">
//             <li>
//               <a href="register">register</a>
//             </li>
//             <li>
//               <a href="login">login</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// const NavItem = ({
//   href,
//   children,
//   badge,
//   onClick,
// }: {
//   href: string;
//   children: React.ReactNode;
//   badge?: number;
//   onClick?: () => void;
// }) => {
//   const pathname = usePathname();
//   const isActive = pathname === href;

//   return (
//     <Link
//       href={href}
//       onClick={onClick}
//       className={`relative group flex items-center gap-1 transition-all cursor-pointer ${
//         isActive ? "text-primary font-semibold" : "hover:text-primary"
//       }`}
//     >
//       {children}
//       {/* Active and Hover indicator highlight */}
//       <span
//         className={`absolute -bottom-1 left-0 w-full h-[2px] bg-primary transition-transform origin-left duration-300 ${
//           isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
//         }`}
//       ></span>

//       {badge !== undefined ? (
//         <span className="absolute -top-2 -right-3 bg-primary text-primary-foreground font-bold rounded-full w-5 h-5 flex items-center justify-center text-[10px] shadow-sm animate-in zoom-in">
//           {badge}
//         </span>
//       ) : null}
//     </Link>
//   );
// };

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
//       <div className="container mx-auto px-4 md:px-8 lg:px-12">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2 group">
//             <ShoppingBag className="text-primary h-6 w-6 group-hover:rotate-12 transition-transform" />
//             <span className="text-xl font-bold tracking-tight text-foreground">
//               Shop Now
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-8">
//             <ul className="flex items-center space-x-8 text-sm font-medium text-muted-foreground">
//               <li>
//                 <NavItem href="/">Home</NavItem>
//               </li>
//               <li>
//                 <NavItem href="/product">Products</NavItem>
//               </li>
//               <li>
//                 <NavItem href="/category">Categories</NavItem>
//               </li>
//               <li>
//                 <NavItem href="/brands">Brands</NavItem>
//               </li>
//               <li>
//                 <NavItem href="/allorders">Orders</NavItem>
//               </li>
//               <li>
//                 <NavItem href="/wishlist">Wishlist</NavItem>
//               </li>
//               <li>
//                 <NavItem href="/cart">Cart</NavItem>
//               </li>
//             </ul>
//           </div>

//           {/* Right Side Actions */}
//           <div className="flex items-center gap-4">
//             {/* Social Icons (Desktop) */}
//             <div className="hidden xl:flex items-center space-x-3 text-muted-foreground/60 text-sm border-r pr-4 mr-1">
//               <i className="fa-brands fa-instagram hover:text-primary cursor-pointer transition-colors" />
//               <i className="fa-brands fa-facebook hover:text-primary cursor-pointer transition-colors" />
//               <i className="fa-brands fa-twitter hover:text-primary cursor-pointer transition-colors" />
//             </div>
//             <div className="hidden lg:flex items-center gap-4 text-sm font-medium">
//               <Link
//                 href="/login"
//                 className="text-muted-foreground hover:text-primary transition-colors"
//               >
//                 Login
//               </Link>
//               <Link
//                 href="/register"
//                 className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
//               >
//                 Register
//               </Link>
//             </div>

//             {/* Mobile Toggle */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden text-foreground p-2"
//               aria-label={
//                 isOpen ? "Close navigation menu" : "Open navigation menu"
//               }
//             >
//               <i
//                 className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-xl`}
//               />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="lg:hidden border-t bg-background">
//           <div className="container py-4 px-4 space-y-4">
//             <ul className="flex flex-col items-center space-y-4 font-medium text-muted-foreground text-center">
//               <li>
//                 <NavItem href="/" onClick={() => setIsOpen(false)}>
//                   Home
//                 </NavItem>
//               </li>
//               <li>
//                 <NavItem href="/products" onClick={() => setIsOpen(false)}>
//                   Products
//                 </NavItem>
//               </li>
//               <li>
//                 <NavItem href="/categories" onClick={() => setIsOpen(false)}>
//                   Categories
//                 </NavItem>
//               </li>
//               <li>
//                 <NavItem href="/brands" onClick={() => setIsOpen(false)}>
//                   Brands
//                 </NavItem>
//               </li>
//               <li>
//                 <NavItem href="/allorders" onClick={() => setIsOpen(false)}>
//                   My Orders
//                 </NavItem>
//               </li>
//               <li>
//                 <NavItem href="/wishlist" onClick={() => setIsOpen(false)}>
//                   Wishlist
//                 </NavItem>
//               </li>
//               <li>
//                 <NavItem href="/cart" onClick={() => setIsOpen(false)}>
//                   Cart
//                 </NavItem>
//               </li>
//               <li className="pt-4 border-t flex flex-col gap-4">
//                 <Link
//                   href="/login"
//                   className="text-muted-foreground"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   href="/register"
//                   className="text-primary"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Register
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

//alternative style

const NavItem = ({
  href,
  children,
  badge,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  badge?: number;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative group flex items-center gap-1 transition-all cursor-pointer ${
        isActive
          ? "text-cyan-300 font-semibold"
          : "text-slate-300 hover:text-sky-300"
      }`}
    >
      {children}
      {/* Active and Hover indicator highlight */}
      <span
        className={`absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 transition-transform origin-left duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      ></span>

      {badge !== undefined ? (
        <span className="absolute -top-2 -right-3 bg-cyan-300 text-slate-950 font-bold rounded-full w-5 h-5 flex items-center justify-center text-[10px] shadow-sm animate-in zoom-in">
          {badge}
        </span>
      ) : null}
    </Link>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-cyan-400/20 bg-slate-950/95 text-slate-100 backdrop-blur supports-[backdrop-filter]:bg-slate-950/85">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/shop" className="flex items-center space-x-2 group">
            <ShoppingBag className="h-6 w-6 text-cyan-300 transition-transform group-hover:rotate-12 group-hover:text-sky-300" />
            <span className="text-xl font-bold tracking-tight text-slate-100 transition-colors group-hover:text-cyan-200">
              Shop Now
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center space-x-8 text-sm font-medium text-slate-300">
              <li>
                <NavItem href="/">Home</NavItem>
              </li>
              <li>
                <NavItem href="/product">Products</NavItem>
              </li>
              <li>
                <NavItem href="/category">Categories</NavItem>
              </li>
              <li>
                <NavItem href="/brands">Brands</NavItem>
              </li>
              <li>
                <NavItem href="/allorders">Orders</NavItem>
              </li>
              <li>
                <NavItem href="/wishlist">Wishlist</NavItem>
              </li>
              <li>
                <NavItem href="/cart">Cart</NavItem>
              </li>
            </ul>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Social Icons (Desktop) */}
            <div className="hidden xl:flex items-center space-x-3 text-slate-400 text-sm border-r border-cyan-400/20 pr-4 mr-1">
              <i className="fa-brands fa-instagram hover:text-cyan-300 cursor-pointer transition-colors" />
              <i className="fa-brands fa-facebook hover:text-cyan-300 cursor-pointer transition-colors" />
              <i className="fa-brands fa-twitter hover:text-cyan-300 cursor-pointer transition-colors" />
            </div>
            <div className="hidden lg:flex items-center gap-4 text-sm font-medium">
              <Link
                href="/login"
                className="text-slate-300 hover:text-sky-300 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-cyan-300 px-4 py-2 text-slate-950 transition-colors hover:bg-sky-300"
              >
                Register
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-100 transition-colors hover:text-sky-300 lg:hidden"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
            >
              <i
                className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-xl`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-cyan-400/20 bg-slate-900 lg:hidden">
          <div className="container py-4 px-4 space-y-4">
            <ul className="flex flex-col items-center space-y-4 text-center font-medium text-slate-300">
              <li>
                <NavItem href="/" onClick={() => setIsOpen(false)}>
                  Home
                </NavItem>
              </li>
              <li>
                <NavItem href="/products" onClick={() => setIsOpen(false)}>
                  Products
                </NavItem>
              </li>
              <li>
                <NavItem href="/categories" onClick={() => setIsOpen(false)}>
                  Categories
                </NavItem>
              </li>
              <li>
                <NavItem href="/brands" onClick={() => setIsOpen(false)}>
                  Brands
                </NavItem>
              </li>
              <li>
                <NavItem href="/allorders" onClick={() => setIsOpen(false)}>
                  My Orders
                </NavItem>
              </li>
              <li>
                <NavItem href="/wishlist" onClick={() => setIsOpen(false)}>
                  Wishlist
                </NavItem>
              </li>
              <li>
                <NavItem href="/cart" onClick={() => setIsOpen(false)}>
                  Cart
                </NavItem>
              </li>
              <li className="pt-4 border-t flex flex-col gap-4">
                <Link
                  href="/login"
                  className="text-slate-300 hover:text-sky-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-cyan-300 hover:text-sky-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
