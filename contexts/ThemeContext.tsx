import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first, then system preference, default to dark
    const saved = localStorage.getItem('theme') as Theme | null;
    let initialTheme: Theme;
    
    if (saved && (saved === 'light' || saved === 'dark')) {
      initialTheme = saved;
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      initialTheme = 'light';
    } else {
      initialTheme = 'dark';
    }
    
    // Apply theme immediately to avoid flash
    const root = document.documentElement;
    if (initialTheme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
    
    return initialTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

