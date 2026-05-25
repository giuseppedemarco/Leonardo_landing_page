"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const entranceEase = [0.16, 1, 0.3, 1] as const;
const waveEase = [0.76, 0, 0.24, 1] as const;

const storySlides = [
  "Siamo l\u2019associazione di studenti di ingegneria pi\u00f9 grande dell\u2019Universit\u00e0 della Calabria \u2699\ufe0f",
  "Rappresentiamo gli studenti STEM \ud83d\udd2c",
  "L\u2019Universit\u00e0 della Calabria \u00e8 stata istituita nel 1968 e ha avviato il primo anno accademico nel 1972-73.",
  "Il campus sorge ad Arcavacata di Rende, tra le colline vicino Cosenza.",
  "UniCal descrive il suo campus come il pi\u00f9 grande e attrezzato d\u2019Italia: residenze, biblioteche, sport, cinema, teatri e spazi di socialit\u00e0 in un\u2019unica citt\u00e0 universitaria.",
];

function BlueWave({
  onComplete,
  shouldReduceMotion,
}: {
  onComplete: () => void;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[80] origin-left bg-brand-blue"
      initial={
        shouldReduceMotion
          ? { clipPath: "inset(0 0 0 0)" }
          : { clipPath: "inset(0 100% 0 0 round 0 42% 42% 0)" }
      }
      animate={{ clipPath: "inset(0 0 0 0 round 0 0 0 0)" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.9, ease: waveEase }
      }
      onAnimationComplete={onComplete}
    />
  );
}

export function PresentationStory() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [isReturningHome, setIsReturningHome] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(
      () => setCurrentSlide(0),
      shouldReduceMotion ? 0 : 180,
    );

    return () => window.clearTimeout(timeout);
  }, [shouldReduceMotion]);

  const advanceStory = () => {
    if (isReturningHome || currentSlide < 0) return;

    if (currentSlide < storySlides.length - 1) {
      setCurrentSlide((current) => current + 1);
      return;
    }

    setIsReturningHome(true);
  };

  return (
    <main
      className="min-h-[100svh] cursor-pointer bg-white px-5 py-16 text-brand-blue sm:px-8"
      role="button"
      tabIndex={0}
      onClick={advanceStory}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          advanceStory();
        }
      }}
    >
      <div className="mx-auto flex min-h-[calc(100svh-8rem)] w-full max-w-4xl flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          {currentSlide >= 0 && (
            <motion.p
              key={storySlides[currentSlide]}
              className="max-w-3xl text-xl font-medium leading-snug tracking-normal sm:text-2xl md:text-3xl"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 18, filter: "blur(10px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -12, filter: "blur(8px)" }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.45, ease: entranceEase }
              }
            >
              {storySlides[currentSlide]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {isReturningHome && (
        <BlueWave
          shouldReduceMotion={shouldReduceMotion}
          onComplete={() => router.push("/")}
        />
      )}
    </main>
  );
}
