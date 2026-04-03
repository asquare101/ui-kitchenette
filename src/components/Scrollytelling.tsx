"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 240;

export default function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, "0");
      img.src = `/frames/ezgif-frame-${frameNumber}.jpg`;
      img.onload = () => {
        loaded++;
        setImagesLoaded(loaded);
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  const drawFrame = (index: number) => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;
    const img = imagesRef.current[index];
    if (img && img.complete) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#FDF8F5";
        ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        
        const canvasRatio = canvasRef.current.width / canvasRef.current.height;
        const imgRatio = img.width / img.height;
        
        let drawWidth = canvasRef.current.width;
        let drawHeight = canvasRef.current.height;
        let offsetX = 0;
        let offsetY = 0;
        
        if (canvasRatio > imgRatio) {
          drawWidth = canvasRef.current.height * imgRatio;
          offsetX = (canvasRef.current.width - drawWidth) / 2;
        } else {
          drawHeight = canvasRef.current.width / imgRatio;
          offsetY = (canvasRef.current.height - drawHeight) / 2;
        }
        
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let frameIndex = Math.floor(latest * (FRAME_COUNT - 1));
    frameIndex = Math.max(0, Math.min(FRAME_COUNT - 1, frameIndex));
    drawFrame(frameIndex);
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        drawFrame(Math.floor(scrollYProgress.get() * (FRAME_COUNT - 1)));
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Text Animations mapped precisely to requirements
  // 0-20%: HERO
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [20, 0, 0, -20]);

  // 20-40%: PIPE WORK
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.25, 0.35, 0.4], [20, 0, 0, -20]);

  // 40-65%: FRUIT ARRIVAL
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.45, 0.6, 0.65], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.45, 0.6, 0.65], [20, 0, 0, -20]);

  // 65-85%: FLOWERS + GOLD
  const opacity4 = useTransform(scrollYProgress, [0.65, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.65, 0.7, 0.8, 0.85], [20, 0, 0, -20]);

  // 85-100%: FINAL LOCK
  const opacity5 = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);
  const y5 = useTransform(scrollYProgress, [0.85, 0.9, 1], [20, 0, 0]);

  return (
    <div ref={containerRef} style={{ height: "400vh", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        
        {imagesLoaded < FRAME_COUNT && (
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, bottom: 0, 
            display: "flex", alignItems: "center", justifyContent: "center",
            backgroundColor: "var(--bg-color)", zIndex: 10,
            color: "var(--text-secondary)", fontSize: "0.85rem", letterSpacing: "0.05em"
          }}>
            LOADING EXPERIENCE {Math.round((imagesLoaded / FRAME_COUNT) * 100)}%
          </div>
        )}
        
        <canvas 
          ref={canvasRef} 
          style={{ width: "100%", height: "100%", display: "block" }} 
        />

        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
          
          <StoryBlock 
            opacity={opacity1} y={y1}
            title="Sweet and salty, crafted with love."
            subtitle="By Gujranwala's favorite nand-bhabhi dynamic duo."
          />
          
          <StoryBlock 
            opacity={opacity2} y={y2}
            title="Artisanal & Homemade."
            subtitle="Every dish is created in our warm kitchen, just for you."
          />
          
          <StoryBlock 
            opacity={opacity3} y={y3}
            title="Sweet Cravings."
            subtitle="From comforting cakes to delicate desserts, beautifully piped."
          />
          
          <StoryBlock 
            opacity={opacity4} y={y4}
            title="Salty Delights."
            subtitle="Elevating your gatherings with every savory bite."
          />
          
          <StoryBlock 
            opacity={opacity5} y={y5}
            title="Delivered to your door."
            subtitle="Through inDrive in Gujranwala. Pre-order 24-48 hours in advance."
            cta="Order Now"
          />

        </div>
      </div>
    </div>
  );
}

function StoryBlock({ opacity, y, title, subtitle, cta }: any) {
  return (
    <motion.div 
      className="story-block-container"
      style={{
        opacity, y,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "18px"
      }}
    >
      <h2 className="story-title" style={{ fontWeight: 300, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
        {title}
      </h2>
      <p className="story-subtitle" style={{ color: "var(--text-secondary)", fontWeight: 400, letterSpacing: "0.01em" }}>
        {subtitle}
      </p>
      {cta && (
        <div style={{ marginTop: "32px" }}>
          <button className="lux-btn" style={{ pointerEvents: "auto" }}>{cta}</button>
        </div>
      )}
    </motion.div>
  );
}
