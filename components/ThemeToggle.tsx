"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
        <Sun className="h-[1.2rem] w-[1.2rem] text-[#A1A1AA] scale-75 rotate-12" />
        <Switch
          checked={false}
          disabled
          aria-label="Toggle theme"
          className="transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110"
        />
        <Moon className="h-[1.2rem] w-[1.2rem] text-foreground scale-100 rotate-0" />
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
      <Tooltip>
        <TooltipTrigger asChild>
          <Sun
            onClick={() => setTheme("light")}
            className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer ${
              theme === "dark"
                ? "text-[#A1A1AA] scale-75 rotate-12"
                : "text-foreground scale-100 rotate-0"
            }`}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Light Mode</p>
        </TooltipContent>
      </Tooltip>
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
        className="transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110"
      />
      <Tooltip>
        <TooltipTrigger asChild>
          <Moon
            onClick={() => setTheme("dark")}
            className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer ${
              theme === "light"
                ? "text-[#A1A1AA] scale-75 rotate-12"
                : "text-foreground scale-100 rotate-0"
            }`}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Dark Mode</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
