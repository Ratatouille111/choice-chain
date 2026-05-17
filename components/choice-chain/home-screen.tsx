"use client";

import { Particles } from "./particles";
import { FadeIn } from "./fade-in";
import type { PlayerProgress } from "./choice-chain-app";

interface HomeScreenProps {
  onStart: () => void;
  progress: PlayerProgress;
}

export function HomeScreen({ onStart, progress }: HomeScreenProps) {
  const characters = ["🤖", "🌱", "🦉", "💝", "🚀", "📱", "🦋", "🧬", "🔬", "🌍"];
  
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-8 text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1a1a3e 0%, #2d1b4e 50%, #1a2a4e 100%)",
      }}
    >
      <Particles color="#fbbf24" />

      {/* Bouncing mascot */}
      <FadeIn delay={0} className="relative z-10">
        <div
          className="text-7xl mb-4 animate-bounce-slow"
          style={{ 
            filter: "drop-shadow(0 0 20px rgba(251,191,36,0.5))",
          }}
        >
          🎮
        </div>
      </FadeIn>

      <FadeIn delay={200} className="relative z-10">
        <h1
          className="font-serif font-bold text-4xl md:text-5xl tracking-wide mb-2"
          style={{
            background: "linear-gradient(135deg, #fbbf24, #f472b6, #818cf8)",
            backgroundSize: "200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 3s linear infinite",
          }}
        >
          Choice Chain
        </h1>
        <p
          className="text-lg font-medium mb-1"
          style={{ color: "#fbbf24" }}
        >
          The Big Decision Game!
        </p>
      </FadeIn>

      <FadeIn delay={400} className="relative z-10">
        <p
          className="font-sans text-base mb-6 max-w-xs"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Make choices, learn cool stuff, and discover what kind of thinker you are!
        </p>
      </FadeIn>

      {/* Progress Display */}
      {progress.totalStars > 0 && (
        <FadeIn delay={500} className="relative z-10">
          <div
            className="px-5 py-3 rounded-2xl mb-6 flex items-center gap-3"
            style={{
              background: "rgba(251,191,36,0.15)",
              border: "2px solid rgba(251,191,36,0.3)",
            }}
          >
            <span className="text-2xl">⭐</span>
            <div className="text-left">
              <div className="text-xl font-bold" style={{ color: "#fbbf24" }}>
                {progress.totalStars} Stars
              </div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                {progress.completedModules.length}/10 Adventures Done!
              </div>
            </div>
          </div>
        </FadeIn>
      )}

      <FadeIn delay={600} className="relative z-10 w-full max-w-xs">
        <button
          onClick={onStart}
          className="w-full py-4 rounded-2xl text-lg font-bold tracking-wide cursor-pointer transition-all active:scale-95 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #f472b6, #818cf8, #38bdf8)",
            boxShadow: "0 8px 32px rgba(244,114,182,0.4), 0 0 60px rgba(129,140,248,0.2)",
            color: "white",
            border: "none",
          }}
        >
          {progress.completedModules.length > 0 ? "Continue Adventure!" : "Start Adventure!"}
        </button>
      </FadeIn>

      {/* Character parade */}
      <FadeIn delay={800} className="relative z-10">
        <div className="mt-6 flex gap-2 justify-center">
          {characters.map((emoji, i) => (
            <span
              key={i}
              className="text-2xl transition-transform hover:scale-125 cursor-default"
              style={{
                opacity: progress.completedModules.includes(i + 1) ? 1 : 0.4,
                filter: progress.completedModules.includes(i + 1) ? "none" : "grayscale(0.5)",
                animation: `float ${2 + (i * 0.2)}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
              title={progress.completedModules.includes(i + 1) ? "Completed!" : "Not yet explored"}
            >
              {emoji}
            </span>
          ))}
        </div>
        <p
          className="text-xs mt-3"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Meet the friends who will teach you!
        </p>
      </FadeIn>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}
