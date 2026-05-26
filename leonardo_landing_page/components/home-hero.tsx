"use client";

import { useEffect, useState, type CSSProperties } from "react";
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

type IntroStyle = CSSProperties & {
  "--hero-delay"?: string;
};

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

export function HomeHero() {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [hasIntroStarted, setHasIntroStarted] = useState(false);
  const [isOpeningPresentation, setIsOpeningPresentation] = useState(false);

  const fastTransition: Transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.8, ease: entranceEase };

  useEffect(() => {
    if (window.location.hash === "#obiettivi") {
      router.replace("/presentazione");
    }
  }, [router]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setHasIntroStarted(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const startPresentation = () => {
    setIsOpeningPresentation(true);
  };

  return (
    <section
      id="home"
      className={`hero-intro relative isolate grid min-h-[100svh] place-items-center overflow-hidden bg-brand-blue ${
        hasIntroStarted ? "hero-intro-ready" : ""
      }`}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-brand-blue"
        initial={false}
        animate={{ opacity: 1, scaleX: 1, scaleY: 1, borderRadius: "0rem" }}
        transition={fastTransition}
      />

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center opacity-10 mix-blend-screen"
        initial={false}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { delay: 0.35, duration: 1.1, ease: entranceEase }
        }
      >
        <div
          className="hero-logo-enter relative aspect-square h-[78svh] w-[78svh] max-w-none -translate-x-[18%] md:h-[118vmin] md:w-[118vmin] md:-translate-x-[50vw] lg:h-[122vmin] lg:w-[122vmin] lg:-translate-x-[46vw]"
          style={{ "--hero-delay": "80ms" } as IntroStyle}
        >
          <Image
            src="/logo_leonardo.png"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 80vh, 122vmin"
            className="object-contain object-left"
          />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 pb-12 pt-24 text-center sm:px-8 sm:pb-14 sm:pt-28">
        <h1
          aria-label="LEONARDO"
          className="flex flex-wrap justify-center text-5xl font-extrabold italic leading-none text-white sm:text-8xl md:text-9xl"
        >
          {titleLetters.map((letter, index) => (
            <motion.span
              aria-hidden="true"
              key={`${letter}-${index}`}
              className="hero-enter"
              style={
                { "--hero-delay": `${180 + index * 45}ms` } as IntroStyle
              }
              initial={false}
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
          className="hero-enter mt-5 max-w-2xl text-base leading-7 text-white/78 sm:mt-6 sm:text-lg"
          style={{ "--hero-delay": "640ms" } as IntroStyle}
          initial={false}
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
          className="hero-enter mt-7 flex w-full items-center justify-center gap-2 sm:mt-8 sm:w-auto sm:gap-3"
          style={{ "--hero-delay": "800ms" } as IntroStyle}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { delay: 1.14, duration: 0.65, ease: entranceEase }
          }
        >
          <motion.div
            className="min-w-0 flex-1 sm:w-auto sm:flex-none"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="h-11 w-full px-3 text-xs bg-white text-brand-blue hover:bg-white/90 sm:w-auto sm:px-6 sm:text-sm"
              type="button"
              onClick={startPresentation}
            >
              Scopri Leonardo
              <ArrowRight className="size-4" />
            </Button>
          </motion.div>

          <motion.div
            className="min-w-0 flex-1 sm:w-auto sm:flex-none"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 w-full px-3 text-xs border-white bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto sm:px-6 sm:text-sm"
            >
              <a href="#gruppi">
                <UsersRound className="size-4" />
                Entra nei gruppi
              </a>
            </Button>
          </motion.div>
        </motion.div>
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
