"use client";

import { useState, useEffect } from "react";
import { Particles } from "./particles";
import { FadeIn } from "./fade-in";
import { type Module } from "@/lib/modules-data";
import type { PlayerProgress } from "./choice-chain-app";

interface ResultScreenProps {
  module: Module;
  choiceIdx: number;
  onNext: () => void;
  onMenu: () => void;
  isLast: boolean;
  progress: PlayerProgress;
}

export function ResultScreen({
  module,
  choiceIdx,
  onNext,
  onMenu,
  isLast,
  progress,
}: ResultScreenProps) {
  const fb = module.feedback[choiceIdx];
  const [showStars, setShowStars] = useState(false);
  const [starCount, setStarCount] = useState(0);

  // Animate stars appearing one by one
  useEffect(() => {
    const timer1 = setTimeout(() => setShowStars(true), 800);
    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (showStars && starCount < fb.stars) {
      const timer = setTimeout(() => setStarCount(s => s + 1), 300);
      return () => clearTimeout(timer);
    }
  }, [showStars, starCount, fb.stars]);

  const encouragements = [
    "Great thinking!",
    "You're so thoughtful!",
    "What a smart choice!",
    "Your brain is amazing!",
    "Keep thinking big!",
  ];
  
  const randomEncouragement = encouragements[module.id % encouragements.length];

  return (
    <div
      className="min-h-screen px-5 py-6 pb-12 font-sans relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${module.color[0]} 0%, #0f1629 100%)`,
      }}
    >
      <Particles color={module.accent} />

      <div className="relative z-10">
        {/* Character celebration */}
        <FadeIn delay={0}>
          <div className="text-center mb-4">
            <div
              className="inline-block text-6xl p-4 rounded-3xl animate-wiggle"
              style={{
                background: `${module.accent}15`,
                border: `3px solid ${module.accent}40`,
              }}
            >
              {module.characterEmoji}
            </div>
          </div>
        </FadeIn>

        {/* Stars earned */}
        <FadeIn delay={400}>
          <div className="text-center mb-4">
            <p
              className="text-sm font-bold mb-2"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              You earned
            </p>
            <div className="flex justify-center gap-2 mb-2">
              {[1, 2, 3].map((star) => (
                <span
                  key={star}
                  className="text-4xl transition-all duration-300"
                  style={{
                    transform: showStars && star <= starCount ? "scale(1)" : "scale(0)",
                    opacity: showStars && star <= starCount ? 1 : 0.2,
                    filter: star <= fb.stars ? "none" : "grayscale(1)",
                  }}
                >
                  ⭐
                </span>
              ))}
            </div>
            <p
              className="text-lg font-bold"
              style={{ color: module.accent }}
            >
              {randomEncouragement}
            </p>
          </div>
        </FadeIn>

        {/* Result title */}
        <FadeIn delay={600}>
          <h2
            className="font-serif text-2xl font-bold text-center m-0 mb-1"
            style={{ color: "#fff" }}
          >
            {fb.title}
          </h2>
          <p
            className="text-xs text-center m-0 mb-5"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            with {module.character}
          </p>
        </FadeIn>

        {/* Your choice box */}
        <FadeIn delay={750}>
          <div
            className="rounded-2xl p-4 mb-4"
            style={{
              background: `${module.accent}15`,
              border: `2px solid ${module.accent}40`,
            }}
          >
            <div className="flex gap-2 mb-2">
              <span>💭</span>
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: module.accent }}
              >
                You said
              </span>
            </div>
            <p
              className="text-sm leading-relaxed m-0 italic"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              &quot;{module.choices[choiceIdx]}&quot;
            </p>
          </div>
        </FadeIn>

        {/* What this means */}
        <FadeIn delay={900}>
          <div
            className="rounded-2xl p-4 mb-4"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "2px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex gap-2 mb-2">
              <span>🧠</span>
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "#fff" }}
              >
                Here&apos;s what this means
              </span>
            </div>
            <p
              className="text-sm leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              {fb.body}
            </p>
          </div>
        </FadeIn>

        {/* Key insight */}
        <FadeIn delay={1050}>
          <div
            className="rounded-2xl p-4 mb-6"
            style={{
              background: `linear-gradient(135deg, ${module.accent}15, ${module.accent}08)`,
              border: `2px solid ${module.accent}50`,
            }}
          >
            <div className="flex gap-2 mb-2">
              <span>💡</span>
              <span
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: module.accent }}
              >
                The Big Idea
              </span>
            </div>
            <p
              className="text-base leading-relaxed m-0 font-medium"
              style={{ color: "rgba(255,255,255,0.95)" }}
            >
              {fb.insight}
            </p>
          </div>
        </FadeIn>

        {/* Total progress */}
        <FadeIn delay={1150}>
          <div
            className="rounded-xl p-3 mb-6 flex items-center justify-between"
            style={{
              background: "rgba(251,191,36,0.1)",
              border: "1px solid rgba(251,191,36,0.2)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">🏆</span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                Total Stars
              </span>
            </div>
            <span className="text-lg font-bold" style={{ color: "#fbbf24" }}>
              {progress.totalStars} ⭐
            </span>
          </div>
        </FadeIn>

        {/* Navigation buttons */}
        <FadeIn delay={1250}>
          <div className="flex gap-3">
            <button
              onClick={onMenu}
              className="flex-1 py-3.5 rounded-xl text-sm font-bold cursor-pointer transition-all active:scale-95"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "2px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              ← All Adventures
            </button>
            {!isLast && (
              <button
                onClick={onNext}
                className="flex-[2] py-3.5 rounded-xl text-sm font-bold cursor-pointer transition-all active:scale-95 hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(135deg, ${module.accent}, ${module.color[1]})`,
                  border: `2px solid ${module.accent}`,
                  color: "#fff",
                  boxShadow: `0 4px 20px ${module.accent}40`,
                }}
              >
                Next Adventure →
              </button>
            )}
            {isLast && (
              <button
                onClick={onMenu}
                className="flex-[2] py-3.5 rounded-xl text-sm font-bold cursor-pointer transition-all active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #fbbf24, #f472b6)",
                  border: "2px solid #fbbf24",
                  color: "#000",
                  boxShadow: "0 4px 20px rgba(251,191,36,0.4)",
                }}
              >
                🎉 You Did It!
              </button>
            )}
          </div>
        </FadeIn>
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
