"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TheSaltySide() {
  return (
    <section id="salty" style={{
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "var(--bg-color)", // Alternating background from secondary to primary
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "160px 8vw",
      position: "relative",
      boxSizing: "border-box"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "row-reverse", // Zigzag flow
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "1600px",
        width: "100%",
        gap: "6vw",
        flexWrap: "wrap-reverse" // For mobile responsiveness so text goes below image when collapsed, wait on wrap-reverse image is on bottom? No, standard flip
      }}>
        
        {/* Texts - Right Side visually due to row-reverse */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: "32px", paddingLeft: "2vw" }}
        >
          <div style={{
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--accent-primary)",
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif"
          }}>
            Section 03
          </div>
          
          <h2 style={{
            fontSize: "clamp(3.5rem, 5vw, 5.5rem)",
            color: "var(--text-primary)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500
          }}>
            The Salty Side
          </h2>
          
          <p style={{
            fontSize: "1.3rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            fontWeight: 400,
            maxWidth: "90%",
            fontFamily: "'Inter', sans-serif"
          }}>
            Balanced flavors for every hour of the day.
          </p>
          
          <div style={{ marginTop: "24px" }}>
            <button className="lux-btn" style={{
              backgroundColor: "transparent",
              color: "var(--text-primary)",
              border: "1px solid var(--text-primary)",
              padding: "16px 40px",
              boxShadow: "none"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-primary)";
              e.currentTarget.style.color = "var(--bg-color)";
              e.currentTarget.style.borderColor = "var(--accent-primary)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(217, 108, 74, 0.3)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--text-primary)";
              e.currentTarget.style.borderColor = "var(--text-primary)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}>
              Explore Menu
            </button>
          </div>
        </motion.div>

        {/* Image - Left Side visually due to row-reverse */}
        <motion.div
           initial={{ opacity: 0, scale: 0.96 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
           style={{ 
             flex: "1 1 500px", 
             position: "relative", 
             height: "75vh", 
             minHeight: "500px",
             maxHeight: "900px", 
             borderRadius: "12px", 
             overflow: "hidden", 
             boxShadow: "0 30px 60px rgba(44, 37, 35, 0.08)"
           }}
        >
          <Image 
            src="/salty-side-display.png" 
            alt="The Salty Side - Artisan Savory Selection" 
            fill 
            style={{ objectFit: "cover", objectPosition: "center" }}
            quality={100}
            priority
          />
        </motion.div>
        
      </div>
    </section>
  );
}
