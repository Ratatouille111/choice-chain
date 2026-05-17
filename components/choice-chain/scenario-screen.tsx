"use client";

import { useState } from "react";
import { Particles } from "./particles";
import { FadeIn } from "./fade-in";
import { type Module } from "@/lib/modules-data";

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
    setSelected(idx);
    setRevealing(true);
    setTimeout(() => onChoose(idx), 1200);
  };

  const choiceLabels = ["A", "B", "C"];
  const choiceColors = ["#f472b6", "#818cf8", "#38bdf8"];

  return (
    <div
      className="min-h-screen px-5 py-6 pb-12 font-sans relative overflow-hidden"
      style={{
        background: `linear-gradient(160deg, ${module.color[0]} 0%, ${module.color[1]} 100%)`,
      }}
    >
      <Particles color={module.accent} />

      <div className="relative z-10">
        {/* Back button */}
        <button
          onClick={onBack}
          className="bg-transparent border-none text-sm cursor-pointer py-1 mb-4 flex items-center gap-2"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          <span>←</span> Back to Adventures
        </button>

        {/* Character header */}
        <FadeIn delay={0}>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="text-5xl p-3 rounded-2xl"
              style={{
                background: `${module.accent}20`,
                border: `2px solid ${module.accent}40`,
              }}
            >
              {module.characterEmoji}
            </div>
            <div>
              <div
                className="text-lg font-bold"
                style={{ color: module.accent }}
              >
                {module.character}
              </div>
              <div
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                asks you a question...
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={150}>
          <h1
            className="font-serif text-2xl font-bold m-0 mb-2 leading-tight"
            style={{ color: "#fff" }}
          >
            {module.title}
          </h1>
          <p
            className="text-sm m-0 mb-5 italic"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            {module.hook}
          </p>
        </FadeIn>

        {/* Story/Scenario box */}
        <FadeIn delay={300}>
          <div
            className="rounded-2xl p-5 mb-6"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "2px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="flex gap-2 mb-3">
              <span className="text-lg">📖</span>
              <span
                className="text-xs font-bold uppercase tracking-wider"
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

        {/* What do you think? */}
        <FadeIn delay={450}>
          <p
            className="text-sm font-bold mb-4 flex items-center gap-2"
            style={{ color: "#fff" }}
          >
            <span className="text-xl">🤔</span> What do YOU think?
          </p>
        </FadeIn>

        {/* Choices */}
        <div className="flex flex-col gap-3">
          {module.choices.map((c, i) => {
            const isSelected = selected === i;
            const isDimmed = selected !== null && selected !== i;
            return (
              <FadeIn key={i} delay={550 + i * 100}>
                <button
                  onClick={() => handleSelect(i)}
                  className="w-full text-left p-4 rounded-2xl transition-all duration-300"
                  style={{
                    cursor: selected !== null ? "default" : "pointer",
                    border: `2px solid ${isSelected ? choiceColors[i] : "rgba(255,255,255,0.15)"}`,
                    background: isSelected
                      ? `${choiceColors[i]}25`
                      : "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)",
                    opacity: isDimmed ? 0.3 : 1,
                    transform: isSelected ? "scale(1.02)" : "scale(1)",
                    boxShadow: isSelected ? `0 0 30px ${choiceColors[i]}40` : "none",
                  }}
                >
                  <div className="flex gap-3 items-start">
                    <span
                      className="w-8 h-8 rounded-xl shrink-0 flex items-center justify-center text-sm font-bold transition-all duration-300"
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
                      className="text-sm leading-relaxed m-0"
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
          <div className="fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-center animate-fade-in">
            <div
              className="text-6xl mb-4 animate-bounce"
            >
              {module.characterEmoji}
            </div>
            <p className="text-lg font-bold" style={{ color: "#fff" }}>
              Great choice!
            </p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              Let&apos;s see what happens...
            </p>
            <div
              className="mt-6 w-16 h-1 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.2)" }}
            >
              <div
                className="h-full rounded-full animate-loading"
                style={{ background: module.accent }}
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
          animation: loading 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
