import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface Settings {
  playerCount: number;
  smallBlind: number;
}

interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Settings) => void;
}

const defaultSettings: Settings = {
  playerCount: 9,
  smallBlind: 1,
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

const STORAGE_KEY = 'poker_assistant_settings';

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  // 初始化时从localStorage加载设置
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem(STORAGE_KEY);
      if (savedSettings) {
        const parsed = JSON.parse(savedSettings);
        setSettings(parsed);
      }
    } catch (e) {
      console.error('Error loading settings:', e);
    }
    setIsLoaded(true);
  }, []);

  // 当设置更新时保存到localStorage
  const updateSettings = (newSettings: Settings) => {
    setSettings(newSettings);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings));
    } catch (e) {
      console.error('Error saving settings:', e);
    }
  };

  // 在加载完成前显示默认设置
  if (!isLoaded) {
    return (
      <SettingsContext.Provider value={{ settings: defaultSettings, updateSettings }}>
        {children}
      </SettingsContext.Provider>
    );
  }

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
} 