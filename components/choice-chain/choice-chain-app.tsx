"use client";

import { useState } from "react";
import { MODULES, type Module } from "@/lib/modules-data";
import { HomeScreen } from "./home-screen";
import { ModuleSelect } from "./module-select";
import { ScenarioScreen } from "./scenario-screen";
import { ResultScreen } from "./result-screen";

type Screen = "home" | "modules" | "scenario" | "result";

export interface PlayerProgress {
  completedModules: number[];
  totalStars: number;
  moduleStars?: Record<number, number>;
}

export function ChoiceChainApp() {
  const [screen, setScreen] = useState<Screen>("home");
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [choiceIdx, setChoiceIdx] = useState<number | null>(null);
  const [progress, setProgress] = useState<PlayerProgress>({
    completedModules: [],
    totalStars: 0,
  });

  const selectModule = (m: Module) => {
    setActiveModule(m);
    setScreen("scenario");
  };

  const handleChoose = (idx: number) => {
    setChoiceIdx(idx);
    setScreen("result");
    
    if (activeModule) {
      const earnedStars = activeModule.feedback[idx].stars;
      const wasCompleted = progress.completedModules.includes(activeModule.id);
      
      if (!wasCompleted) {
        // First time completing - add stars and track module stars
        setProgress(prev => ({
          completedModules: [...prev.completedModules, activeModule.id],
          totalStars: prev.totalStars + earnedStars,
          moduleStars: {
            ...prev.moduleStars,
            [activeModule.id]: earnedStars,
          },
        }));
      } else if (earnedStars === 3) {
        // Already completed but now got 3 stars - update total
        const previousStars = progress.moduleStars?.[activeModule.id] || 2;
        if (previousStars < 3) {
          setProgress(prev => ({
            ...prev,
            totalStars: prev.totalStars + (3 - previousStars),
            moduleStars: {
              ...prev.moduleStars,
              [activeModule.id]: 3,
            },
          }));
        }
      }
    }
  };

  const handleTryAgain = () => {
    setChoiceIdx(null);
    setScreen("scenario");
  };

  const goNext = () => {
    if (!activeModule) return;
    const nextIdx = MODULES.findIndex((m) => m.id === activeModule.id) + 1;
    if (nextIdx < MODULES.length) {
      setActiveModule(MODULES[nextIdx]);
      setChoiceIdx(null);
      setScreen("scenario");
    }
  };

  if (screen === "home") {
    return <HomeScreen onStart={() => setScreen("modules")} progress={progress} />;
  }

  if (screen === "modules") {
    return (
      <ModuleSelect 
        modules={MODULES} 
        onSelect={selectModule} 
        progress={progress}
        onBack={() => setScreen("home")}
      />
    );
  }

  if (screen === "scenario" && activeModule) {
    return (
      <ScenarioScreen
        module={activeModule}
        onChoose={handleChoose}
        onBack={() => setScreen("modules")}
      />
    );
  }

  if (screen === "result" && activeModule && choiceIdx !== null) {
    return (
      <ResultScreen
        module={activeModule}
        choiceIdx={choiceIdx}
        onNext={goNext}
        onMenu={() => setScreen("modules")}
        onTryAgain={handleTryAgain}
        isLast={activeModule.id === 10}
        progress={progress}
      />
    );
  }

  return null;
}
