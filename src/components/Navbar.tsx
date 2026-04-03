"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="navbar-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
        
        <div className="nav-links" style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-secondary)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <a href="#sweet" style={{ transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color="var(--accent-primary)"} onMouseLeave={(e) => e.currentTarget.style.color="var(--text-secondary)"}>The Sweet Side</a>
          <a href="#salty" style={{ transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color="var(--accent-primary)"} onMouseLeave={(e) => e.currentTarget.style.color="var(--text-secondary)"}>The Salty Side</a>
          <a href="#specials" style={{ transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color="var(--accent-primary)"} onMouseLeave={(e) => e.currentTarget.style.color="var(--text-secondary)"}>Specials</a>
          <a href="#about" style={{ transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color="var(--accent-primary)"} onMouseLeave={(e) => e.currentTarget.style.color="var(--text-secondary)"}>About Us</a>
        </div>

        <div className="nav-actions">
          <button className="lux-btn desk-btn">Order Now</button>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="mobile-dropdown"
          >
            <a href="#sweet" onClick={() => setMobileMenuOpen(false)}>The Sweet Side</a>
            <a href="#salty" onClick={() => setMobileMenuOpen(false)}>The Salty Side</a>
            <a href="#specials" onClick={() => setMobileMenuOpen(false)}>Specials</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <button className="lux-btn" style={{ width: "100%", marginTop: "10px" }}>Order Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
