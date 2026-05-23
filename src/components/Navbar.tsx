"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import AudioToggle from "@/components/AudioToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/project", label: "Project" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 glass-nav"
    >
      <div className="flex justify-between items-center px-8 md:px-16 py-4 max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="/"
            className="font-[Outfit] text-2xl font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Shabrina.
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 * index + 0.5 }}
            >
              <Link
                href={link.href}
                className="font-[Plus_Jakarta_Sans] text-sm font-semibold tracking-wider uppercase pb-1"
                style={{
                  color: router.pathname === link.href ? "var(--accent)" : "var(--text-secondary)",
                  borderBottom: router.pathname === link.href ? "2px solid var(--accent)" : "2px solid transparent",
                }}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <AudioToggle />
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-3">
          <AudioToggle />
          <ThemeToggle />
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="transition-colors duration-200"
            style={{ color: "var(--text-secondary)" }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-8 pb-4 overflow-hidden"
            style={{
              backgroundColor: "var(--bg-nav)",
              borderTop: "1px solid var(--border-color)",
            }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 font-[Plus_Jakarta_Sans] text-sm font-semibold tracking-wider uppercase"
                  style={{
                    color: router.pathname === link.href ? "var(--accent)" : "var(--text-secondary)",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}