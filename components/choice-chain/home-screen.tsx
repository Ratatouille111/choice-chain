"use client";

import { Particles } from "./particles";
import { FadeIn } from "./fade-in";

interface HomeScreenProps {
  onStart: () => void;
}

export function HomeScreen({ onStart }: HomeScreenProps) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-8 text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0a0a1a 0%, #0d1a2e 50%, #0a0a1a 100%)",
      }}
    >
      <Particles color="#4fc3f7" />

      {/* Animated orb */}
      <div
        className="relative z-10 mb-8 w-[120px] h-[120px] rounded-full animate-pulse-orb"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #4fc3f7 0%, #1565c0 50%, #0d1a3e 100%)",
          boxShadow:
            "0 0 60px rgba(79,195,247,0.4), 0 0 120px rgba(79,195,247,0.15)",
        }}
      />

      <FadeIn delay={200} className="relative z-10">
        <h1
          className="font-serif font-light text-5xl md:text-6xl tracking-wider mb-1 animate-shimmer"
          style={{
            background: "linear-gradient(90deg, #e8f4fd, #4fc3f7, #e8f4fd)",
            backgroundSize: "200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Choice
          <br />
          Chain
        </h1>
      </FadeIn>

      <FadeIn delay={500} className="relative z-10">
        <p
          className="font-sans font-light text-sm tracking-[0.15em] uppercase mb-2"
          style={{ color: "rgba(180,210,240,0.75)" }}
        >
          Every decision reshapes how you see the world.
        </p>
        <p
          className="text-xs tracking-[0.08em] mb-10"
          style={{ color: "rgba(150,190,230,0.5)" }}
        >
          An interactive STS ethical decision simulator · 10 modules
        </p>
      </FadeIn>

      <FadeIn delay={800} className="relative z-10 w-full max-w-xs">
        <button
          onClick={onStart}
          className="w-full py-4 rounded-2xl border-none text-white text-base font-sans font-medium tracking-[0.08em] cursor-pointer transition-transform active:scale-[0.97]"
          style={{
            background: "linear-gradient(135deg, #1565c0, #0288d1, #26c6da)",
            boxShadow: "0 8px 32px rgba(79,195,247,0.35)",
          }}
        >
          Begin Simulation
        </button>

        <div className="mt-4 flex gap-2 justify-center flex-wrap">
          {["Heidegger", "Aristotle", "Bill Joy", "IPCC", "+6 more"].map((t) => (
            <span
              key={t}
              className="text-[0.7rem] rounded-full px-3 py-1 tracking-[0.05em]"
              style={{
                color: "rgba(150,200,240,0.5)",
                border: "1px solid rgba(79,195,247,0.15)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </FadeIn>

      <style jsx>{`
        @keyframes pulse-orb {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 60px rgba(79, 195, 247, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 90px rgba(79, 195, 247, 0.6);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .animate-pulse-orb {
          animation: pulse-orb 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
