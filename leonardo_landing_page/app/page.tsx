import {
  ArrowRight,
  BadgeCheck,
  Cog,
  ExternalLink,
  FileText,
  MapPin,
  Ruler,
} from "lucide-react";
import Image from "next/image";

import CircularGallery from "@/components/CircularGallery";
import { HomeHero } from "@/components/home-hero";
import { GroupsSection } from "@/components/groups-section";
import { SiteHeader } from "@/components/site-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: Ruler,
    title: "Aula studio",
    text: "La sede di Leonardo mette a disposizione un’aula studio dotata di prese elettriche e servizi igienici.",
  },
  {
    icon: Cog,
    title: "Stampante 3d",
    text: "La sede di Leonardo mette a disposizione la stampante 3d previa prenotazione e richiesta ai responsabili di sede.",
  },
  {
    icon: FileText,
    title: "Networking",
    text: "La sede di Leonardo favorisce il networking tra studenti e professionisti, offrendo spazi pensati per incontrarsi, condividere idee e creare nuove opportunità di collaborazione.",
  },
];

const faqs = [
  {
    question: "Entrare a far parte di Leonardo è gratuito?",
    answer:
      "Sì. L’iscrizione all’associazione studentesca Leonardo è gratuita e aperta agli studenti interessati a partecipare alle attività, agli eventi e ai progetti promossi all’interno dell’UniCal.",
  },
  {
    question: "Che tipo di attività organizza Leonardo all’UniCal?",
    answer:
      "Leonardo organizza iniziative pensate per gli studenti, come eventi culturali, momenti di confronto, attività di orientamento, supporto alla vita universitaria e occasioni di socialità all’interno del campus.",
  },
  {
    question: "Come posso entrare in contatto con l’associazione Leonardo?",
    answer:
      "Puoi contattare Leonardo tramite i suoi canali social, partecipare agli eventi organizzati in università oppure rivolgerti direttamente ai membri dell’associazione presenti nel campus UniCal.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />
      <HomeHero />
      <section id="servizi" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <Badge variant="outline" className="mb-4 bg-white">
            <BadgeCheck className="text-success" />
            Regolarmente accreditata e iscritta nell&apos;apposito Albo di Ateneo
          </Badge>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            La nostra sede
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Vieni a trovarci difronte il Cubo 7/11 
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title} className="bg-white/90">
                <CardHeader>
                  <div className="mb-3 flex size-11 items-center justify-center rounded-md bg-secondary text-success">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.text}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <GroupsSection />
      
      <section id="eventi" className="bg-[#f1eee6]">
        <div className="w-full px-5 py-20 sm:px-8">
          <div style={{ height: "620px", position: "relative" }}>
            <CircularGallery
              bend={1}
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
              textColor="#ffffff"
            />
          </div>
        </div>
      </section>

      <section id="chisiamo" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Scopri Leonardo
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="leading-7 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contatti" className="border-t bg-brand-blue text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="flex flex-col gap-8 border-b border-white/12 pb-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex w-full justify-center lg:w-auto lg:justify-start">
              <div className="flex items-center gap-4 px-5 py-5 text-center backdrop-blur-sm">
                <div className="relative size-16 shrink-0">
                  <Image
                    src="/logo_leonardo.png"
                    alt="Logo Leonardo"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <p className="text-3xl font-extrabold italic leading-none text-white sm:text-4xl">
                    LEONARDO
                  </p>
                  <p className="mt-2 text-sm text-white/70 sm:text-base">
                    Fierce as a Lion
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                Contatti
              </p>
              <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/72">
                <a
                  href="https://www.instagram.com/leonardo.unical/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <ExternalLink className="size-4" />
                  Instagram Leonardo
                </a>
                <a
                  href="#gruppi"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <ArrowRight className="size-4" />
                  Gruppi WhatsApp matricole
                </a>
                <p className="inline-flex items-center gap-2">
                  <MapPin className="size-4" />
                  UniCal, di fronte al Cubo 7/11
                </p>
              </div>
            </div>

            <div className="w-full text-left lg:w-auto">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                Navigazione
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/72">
                <a href="#home" className="transition-colors hover:text-white">
                  Home
                </a>
                <a
                  href="/presentazione"
                  className="transition-colors hover:text-white"
                >
                  Scopri Leonardo
                </a>
                <a href="#chisiamo" className="transition-colors hover:text-white">
                  Chi siamo
                </a>
              </div>
            </div>
          </div>

          <p className="pt-6 text-center text-sm text-white/55">
            Created By{" "}
            <a
              href="https://www.instagram.com/giuseppedemarcoo/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              @giuseppedemarcoo
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
