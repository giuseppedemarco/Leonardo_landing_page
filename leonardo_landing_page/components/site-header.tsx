"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Obiettivi", href: "/presentazione" },
  { label: "Eventi", href: "#eventi" },
  { label: "Chi siamo", href: "#chisiamo" },
];

const entranceEase = [0.16, 1, 0.3, 1] as const;
const navScrollFallback = 800;

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-current hover:bg-brand-blue/10 hover:text-current"
          aria-label="Apri menu"
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 grid gap-3">
          {navItems.map((item) => (
            <SheetClose asChild key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {item.label}
              </a>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function SiteHeader() {
  const shouldReduceMotion = useReducedMotion();
  const [heroHeight, setHeroHeight] = useState(navScrollFallback);
  const [viewportWidth, setViewportWidth] = useState(1440);
  const { scrollY } = useScroll();
  const scrollEnd = heroHeight || navScrollFallback;
  const startWidth = Math.max(viewportWidth - 32, 320);
  const endWidth = Math.min(startWidth, 448);

  const width = useTransform(
    scrollY,
    [0, scrollEnd],
    [startWidth, endWidth],
  );
  const padding = useTransform(
    scrollY,
    [0, scrollEnd],
    ["1.5rem 2rem", "0.8rem 1.5rem"],
  );
  const backgroundColor = useTransform(
    scrollY,
    [0, scrollEnd],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.92)"],
  );
  const border = useTransform(
    scrollY,
    [0, scrollEnd],
    [
      "1px solid rgba(255, 255, 255, 0)",
      "1px solid rgba(255, 255, 255, 0.48)",
    ],
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, scrollEnd],
    ["blur(0px)", "blur(12px)"],
  );
  const boxShadow = useTransform(
    scrollY,
    [0, scrollEnd],
    [
      "0 0 0 rgba(0, 0, 0, 0)",
      "0 8px 32px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.02)",
    ],
  );
  const textColorProgress = useTransform(
    scrollY,
    [0, scrollEnd],
    [0, 1],
  );
  const textColor = useMotionTemplate`rgb(${useTransform(textColorProgress, [0, 1], [255, 22])} ${useTransform(textColorProgress, [0, 1], [255, 40])} ${useTransform(textColorProgress, [0, 1], [255, 75])})`;

  useEffect(() => {
    const updateHeroHeight = () => {
      const hero =
        document.getElementById("hero-section") ??
        document.getElementById("home");

      setHeroHeight(hero?.offsetHeight ?? window.innerHeight ?? navScrollFallback);
      setViewportWidth(window.innerWidth);
    };

    updateHeroHeight();
    window.addEventListener("resize", updateHeroHeight);

    return () => window.removeEventListener("resize", updateHeroHeight);
  }, []);

  return (
    <motion.header
      className="site-header fixed left-1/2 top-4 z-50 flex items-center justify-end md:justify-center"
      initial={shouldReduceMotion ? false : { opacity: 0, y: -18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { delay: 1.42, duration: 0.55, ease: entranceEase }
      }
      style={{
        x: "-50%",
        width: shouldReduceMotion ? endWidth : width,
        padding: shouldReduceMotion ? "0.8rem 1.5rem" : padding,
        borderRadius: "100px",
        backgroundColor: shouldReduceMotion
          ? "rgba(255, 255, 255, 0.92)"
          : backgroundColor,
        border: shouldReduceMotion
          ? "1px solid rgba(255, 255, 255, 0.48)"
          : border,
        backdropFilter: shouldReduceMotion ? "blur(12px)" : backdropFilter,
        WebkitBackdropFilter: shouldReduceMotion
          ? "blur(12px)"
          : backdropFilter,
        boxShadow: shouldReduceMotion
          ? "0 8px 32px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.02)"
          : boxShadow,
        color: shouldReduceMotion ? "var(--brand-blue)" : textColor,
      }}
    >
      <nav
        className="hidden items-center gap-1 text-sm font-semibold md:flex"
        aria-label="Navigazione principale"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-2.5 py-2 transition-colors hover:bg-brand-blue/10"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </motion.header>
  );
}
