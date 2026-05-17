"use client";

import { FadeIn } from "./fade-in";
import { type Module } from "@/lib/modules-data";

interface ModuleSelectProps {
  modules: Module[];
  onSelect: (module: Module) => void;
}

export function ModuleSelect({ modules, onSelect }: ModuleSelectProps) {
  return (
    <div
      className="min-h-screen px-5 py-8 pb-12 font-sans"
      style={{
        background: "linear-gradient(180deg, #06090f 0%, #0a101a 100%)",
      }}
    >
      <FadeIn delay={0}>
        <p
          className="text-[0.72rem] tracking-[0.2em] uppercase mb-1 mt-0"
          style={{ color: "rgba(150,190,230,0.5)" }}
        >
          Science · Technology · Society
        </p>
        <h2
          className="font-serif text-3xl font-normal m-0 mb-6"
          style={{ color: "#e8f4fd" }}
        >
          Choose a Scenario
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-3.5">
        {modules.map((m, i) => (
          <FadeIn key={m.id} delay={i * 60}>
            <button
              onClick={() => onSelect(m)}
              className="w-full text-left p-4 rounded-2xl cursor-pointer transition-transform active:scale-[0.98] flex items-center gap-4"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                background: `linear-gradient(135deg, ${m.color[0]}cc, ${m.color[1]}cc)`,
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              <div
                className="w-9 h-9 rounded-[10px] shrink-0 flex items-center justify-center text-xs font-semibold"
                style={{
                  background: m.accent + "22",
                  border: `1.5px solid ${m.accent}55`,
                  color: m.accent,
                }}
              >
                {m.id}
              </div>
              <div>
                <div
                  className="text-[0.9rem] font-medium leading-tight"
                  style={{ color: "#e0eeff" }}
                >
                  {m.title}
                </div>
                <div
                  className="text-[0.72rem] mt-0.5"
                  style={{ color: "rgba(180,210,240,0.45)" }}
                >
                  {m.thinker}
                </div>
              </div>
            </button>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
