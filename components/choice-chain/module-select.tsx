"use client";

import { FadeIn } from "./fade-in";
import { type Module } from "@/lib/modules-data";
import type { PlayerProgress } from "./choice-chain-app";

interface ModuleSelectProps {
  modules: Module[];
  onSelect: (module: Module) => void;
  progress: PlayerProgress;
  onBack: () => void;
}

export function ModuleSelect({ modules, onSelect, progress, onBack }: ModuleSelectProps) {
  return (
    <div
      className="min-h-screen px-4 py-5 pb-12 font-sans"
      style={{
        background: "linear-gradient(180deg, #1a1a3e 0%, #0f1629 100%)",
      }}
    >
      {/* Header */}
      <FadeIn delay={0}>
        <button
          onClick={onBack}
          className="bg-transparent border-none text-sm cursor-pointer py-1 mb-3 flex items-center gap-2 hover:scale-105 transition-transform"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          <span className="text-lg">🏠</span> Back Home
        </button>
        
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2
              className="font-serif text-2xl font-bold m-0 mb-1 flex items-center gap-2"
              style={{ color: "#fff" }}
            >
              <span className="text-2xl">🗺️</span> Pick Your Adventure!
            </h2>
            <p
              className="text-sm m-0"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Tap a card to start a new quest
            </p>
          </div>
          <div
            className="px-4 py-2 rounded-2xl flex items-center gap-2"
            style={{
              background: "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(251,191,36,0.1))",
              border: "2px solid rgba(251,191,36,0.4)",
            }}
          >
            <span className="text-xl">⭐</span>
            <span className="text-lg font-bold" style={{ color: "#fbbf24" }}>
              {progress.totalStars}
            </span>
          </div>
        </div>
      </FadeIn>

      {/* Progress bar at top */}
      <FadeIn delay={100}>
        <div className="mb-5 px-1">
          <div className="flex justify-between text-xs mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
            <span className="flex items-center gap-1">
              <span>🎯</span> Progress
            </span>
            <span className="font-bold">{progress.completedModules.length}/10 Done!</span>
          </div>
          <div
            className="h-4 rounded-full overflow-hidden relative"
            style={{ background: "rgba(255,255,255,0.1)", border: "2px solid rgba(255,255,255,0.15)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(progress.completedModules.length / 10) * 100}%`,
                background: "linear-gradient(90deg, #f472b6, #818cf8, #38bdf8)",
                boxShadow: "0 0 10px rgba(244,114,182,0.5)",
              }}
            />
            {progress.completedModules.length > 0 && (
              <span 
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs"
                style={{ 
                  left: `calc(${Math.max((progress.completedModules.length / 10) * 100, 10)}% - 10px)`,
                }}
              >
                🏃
              </span>
            )}
          </div>
        </div>
      </FadeIn>

      {/* Modules Grid */}
      <div className="grid grid-cols-2 gap-3">
        {modules.map((m, i) => {
          const isCompleted = progress.completedModules.includes(m.id);
          const earnedStars = progress.moduleStars?.[m.id] || 0;
          return (
            <FadeIn key={m.id} delay={150 + i * 40}>
              <button
                onClick={() => onSelect(m)}
                className="w-full text-left p-4 rounded-3xl cursor-pointer transition-all active:scale-95 hover:scale-[1.03] relative overflow-hidden"
                style={{
                  border: isCompleted 
                    ? `3px solid ${m.accent}` 
                    : "3px solid rgba(255,255,255,0.15)",
                  background: `linear-gradient(145deg, ${m.color[0]}, ${m.color[1]})`,
                  boxShadow: isCompleted 
                    ? `0 6px 25px ${m.accent}50` 
                    : "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                {/* Number badge */}
                <div
                  className="absolute top-2 left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    background: isCompleted ? m.accent : "rgba(255,255,255,0.15)",
                    color: isCompleted ? "#000" : "rgba(255,255,255,0.6)",
                  }}
                >
                  {m.id}
                </div>

                {/* Completed checkmark */}
                {isCompleted && (
                  <div
                    className="absolute top-2 right-2 text-lg"
                  >
                    ✅
                  </div>
                )}
                
                {/* Character emoji - bigger and more prominent */}
                <div
                  className="text-4xl mb-2 mt-4 transition-transform hover:scale-110"
                  style={{
                    filter: isCompleted ? "none" : "saturate(0.8)",
                  }}
                >
                  {m.characterEmoji}
                </div>
                
                {/* Title */}
                <div
                  className="text-sm font-bold leading-tight mb-1"
                  style={{ color: "#fff" }}
                >
                  {m.title}
                </div>
                
                {/* Character name */}
                <div
                  className="text-xs font-medium"
                  style={{ color: m.accent }}
                >
                  with {m.character}
                </div>

                {/* Stars indicator */}
                <div className="mt-2 flex gap-1">
                  {[1, 2, 3].map((star) => (
                    <span
                      key={star}
                      className="text-base"
                      style={{ 
                        opacity: isCompleted && star <= earnedStars ? 1 : 0.25,
                        filter: isCompleted && star <= earnedStars ? "none" : "grayscale(1)",
                      }}
                    >
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Play indicator for incomplete */}
                {!isCompleted && (
                  <div 
                    className="absolute bottom-2 right-2 text-lg opacity-50"
                  >
                    ▶️
                  </div>
                )}
              </button>
            </FadeIn>
          );
        })}
      </div>

      {/* Completion message */}
      {progress.completedModules.length === 10 && (
        <FadeIn delay={700}>
          <div 
            className="mt-6 p-4 rounded-2xl text-center"
            style={{
              background: "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(244,114,182,0.2))",
              border: "2px solid rgba(251,191,36,0.4)",
            }}
          >
            <div className="text-3xl mb-2">🎉🏆🎉</div>
            <p className="text-lg font-bold" style={{ color: "#fbbf24" }}>
              WOW! You finished all adventures!
            </p>
            <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>
              You&apos;re a Super Thinker! Try again for more stars!
            </p>
          </div>
        </FadeIn>
      )}
    </div>
  );
}
