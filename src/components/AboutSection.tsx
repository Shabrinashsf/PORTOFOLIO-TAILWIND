"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, ScrollReveal } from "@/components/animations";
import GridBackground from "@/components/GridBackground";

const techStack = {
  "Programming Language": [
    { name: "Go", icon: "/img/go.svg", size: "w-10 h-10" },
    { name: "PHP", icon: "/img/php.svg", size: "w-8 h-8" },
    { name: "TypeScript", icon: "/img/typescript.svg", size: "w-8 h-8" },
    { name: "Python", icon: "/img/python.svg", size: "w-8 h-8" },
  ],
  "Framework & Library": [
    { name: "Gin", icon: "/img/gin.svg", size: "w-8 h-8" },
    { name: "Fiber", icon: "/img/fiber.svg", size: "w-10 h-10" },
    { name: "Laravel", icon: "/img/laravel.svg", size: "w-8 h-8" },
    { name: "NestJS", icon: "/img/nestjs.svg", size: "w-8 h-8" },
    { name: "Next.js", icon: "/img/nextdotjs.svg", size: "w-8 h-8" },
    { name: "Tailwind", icon: "/img/tailwindcss.svg", size: "w-8 h-8" },
  ],
  "Database & Cache": [
    { name: "PostgreSQL", icon: "/img/postgresql.svg", size: "w-8 h-8" },
    { name: "MySQL", icon: "/img/mysql.svg", size: "w-8 h-8" },
    { name: "Redis", icon: "/img/redis.svg", size: "w-8 h-8" },
  ],
  "DevOps & Tools": [
    { name: "NGINX", icon: "/img/nginx.svg", size: "w-8 h-8" },
    { name: "Git", icon: "/img/git.svg", size: "w-8 h-8" },
    { name: "GitHub", icon: "/img/github.svg", size: "w-8 h-8" },
    { name: "Bruno", icon: "/img/bruno.svg", size: "w-8 h-8" },
    { name: "Postman", icon: "/img/postman.svg", size: "w-8 h-8" },
    { name: "Hoppscotch", icon: "/img/hoppscotch.svg", size: "w-8 h-8" },
  ],
  "Operating System": [
    { name: "Linux", icon: "/img/linux.svg", size: "w-8 h-8" },
  ],
};

export default function AboutSection() {
  return (
    <section
      className="min-h-[calc(100vh-64px)] relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-page)", color: "var(--text-primary)" }}
    >
      <GridBackground />
      <div className="relative z-10 px-8 md:px-16 max-w-7xl mx-auto py-12 md:py-16">
        {/* Header */}
        <ScrollReveal className="mb-12">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-12 h-[1px] mb-4"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <span className="font-[Plus_Jakarta_Sans] text-xs font-semibold tracking-widest uppercase block mb-4"
            style={{ color: "var(--accent-light)" }}
          >
            About Me
          </span>
          <h1 className="font-[Outfit] text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Crafting systems with{" "}
            <motion.span
              className="italic inline-block"
              style={{ color: "var(--accent)" }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              passion
            </motion.span>
          </h1>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal delay={0.2} className="max-w-3xl mb-16">
          <p className="font-[Plus_Jakarta_Sans] text-base md:text-lg leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Mostly utilize{" "}
            <span className="font-medium" style={{ color: "var(--accent)" }}>Go programming language</span>,{" "}
            <span className="font-medium" style={{ color: "var(--accent)" }}>Gin</span> or{" "}
            <span className="font-medium" style={{ color: "var(--accent)" }}>Fiber</span> web framework, and{" "}
            <span className="font-medium" style={{ color: "var(--accent)" }}>PostgreSQL</span> database to build
            scalable and efficient APIs. Constantly learning and growing each day.
          </p>
          <p className="font-[Plus_Jakarta_Sans] text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Focused on building scalable and reliable REST APIs that meet both
            functional and technical industry standards. Currently expanding my
            expertise into Frontend engineering and Product Management.
          </p>

          {/* Quote */}
          <motion.div
            className="border-l-2 pl-5 py-1"
            style={{ borderColor: "var(--accent)" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="font-[Plus_Jakarta_Sans] text-lg italic opacity-90"
              style={{ color: "var(--accent-light)" }}
            >
              &quot;Fait avec amour&quot; — Made with love
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Tech Stack */}
        <div>
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-3 mb-10">
              <span className="w-12 h-[1px]" style={{ backgroundColor: "var(--accent)" }} />
              <span className="font-[Plus_Jakarta_Sans] text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--accent-light)" }}
              >
                Tech Stack
              </span>
            </div>
          </ScrollReveal>

          {Object.entries(techStack).map(([category, items], categoryIndex) => (
            <ScrollReveal key={category} delay={categoryIndex * 0.1}>
              <div className="mb-10">
                <h4 className="font-[Plus_Jakarta_Sans] text-base font-semibold mb-5 flex items-center gap-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  <motion.span
                    className="w-1 h-5 rounded block"
                    style={{ backgroundColor: "var(--accent)" }}
                    initial={{ height: 0 }}
                    animate={{ height: 20 }}
                    transition={{ duration: 0.4, delay: 0.3 + categoryIndex * 0.1 }}
                  />
                  {category}
                </h4>
                <StaggerContainer staggerDelay={0.05} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-5">
                  {items.map((item) => (
                    <StaggerItem key={item.name}>
                      <motion.div
                        className="tech-icon flex flex-col items-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl shadow-md flex items-center justify-center border transition-all duration-200"
                          style={{
                            backgroundColor: "var(--bg-card)",
                            borderColor: "var(--border-color)",
                          }}
                        >
                          <img
                            src={item.icon}
                            alt={item.name}
                            className={`${item.size} icon-white`}
                          />
                        </div>
                        <span className="text-xs mt-2 font-medium font-[Plus_Jakarta_Sans]"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {item.name}
                        </span>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
