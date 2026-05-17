"use client";

import { useState, useEffect } from "react";
import { Particles } from "./particles";
import { FadeIn } from "./fade-in";
import { type Module } from "@/lib/modules-data";
import type { PlayerProgress } from "./choice-chain-app";
import { sounds } from "@/lib/sounds";

interface ResultScreenProps {
  module: Module;
  choiceIdx: number;
  onNext: () => void;
  onMenu: () => void;
  onTryAgain: () => void;
  isLast: boolean;
  progress: PlayerProgress;
}

export function ResultScreen({
  module,
  choiceIdx,
  onNext,
  onMenu,
  onTryAgain,
  isLast,
  progress,
}: ResultScreenProps) {
  const fb = module.feedback[choiceIdx];
  const [showStars, setShowStars] = useState(false);
  const [starCount, setStarCount] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const got3Stars = fb.stars === 3;

  // Animate stars appearing one by one
  useEffect(() => {
    const timer1 = setTimeout(() => setShowStars(true), 500);
    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (showStars && starCount < fb.stars) {
      const timer = setTimeout(() => setStarCount(s => s + 1), 350);
      return () => clearTimeout(timer);
    }
    if (showStars && starCount === fb.stars) {
      const timer = setTimeout(() => setShowContent(true), 500);
      return () => clearTimeout(timer);
    }
  }, [showStars, starCount, fb.stars]);

  // Play sound when stars animate in
  useEffect(() => {
    if (showStars && starCount > 0 && starCount <= fb.stars) {
      // Play different sounds based on which star appears
      if (starCount === fb.stars) {
        // Final star - play the full star sound
        if (fb.stars === 3) sounds.star3();
        else if (fb.stars === 2) sounds.star2();
        else sounds.star1();
      }
    }
  }, [showStars, starCount, fb.stars]);

  const handleTryAgain = () => {
    sounds.tryAgain();
    onTryAgain();
  };

  const handleMenu = () => {
    sounds.back();
    onMenu();
  };

  const handleNext = () => {
    sounds.next();
    onNext();
  };

  const encouragements3Stars = [
    "WOW! Amazing thinking!",
    "You're a SUPER thinker!",
    "Incredible choice!",
    "Your brain is ON FIRE!",
    "You totally nailed it!",
  ];
  
  const encouragements2Stars = [
    "Good thinking!",
    "Nice try!",
    "You're getting there!",
    "That's a thoughtful choice!",
    "Keep exploring!",
  ];

  const encouragement = got3Stars 
    ? encouragements3Stars[module.id % encouragements3Stars.length]
    : encouragements2Stars[module.id % encouragements2Stars.length];

  return (
    <div
      className="min-h-screen px-4 py-5 pb-10 font-sans relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${module.color[0]} 0%, #0f1629 100%)`,
      }}
    >
      <Particles color={module.accent} />

      <div className="relative z-10 max-w-lg mx-auto">
        
        {/* STARS SECTION - Most prominent at top */}
        <FadeIn delay={0}>
          <div 
            className="rounded-3xl p-6 mb-5 text-center"
            style={{
              background: got3Stars 
                ? "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(251,146,36,0.1))"
                : "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              border: got3Stars 
                ? "3px solid rgba(251,191,36,0.5)"
                : "3px solid rgba(255,255,255,0.2)",
              boxShadow: got3Stars 
                ? "0 0 40px rgba(251,191,36,0.3)"
                : "none",
            }}
          >
            {/* Character */}
            <div
              className="inline-block text-5xl mb-3 animate-bounce"
              style={{ animationDuration: "1s" }}
            >
              {module.characterEmoji}
            </div>

            {/* You earned text */}
            <p
              className="text-sm font-bold mb-3 uppercase tracking-wider"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              You Earned
            </p>

            {/* BIG STARS */}
            <div className="flex justify-center gap-3 mb-4">
              {[1, 2, 3].map((star) => (
                <div
                  key={star}
                  className="relative transition-all duration-500"
                  style={{
                    transform: showStars && star <= starCount ? "scale(1) rotate(0deg)" : "scale(0) rotate(-180deg)",
                    opacity: showStars && star <= starCount ? 1 : 0.15,
                  }}
                >
                  <span 
                    className="text-5xl block"
                    style={{
                      filter: star <= fb.stars ? "none" : "grayscale(1) opacity(0.3)",
                    }}
                  >
                    {star <= fb.stars ? "⭐" : "☆"}
                  </span>
                  {showStars && star <= starCount && star <= fb.stars && (
                    <div 
                      className="absolute inset-0 animate-ping"
                      style={{ animationDuration: "1s", animationIterationCount: 1 }}
                    >
                      <span className="text-5xl opacity-50">⭐</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Encouragement */}
            <p
              className="text-xl font-bold font-serif mb-2"
              style={{ color: got3Stars ? "#fbbf24" : "#fff" }}
            >
              {encouragement}
            </p>

            {/* Total stars badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(251,191,36,0.15)",
                border: "1px solid rgba(251,191,36,0.3)",
              }}
            >
              <span className="text-lg">🏆</span>
              <span className="text-sm font-bold" style={{ color: "#fbbf24" }}>
                Total: {progress.totalStars} stars
              </span>
            </div>
          </div>
        </FadeIn>

        {/* WHY NOT 3 STARS - Show if they didn't get 3 stars */}
        {!got3Stars && fb.whyNot3Stars && showContent && (
          <FadeIn delay={0}>
            <div
              className="rounded-2xl p-4 mb-4"
              style={{
                background: "linear-gradient(135deg, rgba(251,191,36,0.15), rgba(251,191,36,0.05))",
                border: "2px solid rgba(251,191,36,0.4)",
              }}
            >
              <div className="flex gap-2 mb-2 items-center">
                <span className="text-2xl">💭</span>
                <span
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{ color: "#fbbf24" }}
                >
                  Want 3 Stars? Think About This...
                </span>
              </div>
              <p
                className="text-sm leading-relaxed m-0"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                {fb.whyNot3Stars}
              </p>
            </div>
          </FadeIn>
        )}

        {/* TRY AGAIN BUTTON - Prominent if not 3 stars */}
        {!got3Stars && showContent && (
          <FadeIn delay={100}>
            <button
              onClick={handleTryAgain}
              className="w-full py-4 rounded-2xl text-base font-bold cursor-pointer transition-all active:scale-95 hover:scale-[1.02] mb-5 flex items-center justify-center gap-3"
              style={{
                background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                border: "3px solid #fbbf24",
                color: "#000",
                boxShadow: "0 4px 20px rgba(251,191,36,0.4)",
              }}
            >
              <span className="text-xl">🔄</span>
              Try Again for 3 Stars!
              <span className="text-xl">⭐</span>
            </button>
          </FadeIn>
        )}

        {/* Result title */}
        {showContent && (
          <FadeIn delay={got3Stars ? 0 : 200}>
            <h2
              className="font-serif text-xl font-bold text-center m-0 mb-1"
              style={{ color: "#fff" }}
            >
              {fb.title}
            </h2>
            <p
              className="text-xs text-center m-0 mb-4"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {module.character} says...
            </p>
          </FadeIn>
        )}

        {/* Your choice box */}
        {showContent && (
          <FadeIn delay={got3Stars ? 100 : 300}>
            <div
              className="rounded-2xl p-4 mb-4"
              style={{
                background: `${module.accent}15`,
                border: `2px solid ${module.accent}40`,
              }}
            >
              <div className="flex gap-2 mb-2 items-center">
                <span className="text-xl">💬</span>
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: module.accent }}
                >
                  You Picked
                </span>
              </div>
              <p
                className="text-sm leading-relaxed m-0"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                &quot;{module.choices[choiceIdx]}&quot;
              </p>
            </div>
          </FadeIn>
        )}

        {/* What this means */}
        {showContent && (
          <FadeIn delay={got3Stars ? 200 : 400}>
            <div
              className="rounded-2xl p-4 mb-4"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "2px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="flex gap-2 mb-2 items-center">
                <span className="text-xl">📖</span>
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "#fff" }}
                >
                  What This Means
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
        )}

        {/* The Big Idea */}
        {showContent && (
          <FadeIn delay={got3Stars ? 300 : 500}>
            <div
              className="rounded-2xl p-4 mb-5"
              style={{
                background: `linear-gradient(135deg, ${module.accent}20, ${module.accent}08)`,
                border: `2px solid ${module.accent}50`,
              }}
            >
              <div className="flex gap-2 mb-2 items-center">
                <span className="text-xl">💡</span>
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
        )}

        {/* Navigation buttons */}
        {showContent && (
          <FadeIn delay={got3Stars ? 400 : 600}>
            <div className="flex gap-3">
              <button
                onClick={handleMenu}
                className="flex-1 py-3.5 rounded-xl text-sm font-bold cursor-pointer transition-all active:scale-95 flex items-center justify-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "2px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <span>🏠</span> Home
              </button>
              {!isLast && (
                <button
                  onClick={handleNext}
                  className="flex-[2] py-3.5 rounded-xl text-sm font-bold cursor-pointer transition-all active:scale-95 hover:scale-[1.02] flex items-center justify-center gap-2"
                  style={{
                    background: `linear-gradient(135deg, ${module.accent}, ${module.color[1]})`,
                    border: `2px solid ${module.accent}`,
                    color: "#fff",
                    boxShadow: `0 4px 20px ${module.accent}40`,
                  }}
                >
                  Next Adventure <span>🚀</span>
                </button>
              )}
              {isLast && (
                <button
                  onClick={() => {
                    sounds.complete();
                    onMenu();
                  }}
                  className="flex-[2] py-3.5 rounded-xl text-sm font-bold cursor-pointer transition-all active:scale-95 flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #fbbf24, #f472b6)",
                    border: "2px solid #fbbf24",
                    color: "#000",
                    boxShadow: "0 4px 20px rgba(251,191,36,0.4)",
                  }}
                >
                  <span>🎉</span> You Did It! <span>🎉</span>
                </button>
              )}
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
