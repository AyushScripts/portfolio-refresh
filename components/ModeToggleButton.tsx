"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch"; // import the Switch component

export function ModeToggleButton() {
  const { theme, setTheme } = useTheme();

  // Determine if the current theme is dark
  const isDarkMode = theme === "dark";

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div className="flex items-center ml-2 backdrop-blur-[0.5rem]">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          isDarkMode ? "scale-0" : "scale-100"
        }`}
      />
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        className="mx-2"
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          isDarkMode ? "scale-100" : "scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
