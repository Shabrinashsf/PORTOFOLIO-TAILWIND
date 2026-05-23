"use client";

import { createContext, useContext, useState, useRef, ReactNode, useCallback, useEffect } from "react";

interface AudioContextType {
  playing: boolean;
  toggle: () => void;
  currentTime: number;
  duration: number;
}

const AudioCtx = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const findAudio = () => {
      const audio = document.querySelector("audio") as HTMLAudioElement | null;
      if (audio) {
        audioRef.current = audio;
        audio.loop = true;

        const onLoaded = () => setDuration(audio.duration);
        const onTime = () => setCurrentTime(audio.currentTime);
        const onPlay = () => setPlaying(true);
        const onPause = () => setPlaying(false);
        const onEnded = () => {
          audio.currentTime = 0;
          audio.play().catch(() => {});
        };

        audio.addEventListener("loadedmetadata", onLoaded);
        audio.addEventListener("timeupdate", onTime);
        audio.addEventListener("play", onPlay);
        audio.addEventListener("pause", onPause);
        audio.addEventListener("ended", onEnded);

        return () => {
          audio.removeEventListener("loadedmetadata", onLoaded);
          audio.removeEventListener("timeupdate", onTime);
          audio.removeEventListener("play", onPlay);
          audio.removeEventListener("pause", onPause);
          audio.removeEventListener("ended", onEnded);
        };
      }
      return () => {};
    };

    const cleanup = findAudio();
    return cleanup;
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current || document.querySelector("audio") as HTMLAudioElement | null;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, []);

  return (
    <AudioCtx.Provider value={{ playing, toggle, currentTime, duration }}>
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}