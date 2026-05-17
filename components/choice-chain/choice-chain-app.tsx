"use client";

import { useState } from "react";
import { MODULES, type Module } from "@/lib/modules-data";
import { HomeScreen } from "./home-screen";
import { ModuleSelect } from "./module-select";
import { ScenarioScreen } from "./scenario-screen";
import { ResultScreen } from "./result-screen";

type Screen = "home" | "modules" | "scenario" | "result";

export function ChoiceChainApp() {
  const [screen, setScreen] = useState<Screen>("home");
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [choiceIdx, setChoiceIdx] = useState<number | null>(null);

  const selectModule = (m: Module) => {
    setActiveModule(m);
    setScreen("scenario");
  };

  const handleChoose = (idx: number) => {
    setChoiceIdx(idx);
    setScreen("result");
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
    return <HomeScreen onStart={() => setScreen("modules")} />;
  }

  if (screen === "modules") {
    return <ModuleSelect modules={MODULES} onSelect={selectModule} />;
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
        isLast={activeModule.id === 10}
      />
    );
  }

  return null;
}
