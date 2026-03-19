import type { ReactNode } from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-[#7a5036]/15 bg-[rgba(250,240,228,0.92)] px-4 pt-16 pb-8 text-[#3f2417] shadow-[0_-10px_35px_rgba(90,53,35,0.06)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(250,240,228,0.82)]">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[2rem] border border-[#7a5036]/12 bg-[rgba(255,248,240,0.78)] p-6 shadow-[0_20px_60px_rgba(90,53,35,0.08)] backdrop-blur-xl sm:p-8">
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-xl font-bold text-[#4a2d1e]">
                <ShoppingBagIcon className="h-6 w-6" />
                FreshCart
              </h3>
              <p className="text-sm leading-relaxed text-[#7b5843]">
                Your one-stop shop for all things fresh and trendy. We bring the
                best quality products directly to your doorstep with love and
                care.
              </p>
              <div className="flex gap-4 pt-2">
                <SocialLink href="#" icon={<Facebook className="h-4 w-4" />} />
                <SocialLink href="#" icon={<Instagram className="h-4 w-4" />} />
                <SocialLink href="#" icon={<Twitter className="h-4 w-4" />} />
                <SocialLink href="#" icon={<Linkedin className="h-4 w-4" />} />
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#4a2d1e]">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-[#7b5843]">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-[#6d432d]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="transition-colors hover:text-[#6d432d]"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className="transition-colors hover:text-[#6d432d]"
                  >
                    My Cart
                  </Link>
                </li>
                <li>
                  <Link
                    href="/allorders"
                    className="transition-colors hover:text-[#6d432d]"
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wishlist"
                    className="transition-colors hover:text-[#6d432d]"
                  >
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#4a2d1e]">
                Customer Service
              </h4>
              <ul className="space-y-2 text-sm text-[#7b5843]">
                <li>
                  <Link
                    href="#"
                    className="transition-colors hover:text-[#6d432d]"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors hover:text-[#6d432d]"
                  >
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors hover:text-[#6d432d]"
                  >
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors hover:text-[#6d432d]"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="transition-colors hover:text-[#6d432d]"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#4a2d1e]">
                Get in Touch
              </h4>
              <div className="space-y-3 text-sm text-[#7b5843]">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-[#6d432d]" />
                  <span>123 Commerce St, Cairo, Egypt</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#6d432d]" />
                  <span>+20 123 456 7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-[#6d432d]" />
                  <span>support@freshcart.com</span>
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <h5 className="text-sm font-medium text-[#4a2d1e]">
                  Subscribe to our newsletter
                </h5>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter your email"
                    className="border-[#7a5036]/12 bg-[rgba(255,248,240,0.9)] text-[#4a2d1e] placeholder:text-[#a67b5b] focus-visible:ring-[#7a5036]/20"
                  />
                  <Button
                    size="icon"
                    className="shrink-0 border border-[#7a5036]/10 bg-[#6d432d] text-[#fff5eb] shadow-[0_12px_24px_rgba(90,53,35,0.16)] transition-all hover:-translate-y-0.5 hover:bg-[#7b4f36]"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-[#7a5036]/12" />
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-[#7b5843] md:flex-row">
            <p>&copy; {new Date().getFullYear()} FreshCart. All rights reserved.</p>

            <div className="flex items-center gap-4">
              <div className="flex gap-2 rounded-full border border-[#7a5036]/10 bg-[rgba(255,248,240,0.9)] px-4 py-2 shadow-[0_10px_25px_rgba(90,53,35,0.08)] transition-all hover:-translate-y-0.5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                  className="h-8 opacity-80 transition-all hover:opacity-100"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  className="h-8 opacity-80 transition-all hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: ReactNode }) {
  return (
    <Link
      href={href}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#7a5036]/12 bg-[rgba(255,248,240,0.9)] text-[#6d432d] shadow-[0_8px_20px_rgba(90,53,35,0.1)] transition-all hover:-translate-y-0.5 hover:bg-[#6d432d] hover:text-[#fff5eb]"
    >
      {icon}
    </Link>
  );
}

function ShoppingBagIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
