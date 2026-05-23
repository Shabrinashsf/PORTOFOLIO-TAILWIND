"use client";

import { motion } from "framer-motion";
import { useAudio } from "@/context/AudioContext";
import { useState } from "react";

function EqualizerBars({ playing }: { playing: boolean }) {
  return (
    <div className="flex items-end gap-[2px] h-3.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full"
          style={{ backgroundColor: "var(--accent)" }}
          animate={
            playing
              ? { height: ["40%", "100%", "60%", "100%", "30%"] }
              : { height: "15%" }
          }
          transition={
            playing
              ? {
                  duration: 0.8 + i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.08,
                }
              : { duration: 0.3 }
          }
        />
      ))}
    </div>
  );
}

function MuteIcon({ muted }: { muted: boolean }) {
  const size = 13;
  if (muted) {
    return (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z" />
      </svg>
    );
  }
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height={size} width={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z" />
    </svg>
  );
}

export default function AudioToggle() {
  const { playing, toggle } = useAudio();
  const [muted, setMuted] = useState(false);

  const handleMute = () => {
    const audio = document.querySelector("audio") as HTMLAudioElement | null;
    if (audio) {
      audio.muted = !audio.muted;
      setMuted(!muted);
    }
  };

  return (
    <>
      <audio
        src="/audio/OMORI OST - Good Morning.mp3"
        loop
        preload="auto"
      />
      {/* Desktop: full pill */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:flex items-center gap-3 rounded-full border backdrop-blur-md shadow-lg"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border-color)",
          color: "var(--text-primary)",
        }}
      >
        <button
          onClick={toggle}
          className="w-10 h-10 shrink-0 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? (
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="10" width="10" xmlns="http://www.w3.org/2000/svg">
              <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 0 48 48 48h96c26.5 0 48-21.5 48-48z" />
            </svg>
          ) : (
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="ml-0.5" height="10" width="10" xmlns="http://www.w3.org/2000/svg">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
            </svg>
          )}
        </button>

        <div className="flex flex-col truncate">
          <span className="text-xs font-semibold truncate whitespace-nowrap" style={{ color: "var(--text-primary)" }}>
            Good Morning
          </span>
          <span className="text-[9px] opacity-60 truncate whitespace-nowrap" style={{ color: "var(--text-secondary)" }}>
            OMORI OST
          </span>
        </div>

        {playing && <EqualizerBars playing={playing} />}

        <button
          onClick={handleMute}
          className="hover:opacity-70 transition-opacity shrink-0 pr-3"
          aria-label={muted ? "Unmute" : "Mute"}
          style={{ color: "var(--text-muted)" }}
        >
          <MuteIcon muted={muted} />
        </button>
      </motion.div>

      {/* Mobile: compact circle + equalizer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex md:hidden items-center gap-1.5"
      >
        <motion.button
          onClick={toggle}
          whileTap={{ scale: 0.9 }}
          className="relative w-10 h-10 shrink-0 rounded-full flex items-center justify-center border transition-colors duration-300 overflow-hidden focus:outline-none"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? (
            <svg style={{ color: "var(--accent)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
              <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 0 48 48 48h96c26.5 0 48-21.5 48-48z" />
            </svg>
          ) : (
            <svg style={{ color: "var(--text-muted)" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="ml-0.5" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
            </svg>
          )}
        </motion.button>
        {playing && <EqualizerBars playing={playing} />}
      </motion.div>
    </>
  );
}