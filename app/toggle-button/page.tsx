"use client";
import ToggleButton from "../../components/ToggleButton";
import { useEffect, useState } from "react";

const ToggleButtonPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-start pt-8 gap-8">
      {/* Desktop Version */}
      <div className="relative w-[261px] h-[46px]">
        <ToggleButton
          options={[
            { label: "Full", shortLabel: "F", path: "/full" },
            { label: "Designs", shortLabel: "D", path: "/designs" },
          ]}
        />
      </div>

      {/* Mobile Version */}
      <div className="relative w-[88px] h-[28px]">
        <ToggleButton
          options={[
            { label: "Full", shortLabel: "F", path: "/full" },
            { label: "Designs", shortLabel: "D", path: "/designs" },
          ]}
        />
      </div>
    </div>
  );
};

export default ToggleButtonPage;
