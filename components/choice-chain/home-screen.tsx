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

      {/* Fun floating icons in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {["💭", "✨", "🌟", "💡", "🎯", "🧩"].map((icon, i) => (
          <span
            key={i}
            className="absolute text-3xl opacity-20"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animation: `float-bg ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {icon}
          </span>
        ))}
      </div>

      {/* Bouncing mascot */}
      <FadeIn delay={0} className="relative z-10">
        <div className="relative">
          <div
            className="text-8xl mb-2 animate-bounce-slow"
            style={{ 
              filter: "drop-shadow(0 0 30px rgba(251,191,36,0.5))",
            }}
          >
            🎮
          </div>
          {/* Sparkles around mascot */}
          <span className="absolute -top-2 -right-2 text-2xl animate-pulse">✨</span>
          <span className="absolute -bottom-1 -left-2 text-xl animate-pulse" style={{ animationDelay: "0.5s" }}>⭐</span>
        </div>
      </FadeIn>

      <FadeIn delay={200} className="relative z-10">
        <h1
          className="font-serif font-bold text-5xl md:text-6xl tracking-wide mb-3"
          style={{
            background: "linear-gradient(135deg, #fbbf24, #f472b6, #818cf8, #38bdf8)",
            backgroundSize: "300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 4s linear infinite",
            textShadow: "0 0 40px rgba(251,191,36,0.3)",
          }}
        >
          Choice Chain
        </h1>
        <div 
          className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-2"
          style={{
            background: "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(244,114,182,0.2))",
            border: "2px solid rgba(251,191,36,0.4)",
            color: "#fbbf24",
          }}
        >
          The Big Decision Game!
        </div>
      </FadeIn>

      <FadeIn delay={400} className="relative z-10">
        <p
          className="font-sans text-lg mb-6 max-w-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Make choices, earn stars, and discover how YOUR brain thinks about big questions!
        </p>
      </FadeIn>

      {/* Progress Display */}
      {progress.totalStars > 0 && (
        <FadeIn delay={500} className="relative z-10">
          <div
            className="px-6 py-4 rounded-3xl mb-6 flex items-center gap-4"
            style={{
              background: "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(251,191,36,0.1))",
              border: "3px solid rgba(251,191,36,0.4)",
              boxShadow: "0 0 30px rgba(251,191,36,0.2)",
            }}
          >
            <div className="text-4xl">🏆</div>
            <div className="text-left">
              <div className="text-2xl font-bold" style={{ color: "#fbbf24" }}>
                {progress.totalStars} Stars!
              </div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                {progress.completedModules.length}/10 Adventures Done
              </div>
            </div>
          </div>
        </FadeIn>
      )}

      <FadeIn delay={600} className="relative z-10 w-full max-w-sm">
        <button
          onClick={onStart}
          className="w-full py-5 rounded-3xl text-xl font-bold tracking-wide cursor-pointer transition-all active:scale-95 hover:scale-105 flex items-center justify-center gap-3"
          style={{
            background: "linear-gradient(135deg, #f472b6, #818cf8, #38bdf8)",
            boxShadow: "0 8px 40px rgba(244,114,182,0.4), 0 0 80px rgba(129,140,248,0.2)",
            color: "white",
            border: "3px solid rgba(255,255,255,0.3)",
          }}
        >
          <span className="text-2xl">🚀</span>
          {progress.completedModules.length > 0 ? "Keep Playing!" : "Let's Go!"}
          <span className="text-2xl">🌟</span>
        </button>
      </FadeIn>

      {/* Character parade */}
      <FadeIn delay={800} className="relative z-10">
        <p
          className="text-sm mt-8 mb-3 font-medium"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Meet your adventure friends:
        </p>
        <div className="flex gap-3 justify-center flex-wrap max-w-xs">
          {characters.map((emoji, i) => (
            <div
              key={i}
              className="relative"
            >
              <span
                className="text-3xl block transition-transform hover:scale-125 cursor-default"
                style={{
                  opacity: progress.completedModules.includes(i + 1) ? 1 : 0.35,
                  filter: progress.completedModules.includes(i + 1) ? "none" : "grayscale(0.6)",
                  animation: `float ${2 + (i * 0.2)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
                title={progress.completedModules.includes(i + 1) ? "Completed!" : "Not yet explored"}
              >
                {emoji}
              </span>
              {progress.completedModules.includes(i + 1) && (
                <span className="absolute -top-1 -right-1 text-xs">⭐</span>
              )}
            </div>
          ))}
        </div>
      </FadeIn>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -300% center; }
          100% { background-position: 300% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-bg {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}
