"use client";

import { useState } from "react";

interface ToolProps {
  image: string;
  border?: string;
  name: string;
}

const ToolStack = ({ tools }: { tools: ToolProps[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const topRowTools = tools.slice(0, 6);
  const bottomRowTools = tools.slice(6);

  return (
    <div className="toolstack-container">
      <div className="toolstack-title">TOOLS STACK</div>
      <div className="tools">
        <div className="top-row">
          {topRowTools.map((tool, index) => (
            <div
              key={index}
              className="tool"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <div className="tooltip">{tool.name}</div>
              )}
              <img
                src={tool.image}
                alt={tool.name}
                className="tool-image w-full"
              />
            </div>
          ))}
        </div>
        <div className="bottom-row">
          {bottomRowTools.map((tool, index) => (
            <div
              key={index}
              className="tool"
              onMouseEnter={() => setHoveredIndex(index + 6)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index + 6 && (
                <div className="tooltip bg-black">{tool.name}</div>
              )}
              <img src={tool.image} alt={tool.name} className="tool-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolStack;
