"use client";

import { Particles } from "./particles";
import { FadeIn } from "./fade-in";
import { type Module } from "@/lib/modules-data";

interface ResultScreenProps {
  module: Module;
  choiceIdx: number;
  onNext: () => void;
  onMenu: () => void;
  isLast: boolean;
}

export function ResultScreen({
  module,
  choiceIdx,
  onNext,
  onMenu,
  isLast,
}: ResultScreenProps) {
  const fb = module.feedback[choiceIdx];

  return (
    <div
      className="min-h-screen px-5 py-6 pb-12 font-sans relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${module.color[0]} 0%, #060a10 100%)`,
      }}
    >
      <Particles color={module.accent} />

      <div className="relative z-10">
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

        <FadeIn delay={200}>
          <h2
            className="font-serif text-[1.8rem] font-normal m-0 mb-1 leading-tight"
            style={{ color: "#e8f4fd" }}
          >
            {fb.title}
          </h2>
          <p
            className="text-xs m-0 mb-6 italic"
            style={{ color: "rgba(180,210,240,0.5)" }}
          >
            {module.title}
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <p
            className="text-[0.68rem] tracking-[0.2em] uppercase mb-2"
            style={{ color: "rgba(150,190,230,0.4)" }}
          >
            You chose
          </p>
          <div
            className="rounded-xl p-4 mb-5"
            style={{
              background: module.accent + "12",
              border: `1px solid ${module.accent}30`,
            }}
          >
            <p
              className="text-[0.85rem] leading-relaxed m-0 italic"
              style={{ color: "rgba(200,230,255,0.8)" }}
            >
              &quot;{module.choices[choiceIdx]}&quot;
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <div
            className="rounded-2xl p-4 mb-4"
            style={{
              background: "rgba(255,255,255,0.035)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              className="text-[0.68rem] tracking-[0.2em] uppercase m-0 mb-2"
              style={{ color: "rgba(150,190,230,0.5)" }}
            >
              STS Analysis
            </p>
            <p
              className="text-[0.88rem] leading-7 m-0 font-light"
              style={{ color: "#c8dff0" }}
            >
              {fb.body}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={800}>
          <div
            className="rounded-xl p-4 mb-8"
            style={{
              border: `1px solid ${module.accent}40`,
              background: `linear-gradient(135deg, ${module.accent}0a, ${module.accent}18)`,
            }}
          >
            <p
              className="text-[0.68rem] tracking-[0.2em] uppercase m-0 mb-2"
              style={{ color: module.accent }}
            >
              ⬡ Insight
            </p>
            <p
              className="text-[0.85rem] leading-relaxed m-0"
              style={{ color: "rgba(220,240,255,0.85)" }}
            >
              {fb.insight}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={950}>
          <div className="flex gap-3">
            <button
              onClick={onMenu}
              className="flex-1 py-3.5 rounded-xl text-[0.85rem] font-sans cursor-pointer transition-transform active:scale-[0.97]"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(180,210,240,0.7)",
              }}
            >
              ← All Scenarios
            </button>
            {!isLast && (
              <button
                onClick={onNext}
                className="flex-[2] py-3.5 rounded-xl text-[0.85rem] font-sans cursor-pointer transition-transform active:scale-[0.97]"
                style={{
                  background: `linear-gradient(135deg, ${module.color[1]}, ${module.accent}44)`,
                  border: `1px solid ${module.accent}44`,
                  color: "#e8f4fd",
                  boxShadow: `0 4px 20px ${module.accent}25`,
                }}
              >
                Next Scenario →
              </button>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
