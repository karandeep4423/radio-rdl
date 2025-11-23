'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type PlayerType = 'radio' | 'podcast' | null;

interface PlaybackStateContextType {
  activePlayer: PlayerType;
  setActivePlayer: (player: PlayerType) => void;
}

const PlaybackStateContext = createContext<PlaybackStateContextType | undefined>(undefined);

export function PlaybackStateProvider({ children }: { children: ReactNode }) {
  const [activePlayer, setActivePlayer] = useState<PlayerType>('radio'); // Default to radio

  return (
    <PlaybackStateContext.Provider value={{ activePlayer, setActivePlayer }}>
      {children}
    </PlaybackStateContext.Provider>
  );
}

export function usePlaybackState() {
  const context = useContext(PlaybackStateContext);
  if (context === undefined) {
    throw new Error('usePlaybackState must be used within a PlaybackStateProvider');
  }
  return context;
}
