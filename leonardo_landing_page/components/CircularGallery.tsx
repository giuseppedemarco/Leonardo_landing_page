"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    text: "Costruiamo momenti di confronto, formazione e socialità all'interno di UniCal.",
  },
  {
    eyebrow: "Community",
    image: "/lezione.jpeg",
    title: "Rete tra corsi",
    text: "Mettiamo in comunicazione gruppi, dipartimenti e persone che vogliono partecipare.",
  },
  {
    eyebrow: "Opportunità",
    image: "/lezione_2.jpeg",
    title: "Spazi per crescere",
    text: "Favoriamo collaborazione, visibilità e nuove occasioni per gli studenti.",
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
  textColor = "#ffffff",
}: CircularGalleryProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef({
    hasMoved: false,
    isDragging: false,
    scrollLeft: 0,
    startX: 0,
  });

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const card = track.querySelector<HTMLElement>("[data-gallery-card]");
    const gap = window.innerWidth < 640 ? 16 : 32;
    const cardWidth = card?.offsetWidth ?? 340;

    track.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-full overflow-hidden bg-[#f1eee6]">
      <div className="absolute left-1/2 top-5 z-10 flex max-w-[calc(100%-2rem)] -translate-x-1/2 items-center justify-center gap-2 rounded-full border border-[#d8d1c2] bg-white/70 px-3 py-2 text-center text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#16284b] shadow-sm backdrop-blur sm:top-8 sm:gap-3 sm:text-xs sm:tracking-[0.18em]">
        <div className="relative size-6 shrink-0 sm:size-7">
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
        <button
          type="button"
          aria-label="Iniziativa precedente"
          onClick={() => scrollByCard(-1)}
          className="absolute left-4 top-1/2 z-20 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d8d1c2] bg-white/80 text-[#16284b] shadow-sm backdrop-blur transition-colors hover:bg-white sm:flex"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Iniziativa successiva"
          onClick={() => scrollByCard(1)}
          className="absolute right-4 top-1/2 z-20 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d8d1c2] bg-white/80 text-[#16284b] shadow-sm backdrop-blur transition-colors hover:bg-white sm:flex"
        >
          <ChevronRight className="size-5" />
        </button>

        <div
          ref={trackRef}
          className="hide-scrollbar flex h-full w-full touch-pan-y snap-x snap-mandatory items-center gap-4 overflow-x-auto overflow-y-hidden scroll-smooth px-[11vw] sm:gap-8 sm:px-12"
          onPointerDown={(event) => {
            if (event.pointerType === "mouse" && event.button !== 0) {
              return;
            }

            dragStateRef.current = {
              hasMoved: false,
              isDragging: true,
              scrollLeft: event.currentTarget.scrollLeft,
              startX: event.clientX,
            };
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            const dragState = dragStateRef.current;

            if (!dragState.isDragging) {
              return;
            }

            const deltaX = event.clientX - dragState.startX;

            if (Math.abs(deltaX) > 4) {
              dragState.hasMoved = true;
            }

            event.currentTarget.scrollLeft = dragState.scrollLeft - deltaX;
          }}
          onPointerUp={(event) => {
            dragStateRef.current.isDragging = false;

            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              event.currentTarget.releasePointerCapture(event.pointerId);
            }
          }}
          onPointerCancel={() => {
            dragStateRef.current.isDragging = false;
          }}
          onClickCapture={(event) => {
            if (dragStateRef.current.hasMoved) {
              event.preventDefault();
              dragStateRef.current.hasMoved = false;
            }
          }}
        >
          {items.map((item) => (
            <article
              key={item.title}
              data-gallery-card
              className="relative flex h-[310px] w-[78vw] min-w-[260px] max-w-[340px] shrink-0 snap-center flex-col justify-end overflow-hidden bg-[#16284b] shadow-[0_16px_32px_rgba(22,40,75,0.14)] sm:h-[350px]"
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
                  sizes="(max-width: 640px) 78vw, 340px"
                  className="object-cover"
                  draggable={false}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#16284b]/88 via-[#16284b]/38 to-transparent" />
              <div className="relative z-10 p-5 sm:p-6">
                <p className="inline-block bg-brand-blue/72 px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/80 sm:text-xs sm:tracking-[0.18em]">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-extrabold italic leading-tight sm:mt-4 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[15rem] text-sm leading-6 text-white/82 sm:mt-4 sm:leading-7">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-sm font-medium text-[#16284b]/65 sm:bottom-7">
        Scorri per esplorare
      </p>
    </div>
  );
}
