"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

function MoonCat({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sleeping cat body */}
      <ellipse cx="10" cy="15" rx="6" ry="4.5" fill="currentColor" opacity="0.9" />
      {/* Cat head */}
      <circle cx="15" cy="12" r="3.5" fill="currentColor" opacity="0.9" />
      {/* Left ear */}
      <path d="M13 9.5L12 7L14.5 8.5" fill="currentColor" opacity="0.9" />
      {/* Right ear */}
      <path d="M17 9.5L18 7L15.5 8.5" fill="currentColor" opacity="0.9" />
      {/* Closed eye (sleeping) */}
      <path d="M14 12.5Q15 13 16 12.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      {/* Tail curled */}
      <path
        d="M5 15C3 15 2 13 3 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      {/* Moon */}
      <path
        d="M20 4C20 4 18 5 18 7C18 9 20 10 20 10C19 10 17 8.5 17 7C17 5.5 19 4 20 4Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}

function SunCat({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Awake cat body */}
      <ellipse cx="10" cy="15" rx="6" ry="4.5" fill="currentColor" opacity="0.9" />
      {/* Cat head */}
      <circle cx="15" cy="12" r="3.5" fill="currentColor" opacity="0.9" />
      {/* Left ear */}
      <path d="M13 9.5L12 7L14.5 8.5" fill="currentColor" opacity="0.9" />
      {/* Right ear */}
      <path d="M17 9.5L18 7L15.5 8.5" fill="currentColor" opacity="0.9" />
      {/* Open eyes (awake) */}
      <circle cx="14.2" cy="11.8" r="0.6" fill="currentColor" opacity="0.6" />
      <circle cx="15.8" cy="11.8" r="0.6" fill="currentColor" opacity="0.6" />
      {/* Small smile */}
      <path d="M14.5 13.2Q15 13.6 15.5 13.2" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" opacity="0.6" />
      {/* Tail up */}
      <path
        d="M5 15C3 14 2.5 11 4.5 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      {/* Sun rays */}
      <circle cx="20" cy="5" r="2" fill="currentColor" opacity="0.6" />
      <line x1="20" y1="2" x2="20" y2="1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="20" y1="8" x2="20" y2="9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="17" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="23" y1="5" x2="24" y2="5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300 focus:outline-none"
      style={{
        borderColor: isDark ? "#2a2a2e" : "#e2e4e8",
        backgroundColor: isDark ? "#1b1b1f" : "#ffffff",
        color: isDark ? "#b8c3ff" : "#f59e0b",
      }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ scale: 0, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0, rotate: 90, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-5 h-5"
      >
        {isDark ? <MoonCat className="w-full h-full" /> : <SunCat className="w-full h-full" />}
      </motion.div>
    </motion.button>
  );
}
