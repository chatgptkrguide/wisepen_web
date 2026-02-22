"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { href: "/", label: "학원 소개" },
  { href: "/curriculum", label: "교육과정" },
  { href: "/location", label: "오시는길" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-none">
              <Image
                src="/logo.png"
                alt="Wisepen Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span
              className={`font-[var(--font-playfair)] text-xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-navy" : "text-white"
              }`}
            >
              WISEPEN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-5 py-2.5 text-sm transition-colors duration-200 ${
                    isActive
                      ? isScrolled
                        ? "font-bold text-navy"
                        : "font-bold text-white"
                      : isScrolled
                        ? "font-medium text-foreground/70 hover:text-navy"
                        : "font-medium text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="tel:031-915-2185"
              className={`ml-4 flex items-center gap-2 px-5 py-2.5 rounded-none text-sm font-semibold transition-colors duration-200 ${
                isScrolled
                  ? "bg-navy text-white hover:bg-navy-light"
                  : "bg-white/15 text-white hover:bg-white/25 border border-white/40"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              상담문의
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2.5 transition-colors ${
              isScrolled ? "text-navy" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? "font-bold text-navy"
                      : "font-medium text-foreground/70 hover:text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="tel:031-915-2185"
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-none bg-navy text-white text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              031-915-2185
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
