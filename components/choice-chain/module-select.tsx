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
      className="min-h-screen px-5 py-6 pb-12 font-sans"
      style={{
        background: "linear-gradient(180deg, #1a1a3e 0%, #0f1629 100%)",
      }}
    >
      {/* Header */}
      <FadeIn delay={0}>
        <button
          onClick={onBack}
          className="bg-transparent border-none text-sm cursor-pointer py-1 mb-4 flex items-center gap-2"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          <span>←</span> Home
        </button>
        
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2
              className="font-serif text-2xl font-bold m-0 mb-1"
              style={{ color: "#fff" }}
            >
              Pick Your Adventure!
            </h2>
            <p
              className="text-sm m-0"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Each story teaches you something new
            </p>
          </div>
          <div
            className="px-3 py-2 rounded-xl flex items-center gap-2"
            style={{
              background: "rgba(251,191,36,0.15)",
              border: "1px solid rgba(251,191,36,0.3)",
            }}
          >
            <span>⭐</span>
            <span className="font-bold" style={{ color: "#fbbf24" }}>
              {progress.totalStars}
            </span>
          </div>
        </div>
      </FadeIn>

      {/* Modules Grid */}
      <div className="grid grid-cols-2 gap-3">
        {modules.map((m, i) => {
          const isCompleted = progress.completedModules.includes(m.id);
          return (
            <FadeIn key={m.id} delay={i * 50}>
              <button
                onClick={() => onSelect(m)}
                className="w-full text-left p-4 rounded-2xl cursor-pointer transition-all active:scale-95 hover:scale-[1.02] relative overflow-hidden"
                style={{
                  border: isCompleted 
                    ? `2px solid ${m.accent}` 
                    : "2px solid rgba(255,255,255,0.1)",
                  background: `linear-gradient(135deg, ${m.color[0]}, ${m.color[1]})`,
                  boxShadow: isCompleted 
                    ? `0 4px 20px ${m.accent}40` 
                    : "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                {/* Completed badge */}
                {isCompleted && (
                  <div
                    className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                    style={{
                      background: m.accent,
                      color: "#000",
                    }}
                  >
                    ✓
                  </div>
                )}
                
                {/* Character emoji */}
                <div
                  className="text-3xl mb-2"
                  style={{
                    filter: isCompleted ? "none" : "saturate(0.7)",
                  }}
                >
                  {m.characterEmoji}
                </div>
                
                {/* Title */}
                <div
                  className="text-sm font-semibold leading-tight mb-1"
                  style={{ color: "#fff" }}
                >
                  {m.title}
                </div>
                
                {/* Character name */}
                <div
                  className="text-xs"
                  style={{ color: m.accent }}
                >
                  with {m.character}
                </div>

                {/* Stars indicator for completed */}
                {isCompleted && (
                  <div className="mt-2 flex gap-1">
                    {[1, 2, 3].map((star) => (
                      <span
                        key={star}
                        className="text-sm"
                        style={{ 
                          opacity: star <= (m.feedback[0].stars || 2) ? 1 : 0.3 
                        }}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                )}
              </button>
            </FadeIn>
          );
        })}
      </div>

      {/* Progress bar at bottom */}
      <FadeIn delay={600}>
        <div className="mt-8 px-2">
          <div className="flex justify-between text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
            <span>Progress</span>
            <span>{progress.completedModules.length}/10 Complete</span>
          </div>
          <div
            className="h-3 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(progress.completedModules.length / 10) * 100}%`,
                background: "linear-gradient(90deg, #f472b6, #818cf8, #38bdf8)",
              }}
            />
          </div>
          {progress.completedModules.length === 10 && (
            <p className="text-center mt-4 text-sm" style={{ color: "#fbbf24" }}>
              🎉 Amazing! You completed all adventures! 🎉
            </p>
          )}
        </div>
      </FadeIn>
    </div>
  );
}
