"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ToggleTheme() {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">();

  const handleToggleTheme = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }

    setTheme();
  };

  const setTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <button
      onClick={handleToggleTheme}
      className="fixed left-9 bottom-9 bg-indigo-500 p-3 rounded-full transition-all hover:brightness-75 text-zinc-50"
    >
      {currentTheme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
}
