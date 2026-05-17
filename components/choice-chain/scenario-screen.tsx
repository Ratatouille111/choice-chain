"use client";

import { useState } from "react";
import { Particles } from "./particles";
import { FadeIn } from "./fade-in";
import { type Module } from "@/lib/modules-data";
import { sounds } from "@/lib/sounds";

interface ScenarioScreenProps {
  module: Module;
  onChoose: (idx: number) => void;
  onBack: () => void;
}

export function ScenarioScreen({ module, onChoose, onBack }: ScenarioScreenProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealing, setRevealing] = useState(false);

  const handleSelect = (idx: number) => {
    if (selected !== null || revealing) return;
    sounds.choose();
    setSelected(idx);
    setRevealing(true);
    setTimeout(() => onChoose(idx), 1500);
  };

  const handleBack = () => {
    sounds.back();
    onBack();
  };

  const choiceLabels = ["A", "B", "C"];
  const choiceColors = ["#f472b6", "#818cf8", "#38bdf8"];
  const choiceIcons = ["🅰️", "🅱️", "©️"];

  return (
    <div
      className="min-h-screen px-4 py-5 pb-12 font-sans relative overflow-hidden"
      style={{
        background: `linear-gradient(160deg, ${module.color[0]} 0%, ${module.color[1]} 100%)`,
      }}
    >
      <Particles color={module.accent} />

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="bg-transparent border-none text-sm cursor-pointer py-1 mb-3 flex items-center gap-2 hover:scale-105 transition-transform"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          <span className="text-lg">🗺️</span> Back to Adventures
        </button>

        {/* Character header - bigger and more fun */}
        <FadeIn delay={0}>
          <div 
            className="rounded-3xl p-4 mb-4 flex items-center gap-4"
            style={{
              background: `${module.accent}15`,
              border: `3px solid ${module.accent}40`,
            }}
          >
            <div
              className="text-6xl animate-wiggle"
            >
              {module.characterEmoji}
            </div>
            <div>
              <div
                className="text-xl font-bold font-serif"
                style={{ color: module.accent }}
              >
                {module.character}
              </div>
              <div
                className="text-sm flex items-center gap-1"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                <span>💭</span> has a question for you!
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={150}>
          <h1
            className="font-serif text-2xl font-bold m-0 mb-1 leading-tight"
            style={{ color: "#fff" }}
          >
            {module.title}
          </h1>
          <p
            className="text-sm m-0 mb-4 italic flex items-center gap-1"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            <span>🤔</span> {module.hook}
          </p>
        </FadeIn>

        {/* Story/Scenario box - more visual */}
        <FadeIn delay={300}>
          <div
            className="rounded-3xl p-5 mb-5"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "3px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex gap-2 mb-3 items-center">
              <span className="text-2xl">📖</span>
              <span
                className="text-sm font-bold uppercase tracking-wider"
                style={{ color: module.accent }}
              >
                The Story
              </span>
            </div>
            <p
              className="text-base leading-relaxed m-0"
              style={{ color: "rgba(255,255,255,0.9)" }}
            >
              {module.scenario}
            </p>
          </div>
        </FadeIn>

        {/* What do you think? - bigger prompt */}
        <FadeIn delay={450}>
          <div 
            className="flex items-center justify-center gap-2 mb-4 py-2"
          >
            <span className="text-2xl">🧠</span>
            <p
              className="text-lg font-bold m-0"
              style={{ color: "#fff" }}
            >
              What do YOU think?
            </p>
            <span className="text-2xl">💭</span>
          </div>
        </FadeIn>

        {/* Choices - bigger, more colorful */}
        <div className="flex flex-col gap-3">
          {module.choices.map((c, i) => {
            const isSelected = selected === i;
            const isDimmed = selected !== null && selected !== i;
            return (
              <FadeIn key={i} delay={550 + i * 100}>
                <button
                  onClick={() => handleSelect(i)}
                  className="w-full text-left p-4 rounded-3xl transition-all duration-300"
                  style={{
                    cursor: selected !== null ? "default" : "pointer",
                    border: `3px solid ${isSelected ? choiceColors[i] : "rgba(255,255,255,0.15)"}`,
                    background: isSelected
                      ? `linear-gradient(135deg, ${choiceColors[i]}30, ${choiceColors[i]}15)`
                      : "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    opacity: isDimmed ? 0.25 : 1,
                    transform: isSelected ? "scale(1.02)" : "scale(1)",
                    boxShadow: isSelected ? `0 0 40px ${choiceColors[i]}50` : "none",
                  }}
                >
                  <div className="flex gap-3 items-start">
                    <span
                      className="w-10 h-10 rounded-2xl shrink-0 flex items-center justify-center text-base font-bold transition-all duration-300"
                      style={{
                        background: isSelected
                          ? choiceColors[i]
                          : "rgba(255,255,255,0.1)",
                        border: `2px solid ${isSelected ? choiceColors[i] : "rgba(255,255,255,0.2)"}`,
                        color: isSelected ? "#000" : "rgba(255,255,255,0.7)",
                      }}
                    >
                      {choiceLabels[i]}
                    </span>
                    <p
                      className="text-sm leading-relaxed m-0 pt-1"
                      style={{
                        color: isSelected ? "#fff" : "rgba(255,255,255,0.85)",
                      }}
                    >
                      {c}
                    </p>
                  </div>
                </button>
              </FadeIn>
            );
          })}
        </div>

        {/* Reveal overlay with fun animation */}
        {revealing && (
          <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center animate-fade-in">
            <div className="text-7xl mb-4 animate-bounce">
              {module.characterEmoji}
            </div>
            <div className="flex gap-2 mb-3">
              {["⭐", "⭐", "⭐"].map((star, i) => (
                <span 
                  key={i} 
                  className="text-3xl animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {star}
                </span>
              ))}
            </div>
            <p className="text-xl font-bold font-serif" style={{ color: "#fff" }}>
              Great choice!
            </p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Let&apos;s see how many stars you earned...
            </p>
            <div
              className="mt-6 w-24 h-2 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.2)" }}
            >
              <div
                className="h-full rounded-full animate-loading"
                style={{ background: `linear-gradient(90deg, ${module.accent}, #fbbf24)` }}
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease;
        }
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-loading {
          animation: loading 1.2s ease-out forwards;
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        .animate-wiggle {
          animation: wiggle 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
