"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
      className={`relative group flex items-center gap-1 transition-all ${
        isActive
          ? "font-semibold text-[#5a3523]"
          : "text-[#6f4b38] hover:text-[#9b6b45]"
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left rounded-full bg-[#b9855f] transition-transform duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />

      {badge !== undefined ? (
        <span className="absolute -right-3 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#5a3523] text-[10px] font-bold text-[#fff4e7] shadow-[0_8px_18px_rgba(90,53,35,0.28)]">
          {badge}
        </span>
      ) : null}
    </Link>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#7a5036]/15 bg-[rgba(250,240,228,0.92)] text-[#3f2417] shadow-[0_10px_35px_rgba(90,53,35,0.08)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(250,240,228,0.82)]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex h-18 items-center justify-between py-3">
          <Link href="/shop" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5a3523] text-[#fff4e7] shadow-[0_12px_24px_rgba(90,53,35,0.2)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
              <ShoppingBag className="h-5 w-5" />
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-[0.08em] text-[#4a2d1e]">
                Shop Now
              </span>
              <span className="text-[10px] uppercase tracking-[0.32em] text-[#a27554]">
                welcome to our shop
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center space-x-8 text-sm font-medium">
              <li>
                <NavItem href="/">Home</NavItem>
              </li>
              <li>
                <NavItem href="/product">Products</NavItem>
              </li>
              <li>
                <NavItem href="/Category">Categories</NavItem>
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

          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center space-x-3 text-sm text-[#a67b5b] border-r border-[#7a5036]/12 pr-4 mr-1">
              <i className="fa-brands fa-instagram cursor-pointer transition-colors hover:text-[#6d432d]" />
              <i className="fa-brands fa-facebook cursor-pointer transition-colors hover:text-[#6d432d]" />
              <i className="fa-brands fa-twitter cursor-pointer transition-colors hover:text-[#6d432d]" />
            </div>
            <div className="hidden lg:flex items-center gap-4 text-sm font-medium">
              <Link
                href="/login"
                className="text-[#6f4b38] transition-colors hover:text-[#9b6b45]"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full border border-[#7a5036]/10 bg-[#6d432d] px-4 py-2 text-[#fff5eb] shadow-[0_12px_24px_rgba(90,53,35,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#7b4f36]"
              >
                Register
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full border border-[#7a5036]/12 bg-[#fff6eb] p-2 text-[#5a3523] shadow-[0_8px_20px_rgba(90,53,35,0.1)] transition-colors hover:text-[#9b6b45] lg:hidden"
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

      {isOpen && (
        <div className="border-t border-[#7a5036]/12 bg-[rgba(255,247,238,0.96)] lg:hidden">
          <div className="container space-y-4 px-4 py-5">
            <ul className="flex flex-col items-center space-y-4 text-center text-sm font-medium text-[#6f4b38]">
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
              <li className="flex flex-col gap-4 border-t border-[#7a5036]/12 pt-4">
                <Link
                  href="/login"
                  className="text-[#6f4b38] transition-colors hover:text-[#9b6b45]"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="rounded-full bg-[#6d432d] px-4 py-2 text-[#fff5eb] shadow-[0_12px_24px_rgba(90,53,35,0.18)] transition-colors hover:bg-[#7b4f36]"
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
