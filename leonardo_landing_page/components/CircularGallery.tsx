"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type GalleryItem = {
  eyebrow: string;
  image: string;
  title: string;
  text: string;
};

type CircularGalleryProps = {
  bend?: number;
  borderRadius?: number;
  items?: GalleryItem[];
  scrollEase?: number;
  scrollSpeed?: number;
  textColor?: string;
};

const defaultItems: GalleryItem[] = [
  {
    eyebrow: "Associazione",
    image: "/unica_sotto_le_stelle.jpeg",
    title: "Unical sotto le stelle",
    text: "Evento organizzato di sera per osservare e conoscere il mondo delle costellazioni",
  },
  {
    eyebrow: "Campus",
    image: "/camminata_sul_ponte.jpeg",
    title: "Vita universitaria",
    text: "Connettiamo matricole e studenti con servizi, supporto e orientamento continuo.",
  },
  {
    eyebrow: "Eventi",
    image: "/evento_vestiti.jpeg",
    title: "Incontri e iniziative",
    text: "Costruiamo momenti di confronto, formazione e socialita all'interno di UniCal.",
  },
  {
    eyebrow: "Community",
    image: "/lezione.jpeg",
    title: "Rete tra corsi",
    text: "Mettiamo in comunicazione gruppi, dipartimenti e persone che vogliono partecipare.",
  },
  {
    eyebrow: "Opportunita",
    image: "/lezione_2.jpeg",
    title: "Spazi per crescere",
    text: "Favoriamo collaborazione, visibilita e nuove occasioni per gli studenti.",
  },
  {
    eyebrow: "Leonardo",
    image: "/albero_di_natale.jpeg",
    title: "Albero di natale di Leonardo",
    text: "Ogni anno ci riuniamo per abbellire la sede in occasione delle vacanze natalizie.",
  },
];

export default function CircularGallery({
  borderRadius = 0.05,
  items = defaultItems,
  scrollSpeed = 2,
  textColor = "#ffffff",
}: CircularGalleryProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const currentOffsetRef = useRef(0);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const cardWidth = 340;
    const cardGap = 32;
    const sidePadding = 48;
    const cardSpan = cardWidth + cardGap;
    const cycleWidth = items.length * cardSpan;

    currentOffsetRef.current = cycleWidth;

    const normalizeOffset = (value: number) => {
      let normalized = value;

      while (normalized < cycleWidth) {
        normalized += cycleWidth;
      }

      while (normalized >= cycleWidth * 2) {
        normalized -= cycleWidth;
      }

      return normalized;
    };

    const renderTrack = () => {
      if (!stripRef.current) {
        return;
      }

      currentOffsetRef.current = normalizeOffset(currentOffsetRef.current);
      stripRef.current.style.transform = `translate3d(${
        -currentOffsetRef.current + sidePadding
      }px, 0px, 0px)`;
    };

    const onPointerDown = (event: PointerEvent) => {
      isDraggingRef.current = true;
      dragStartXRef.current = event.clientX;
      dragStartOffsetRef.current = currentOffsetRef.current;
      track.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDraggingRef.current) {
        return;
      }

      const delta = event.clientX - dragStartXRef.current;
      const nextOffset = dragStartOffsetRef.current - delta * scrollSpeed;

      currentOffsetRef.current = nextOffset;
      renderTrack();
    };

    const stopDragging = (event: PointerEvent) => {
      if (!isDraggingRef.current) {
        return;
      }

      isDraggingRef.current = false;

      if (track.hasPointerCapture(event.pointerId)) {
        track.releasePointerCapture(event.pointerId);
      }
    };

    const handleResize = () => {
      renderTrack();
    };

    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", stopDragging);
    track.addEventListener("pointercancel", stopDragging);
    track.addEventListener("pointerleave", stopDragging);
    window.addEventListener("resize", handleResize);
    renderTrack();

    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", stopDragging);
      track.removeEventListener("pointercancel", stopDragging);
      track.removeEventListener("pointerleave", stopDragging);
      window.removeEventListener("resize", handleResize);
    };
  }, [items.length, scrollSpeed]);

  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="relative h-full overflow-hidden bg-[#f1eee6]">
      <div className="absolute left-1/2 top-8 z-10 flex -translate-x-1/2 items-center justify-center gap-3 rounded-full border border-[#d8d1c2] bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#16284b] shadow-sm backdrop-blur">
        <div className="relative size-7 shrink-0">
          <Image
            src="/logo_leonardo.png"
            alt=""
            fill
            sizes="28px"
            className="object-contain"
          />
        </div>
       Alcune delle nostre iniziative
      </div>

      <div className="relative flex h-full items-center">
        <div
          ref={trackRef}
          className="relative h-full w-full cursor-grab overflow-hidden active:cursor-grabbing"
        >
          <div
            ref={stripRef}
            className="absolute left-12 top-1/2 flex h-[380px] -translate-y-1/2 gap-8 will-change-transform"
          >
            {repeatedItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="relative flex h-[350px] w-[340px] shrink-0 flex-col justify-end overflow-hidden bg-[#16284b] shadow-[0_16px_32px_rgba(22,40,75,0.14)]"
                style={{
                  borderRadius: `${borderRadius * 100}%`,
                  color: textColor,
                }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="340px"
                    className="object-cover"
                    draggable={false}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#16284b]/88 via-[#16284b]/38 to-transparent" />
                <div className="relative z-10 p-6">
                  <p className="inline-block bg-[#2d8a71]/42 px-2 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                    {item.eyebrow}
                  </p>
                  <h3 className="mt-4 text-2xl font-extrabold italic leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[15rem] text-sm leading-7 text-white/82">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <p className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-sm font-medium text-[#16284b]/65">
        Trascina per esplorare
      </p>
    </div>
  );
}
