"use client";

import { useEffect, useState, type CSSProperties } from "react";
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

type StoryStyle = CSSProperties & {
  "--story-delay"?: string;
};

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasStoryStarted, setHasStoryStarted] = useState(false);
  const [isReturningHome, setIsReturningHome] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setHasStoryStarted(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const advanceStory = () => {
    if (isReturningHome) return;

    if (currentSlide < storySlides.length - 1) {
      setCurrentSlide((current) => current + 1);
      return;
    }

    setIsReturningHome(true);
  };

  return (
    <main
      className={`story-stage relative min-h-[100svh] cursor-pointer overflow-hidden bg-white px-5 py-8 text-brand-blue sm:px-8 sm:py-16 ${
        hasStoryStarted ? "story-stage-ready" : ""
      }`}
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
      <div
        className="story-enter pointer-events-none absolute inset-x-5 top-7 flex items-center justify-center text-center sm:top-10"
        style={{ "--story-delay": "80ms" } as StoryStyle}
      >
        <div>
          <p className="text-lg font-extrabold italic leading-none sm:text-2xl">
            LEONARDO
          </p>
          <p className="mt-2 text-xs font-medium text-brand-blue/55">
            Scopri Leonardo
          </p>
        </div>
      </div>

      <div className="mx-auto flex min-h-[100svh] w-full max-w-4xl flex-col items-center justify-center pb-24 pt-24 text-center sm:min-h-[calc(100svh-8rem)] sm:pb-12 sm:pt-12">
        <AnimatePresence mode="wait">
          <motion.p
            key={storySlides[currentSlide]}
            className="story-enter w-full max-w-[21rem] break-words text-xl font-semibold leading-snug tracking-normal min-[380px]:text-2xl sm:max-w-3xl sm:text-2xl md:text-3xl"
            style={{ "--story-delay": "160ms" } as StoryStyle}
            initial={false}
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
        </AnimatePresence>
      </div>

      <div
        className="story-enter pointer-events-none absolute inset-x-5 bottom-10 flex flex-col items-center gap-3 text-center text-sm font-medium text-brand-blue/58 sm:bottom-8 sm:gap-4"
        style={{ "--story-delay": "260ms" } as StoryStyle}
      >
        <span>Tocca per continuare</span>
        <div className="flex items-center gap-2">
          {storySlides.map((slide, index) => (
            <span
              key={slide}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-brand-blue"
                  : "w-1.5 bg-brand-blue/20"
              }`}
            />
          ))}
        </div>
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
