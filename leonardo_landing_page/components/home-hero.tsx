"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, UsersRound } from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Transition,
} from "motion/react";

import { Button } from "@/components/ui/button";

const titleLetters = "LEONARDO".split("");
const entranceEase = [0.16, 1, 0.3, 1] as const;
const waveEase = [0.76, 0, 0.24, 1] as const;
const italianWaves = [
  {
    color: "#078d49",
    opacity: 0.9,
    path: "M6 18 C76 2 116 34 186 18 C256 2 296 34 366 18 C436 2 476 34 546 18 C588 8 616 10 634 18",
  },
  {
    color: "#ffffff",
    opacity: 0.95,
    path: "M6 34 C76 50 116 18 186 34 C256 50 296 18 366 34 C436 50 476 18 546 34 C588 44 616 42 634 34",
  },
  {
    color: "#bc2e3c",
    opacity: 0.9,
    path: "M6 50 C76 34 116 66 186 50 C256 34 296 66 366 50 C436 34 476 66 546 50 C588 40 616 42 634 50",
  },
];

function WhiteWave({
  onComplete,
  shouldReduceMotion,
}: {
  onComplete: () => void;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[80] origin-left bg-white"
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

function ItalianWaves({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 640 70"
      preserveAspectRatio="none"
      className="mt-7 h-14 w-full max-w-2xl overflow-visible"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { delay: 1.42, duration: 0.55, ease: entranceEase }
      }
    >
      {italianWaves.map((wave, index) => (
        <motion.path
          key={wave.color}
          d={wave.path}
          fill="none"
          stroke={wave.color}
          strokeLinecap="round"
          strokeWidth="2.6"
          vectorEffect="non-scaling-stroke"
          initial={
            shouldReduceMotion
              ? { pathLength: 1, opacity: wave.opacity }
              : { pathLength: 0, opacity: 0, x: 0 }
          }
          animate={
            shouldReduceMotion
              ? { pathLength: 1, opacity: wave.opacity }
              : { pathLength: 1, opacity: wave.opacity, x: [0, 7, 0] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  pathLength: {
                    delay: 1.58 + index * 0.14,
                    duration: 1.05,
                    ease: entranceEase,
                  },
                  opacity: {
                    delay: 1.58 + index * 0.14,
                    duration: 0.35,
                    ease: "easeOut",
                  },
                  x: {
                    delay: 2.35 + index * 0.12,
                    duration: 3.2 + index * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
          }
        />
      ))}
    </motion.svg>
  );
}

export function HomeHero() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [isOpeningPresentation, setIsOpeningPresentation] = useState(false);

  const fastTransition: Transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.8, ease: entranceEase };

  useEffect(() => {
    if (window.location.hash === "#obiettivi") {
      router.replace("/presentazione");
    }
  }, [router]);

  const startPresentation = () => {
    setIsOpeningPresentation(true);
  };

  return (
    <section
      id="home"
      className="relative isolate grid min-h-[100svh] place-items-center overflow-hidden bg-brand-blue"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-brand-blue"
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0, scaleX: 0.88, scaleY: 0.64, borderRadius: "3rem" }
        }
        animate={{ opacity: 1, scaleX: 1, scaleY: 1, borderRadius: "0rem" }}
        transition={fastTransition}
      />

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center opacity-10 mix-blend-screen"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { delay: 0.35, duration: 1.1, ease: entranceEase }
        }
      >
      <div className="relative aspect-square w-screen max-w-screen h-screen max-h-screen -ml-230">
        <Image
          src="/logo_leonardo.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-left"
        />
      </div>
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 pb-14 pt-28 text-center sm:px-8">
        <h1
          aria-label="LEONARDO"
          className="flex flex-wrap justify-center text-6xl font-extrabold italic leading-none text-white sm:text-8xl md:text-9xl"
        >
          {titleLetters.map((letter, index) => (
            <motion.span
              aria-hidden="true"
              key={`${letter}-${index}`}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 44, filter: "blur(14px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      delay: 0.46 + index * 0.055,
                      duration: 0.7,
                      ease: entranceEase,
                    }
              }
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg"
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 18, filter: "blur(8px)" }
          }
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { delay: 0.92, duration: 0.65, ease: entranceEase }
          }
        >
          Fierce as Lion
        </motion.p>

        <motion.div
          className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { delay: 1.14, duration: 0.65, ease: entranceEase }
          }
        >
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="w-full bg-white text-brand-blue hover:bg-white/90 sm:w-auto"
              type="button"
              onClick={startPresentation}
            >
              Scopri Leonardo
              <ArrowRight className="size-4" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-white bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <a href="#gruppi">
                <UsersRound className="size-4" />
                Entra nei gruppi
              </a>
            </Button>
          </motion.div>
        </motion.div>
        <ItalianWaves shouldReduceMotion={shouldReduceMotion} />
      </div>

      {isOpeningPresentation && (
        <WhiteWave
          shouldReduceMotion={shouldReduceMotion}
          onComplete={() => router.push("/presentazione")}
        />
      )}
    </section>
  );
}
