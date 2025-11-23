"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface PlayerContextType {
  isPlaying: boolean;
  currentTrack: string;
  togglePlay: () => void;
  setTrack: (track: string) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
}

interface PlayerProviderProps {
  children: ReactNode;
}

export function PlayerProvider({ children }: PlayerProviderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("RDL 68 - Le Direct");

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const setTrack = (track: string) => {
    setCurrentTrack(track);
  };

  return (
    <PlayerContext.Provider value={{ isPlaying, currentTrack, togglePlay, setTrack }}>
      {children}
    </PlayerContext.Provider>
  );
}
