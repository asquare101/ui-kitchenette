"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 60px",
        zIndex: 100,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(253, 248, 245, 0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(230, 220, 215, 0.4)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
      
      <div style={{ fontSize: "1.4rem", fontWeight: 600, letterSpacing: "-0.01em", color: "var(--accent-primary)", fontFamily: "'Playfair Display', serif" }}>
        U&I Kitchenette
      </div>
      
      <div style={{ display: "flex", gap: "40px", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-secondary)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        <a href="#sweet" style={{ transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color="var(--accent-primary)"} onMouseLeave={(e) => e.currentTarget.style.color="var(--text-secondary)"}>The Sweet Side</a>
        <a href="#salty" style={{ transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color="var(--accent-primary)"} onMouseLeave={(e) => e.currentTarget.style.color="var(--text-secondary)"}>The Salty Side</a>
        <a href="#specials" style={{ transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color="var(--accent-primary)"} onMouseLeave={(e) => e.currentTarget.style.color="var(--text-secondary)"}>Specials</a>
        <a href="#about" style={{ transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color="var(--accent-primary)"} onMouseLeave={(e) => e.currentTarget.style.color="var(--text-secondary)"}>About Us</a>
      </div>

      <div>
        <button className="lux-btn">Order Now</button>
      </div>
    </nav>
  );
}
