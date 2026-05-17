"use client";

import { useState, useEffect, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
      }}
    >
      {children}
    </div>
  );
}
