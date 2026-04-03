import Navbar from "@/components/Navbar";
import Scrollytelling from "@/components/Scrollytelling";
import TheSweetSide from "@/components/TheSweetSide";
import TheSaltySide from "@/components/TheSaltySide";
import Specials from "@/components/Specials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Scrollytelling />
      <TheSweetSide />
      <TheSaltySide />
      <Specials />
      
      {/* Footer / End of experience block to allow scrolling past */}
      <footer style={{ 
        height: "50vh", 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-secondary)",
        gap: "16px",
        borderTop: "1px solid rgba(230, 220, 215, 0.4)"
      }}>
        <div style={{ fontSize: "1.8rem", fontWeight: 600, color: "var(--accent-primary)", letterSpacing: "-0.01em", fontFamily: "'Playfair Display', serif" }}>
          U&I Kitchenette
        </div>
        <div style={{ fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          © {new Date().getFullYear()} U&I Kitchenette. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
