"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";
import GridBackground from "@/components/GridBackground";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Shabrinashsf",
    icon: (
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shabrinasf/",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shabrina.amalia_/",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    ),
  },
  {
    name: "Twitter",
    href: "https://x.com/sabre_sf",
    icon: (
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    ),
  },
];

export default function ContactSection() {
  return (
    <section
      className="min-h-[calc(100vh-64px)] relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)", color: "var(--text-primary)" }}
    >
      <GridBackground />
      <div className="relative z-10 px-8 md:px-16 max-w-7xl mx-auto py-12 md:py-16">
        {/* Header */}
        <ScrollReveal className="mb-12 md:mb-16">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-12 h-[1px] mb-4"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <span className="font-[Plus_Jakarta_Sans] text-xs font-semibold tracking-widest uppercase block mb-4"
            style={{ color: "var(--accent-light)" }}
          >
            Contact
          </span>
          <h1 className="font-[Outfit] text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Let&apos;s{" "}
            <motion.span
              className="italic inline-block"
              style={{ color: "var(--accent)" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              talk.
            </motion.span>
          </h1>
          <p className="font-[Plus_Jakarta_Sans] text-base md:text-lg max-w-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Want to chat or buy me a coffee? Just shoot me a message and I&apos;ll
            respond whenever I can.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Social Links */}
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="font-[Outfit] text-xl font-semibold mb-6 tracking-wide"
                style={{ color: "var(--text-primary)" }}
              >
                Connect
              </h2>
              <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <StaggerItem key={link.name}>
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 backdrop-blur-md border rounded-xl p-4 glass-card-60 glass-border-hover"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-10 h-10 rounded-lg border flex items-center justify-center transition-colors"
                        style={{
                          backgroundColor: "var(--bg-page)",
                          borderColor: "var(--border-color)",
                        }}
                      >
                        <svg
                          className="w-5 h-5 transition-colors"
                          style={{ color: "var(--text-muted)" }}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {link.icon}
                        </svg>
                      </div>
                      <div>
                        <p className="font-[Plus_Jakarta_Sans] text-sm font-semibold transition-colors"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {link.name}
                        </p>
                        <p className="font-[JetBrains_Mono] text-[11px] tracking-wider uppercase"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Open profile
                        </p>
                      </div>
                    </motion.a>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollReveal>

          {/* Right: Email CTA */}
          <ScrollReveal delay={0.3}>
            <div>
              <h2 className="font-[Outfit] text-xl font-semibold mb-6 tracking-wide"
                style={{ color: "var(--text-primary)" }}
              >
                Email
              </h2>
              <motion.div
                className="backdrop-blur-md border rounded-xl p-6 md:p-8 glass-card-60 glass-border-hover"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 180, damping: 28 }}
              >
                <p className="font-[Plus_Jakarta_Sans] text-base leading-relaxed mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  I&apos;m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </p>

                <div className="mb-6 p-4 border rounded-lg"
                  style={{
                    backgroundColor: "var(--bg-page)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <p className="font-[JetBrains_Mono] text-[11px] tracking-wider uppercase mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Email address
                  </p>
                  <p className="font-[Plus_Jakarta_Sans] text-lg font-semibold break-all"
                    style={{ color: "var(--text-primary)" }}
                  >
                    shabrinaamalia860@gmail.com
                  </p>
                </div>

                <motion.a
                  href="mailto:shabrinaamalia860@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 font-[Plus_Jakarta_Sans] text-sm font-semibold tracking-wider uppercase rounded-md w-full sm:w-auto"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "#efefff",
                    boxShadow: "0 0 15px rgba(46,91,255,0.3)",
                  }}
                  whileHover={{ y: -2, boxShadow: "0 0 25px rgba(46,91,255,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Me an Email
                </motion.a>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
