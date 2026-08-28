"use client";

import { useState } from "react";

type Tab = "2023" | "2024" | "2025" | "2026";

interface ShowsTabsProps {
  heading: string;
  shows2023: string;
  shows2024: string;
  shows2025: string;
  shows2026: string;
  shows2023Items: string[];
  shows2024Items: string[];
  shows2025Items: string[];
  shows2026Items: string[];
  shows2026Links?: string[];
}

export default function ShowsTabs({
  heading,
  shows2023,
  shows2024,
  shows2025,
  shows2026,
  shows2023Items,
  shows2024Items,
  shows2025Items,
  shows2026Items,
  shows2026Links = [],
}: ShowsTabsProps) {
  const [active, setActive] = useState<Tab>("2026");

  const tabs: Tab[] = ["2026", "2025", "2024", "2023"];

  const content: Record<Tab, React.ReactNode> = {
    "2023": (
      <ul>
        {shows2023Items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    ),
    "2024": (
      <ul>
        {shows2024Items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    ),
    "2025": (
      <ul>
        {shows2025Items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    ),
    "2026": (
      <ul className="flex flex-col gap-3">
          {shows2026Items.map((item, i) => (
            <li key={i} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
              <span>{item}</span>
              {shows2026Links[i] && (
                <a
                  href={shows2026Links[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-3 py-1 text-sm font-semibold bg-white/10 hover:bg-white hover:text-black transition-colors btn-polygon btn-polygon-hover"
                >
                  Tickets →
                </a>
              )}
            </li>
          ))}
        </ul>
    ),
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold font-hanson mb-4">{heading}</h3>
      <ul className="flex w-full text-center text-sm font-medium border-b border-gray-500">
        {tabs.map((tab) => (
          <li key={tab}>
            <button
              onClick={() => setActive(tab)}
              className={`w-full px-4 py-2 transition-colors ${
                active === tab
                  ? "border-b-2 border-white font-bold text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
      <div className="pt-4">{content[active]}</div>
    </div>
  );
}
