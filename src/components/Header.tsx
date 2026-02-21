"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-navy/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/logo.png"
                alt="Wisepen Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-[var(--font-playfair)] text-lg font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-navy" : "text-white"
                }`}
              >
                WISEPEN
              </span>
              <span
                className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isScrolled ? "text-navy-light/70" : "text-white/70"
                }`}
              >
                Language Institute
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? isScrolled
                        ? "text-navy"
                        : "text-white"
                      : isScrolled
                        ? "text-foreground/70 hover:text-navy hover:bg-navy/5"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full ${
                        isScrolled ? "bg-gold" : "bg-gold-light"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
            <a
              href="tel:031-915-2185"
              className={`ml-4 flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                isScrolled
                  ? "bg-navy text-white hover:bg-navy-light shadow-md hover:shadow-lg"
                  : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm border border-white/20"
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              상담문의
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-navy hover:bg-navy/5"
                : "text-white hover:bg-white/10"
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-border/50 shadow-xl"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-navy/5 text-navy"
                        : "text-foreground/70 hover:bg-navy/5 hover:text-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="tel:031-915-2185"
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-navy text-white text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                031-915-2185
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
