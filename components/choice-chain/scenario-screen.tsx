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
    setTimeout(() => onChoose(idx), 900);
  };

  return (
    <div
      className="min-h-screen px-5 py-6 pb-12 font-sans relative overflow-hidden"
      style={{
        background: `linear-gradient(160deg, ${module.color[0]} 0%, ${module.color[1]} 100%)`,
      }}
    >
      <Particles color={module.accent} />

      <div className="relative z-10">
        {/* Back */}
        <button
          onClick={onBack}
          className="bg-transparent border-none text-xs tracking-[0.1em] uppercase cursor-pointer py-1 mb-6 flex items-center gap-1"
          style={{ color: "rgba(200,220,255,0.5)" }}
        >
          ← Scenarios
        </button>

        <FadeIn delay={0}>
          <div
            className="inline-block px-3 py-1 rounded-full text-[0.72rem] tracking-[0.1em] uppercase mb-3"
            style={{
              border: `1px solid ${module.accent}44`,
              background: module.accent + "15",
              color: module.accent,
            }}
          >
            {module.thinker}
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <h1
            className="font-serif text-[1.7rem] font-normal m-0 mb-1 leading-tight"
            style={{ color: "#e8f4fd" }}
          >
            {module.title}
          </h1>
          <p
            className="text-[0.82rem] m-0 mb-6 italic"
            style={{ color: "rgba(180,210,240,0.55)" }}
          >
            {module.hook}
          </p>
        </FadeIn>

        <FadeIn delay={350}>
          <div
            className="rounded-2xl p-4 mb-6"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
            }}
          >
            <p
              className="text-[0.95rem] leading-relaxed m-0 font-light"
              style={{ color: "#d0e8f8" }}
            >
              {module.scenario}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <p
            className="text-[0.7rem] tracking-[0.2em] uppercase mb-4"
            style={{ color: "rgba(180,210,240,0.4)" }}
          >
            Your position
          </p>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {module.choices.map((c, i) => {
            const isSelected = selected === i;
            const isDimmed = selected !== null && selected !== i;
            return (
              <FadeIn key={i} delay={500 + i * 120}>
                <button
                  onClick={() => handleSelect(i)}
                  className="w-full text-left p-4 rounded-2xl transition-all duration-300"
                  style={{
                    cursor: selected !== null ? "default" : "pointer",
                    border: `1.5px solid ${isSelected ? module.accent : "rgba(255,255,255,0.08)"}`,
                    background: isSelected
                      ? module.accent + "18"
                      : "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(12px)",
                    opacity: isDimmed ? 0.35 : 1,
                    transform: isSelected ? "scale(1.01)" : "scale(1)",
                    boxShadow: isSelected ? `0 0 24px ${module.accent}33` : "none",
                  }}
                >
                  <div className="flex gap-3 items-start">
                    <span
                      className="w-6 h-6 rounded-lg shrink-0 mt-0.5 flex items-center justify-center text-[0.7rem] font-semibold transition-all duration-300"
                      style={{
                        background: isSelected
                          ? module.accent
                          : "rgba(255,255,255,0.06)",
                        border: `1px solid ${isSelected ? module.accent : "rgba(255,255,255,0.15)"}`,
                        color: isSelected ? "#000" : "rgba(200,220,255,0.5)",
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <p
                      className="text-[0.88rem] leading-relaxed m-0 font-light"
                      style={{
                        color: isSelected ? "#e8f4fd" : "rgba(200,225,250,0.75)",
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

        {/* Reveal overlay */}
        {revealing && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center animate-fade-in">
            <div
              className="w-12 h-12 rounded-full animate-spin"
              style={{
                border: `3px solid ${module.accent}`,
                borderTopColor: "transparent",
              }}
            />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease;
        }
      `}</style>
    </div>
  );
}
