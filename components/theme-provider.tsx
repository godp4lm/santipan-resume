"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  gradient: string;
  background: string;
}

interface ThemePackage {
  id: string;
  name: string;
  description: string;
  colors: ThemeColors;
  category: "light" | "dark" | "gradient" | "professional" | "creative";
}

interface ThemeContextType {
  colors: ThemeColors;
  updateColors: (newColors: Partial<ThemeColors>) => void;
  resetColors: () => void;
  isMounted: boolean;
  themes: ThemePackage[];
  applyTheme: (themeId: string) => void;
}

const defaultColors: ThemeColors = {
  primary: "from-red-500 to-orange-600",
  secondary: "from-orange-400 to-red-500",
  accent: "from-amber-400 to-orange-500",
  gradient: "from-red-500 via-orange-600 to-amber-700",
  background: "dark",
};

// Complete theme packages - carefully designed combinations
const themePackages: ThemePackage[] = [
  // Professional Dark Themes
  {
    id: "midnight-pro",
    name: "Midnight Professional",
    description: "Deep blue professional theme",
    category: "professional",
    colors: {
      primary: "from-blue-500 to-indigo-600",
      secondary: "from-indigo-400 to-purple-500",
      accent: "from-cyan-400 to-blue-500",
      gradient: "from-blue-500 via-indigo-600 to-purple-700",
      background: "midnight",
    },
  },
  {
    id: "charcoal-elegant",
    name: "Charcoal Elegant",
    description: "Sophisticated gray theme",
    category: "professional",
    colors: {
      primary: "from-slate-400 to-gray-500",
      secondary: "from-gray-500 to-slate-600",
      accent: "from-cyan-400 to-blue-500",
      gradient: "from-slate-400 via-gray-500 to-zinc-600",
      background: "charcoal",
    },
  },
  {
    id: "forest-executive",
    name: "Forest Executive",
    description: "Nature-inspired professional",
    category: "professional",
    colors: {
      primary: "from-emerald-400 to-teal-500",
      secondary: "from-green-500 to-emerald-600",
      accent: "from-cyan-400 to-blue-500",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      background: "forest-night",
    },
  },

  // Dark & Dramatic Themes
  {
    id: "royal-dark",
    name: "Royal Dark",
    description: "Luxurious dark theme",
    category: "dark",
    colors: {
      primary: "from-purple-400 to-pink-500",
      secondary: "from-pink-500 to-rose-600",
      accent: "from-violet-400 to-purple-500",
      gradient: "from-purple-400 via-pink-500 to-rose-600",
      background: "purple-night",
    },
  },
  {
    id: "fire-dark",
    name: "Fire Dark",
    description: "Bold and intense",
    category: "dark",
    colors: {
      primary: "from-red-500 to-orange-600",
      secondary: "from-orange-400 to-red-500",
      accent: "from-amber-400 to-orange-500",
      gradient: "from-red-500 via-orange-600 to-amber-700",
      background: "dark",
    },
  },
  {
    id: "deep-ocean",
    name: "Deep Ocean",
    description: "Mysterious depths",
    category: "dark",
    colors: {
      primary: "from-blue-500 to-indigo-600",
      secondary: "from-indigo-400 to-purple-500",
      accent: "from-cyan-400 to-blue-500",
      gradient: "from-blue-500 via-indigo-600 to-purple-700",
      background: "ocean-depth",
    },
  },
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colors, setColors] = useState<ThemeColors>(defaultColors);
  const [isMounted, setIsMounted] = useState(false);

  // Only load from localStorage and mark as mounted after component mounts
  useEffect(() => {
    const saved = localStorage.getItem("theme-colors");
    if (saved) {
      try {
        const parsedColors = JSON.parse(saved);
        setColors(parsedColors);
      } catch (error) {
        console.error("Failed to parse theme colors from localStorage:", error);
      }
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("theme-colors", JSON.stringify(colors));
    }
  }, [colors, isMounted]);

  const updateColors = (newColors: Partial<ThemeColors>) => {
    setColors((prev) => ({ ...prev, ...newColors }));
  };

  const resetColors = () => {
    setColors(defaultColors);
  };

  const applyTheme = (themeId: string) => {
    const theme = themePackages.find((t) => t.id === themeId);
    if (theme) {
      setColors(theme.colors);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        colors,
        updateColors,
        resetColors,
        isMounted,
        themes: themePackages,
        applyTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
