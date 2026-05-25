import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Cog,
  FileText,
  Ruler,
  ShieldCheck,
} from "lucide-react";

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
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
  {
    icon: Ruler,
    title: "Progettazione",
    text: "Layout, dimensionamenti e revisioni tecniche con attenzione a vincoli, materiali e verifiche.",
  },
  {
    icon: Cog,
    title: "Meccanica",
    text: "Soluzioni per parti, assiemi e processi dove precisione e manutenzione contano davvero.",
  },
  {
    icon: FileText,
    title: "Documentazione",
    text: "Relazioni, tavole e dossier strutturati per rendere ogni scelta tecnica leggibile.",
  },
];

const projects = [
  {
    value: "studio",
    label: "Studio",
    title: "Dalla richiesta al quadro tecnico",
    points: [
      "Raccolta dei vincoli e definizione degli obiettivi.",
      "Analisi delle alternative con criteri misurabili.",
      "Sintesi chiara per decidere tempi, rischi e priorita.",
    ],
  },
  {
    value: "sviluppo",
    label: "Sviluppo",
    title: "Dal concept al prototipo",
    points: [
      "Modelli, schemi e componenti pensati per evolvere.",
      "Verifiche progressive prima della fase finale.",
      "Consegne snelle, versionate e facili da condividere.",
    ],
  },
  {
    value: "supporto",
    label: "Supporto",
    title: "Dal rilascio al miglioramento",
    points: [
      "Revisione tecnica su documenti e soluzioni esistenti.",
      "Risoluzione di criticita con interventi mirati.",
      "Allineamento continuo tra progetto, fornitori e team.",
    ],
  },
];

const faqs = [
  {
    question: "Che tipo di progetti puo seguire Leonardo?",
    answer:
      "Progetti tecnici, meccanici e documentali: dalla prima analisi fino alla consegna di elaborati chiari e verificabili.",
  },
  {
    question: "La landing usa davvero shadcn/ui?",
    answer:
      "Si. La struttura include componenti shadcn locali basati su Radix, varianti CVA, utility cn e tema CSS variables.",
  },
  {
    question: "E possibile aggiungere altri componenti?",
    answer:
      "Si. La configurazione shadcn e gia presente, quindi si possono aggiungere altri elementi della libreria mantenendo lo stesso sistema.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <SiteHeader />
      <HomeHero />
      <GroupsSection />
      <section id="servizi" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="max-w-2xl">
          <Badge variant="outline" className="mb-4 bg-white">
            <BadgeCheck className="text-success" />
            Sistema modulare
          </Badge>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Componenti solidi per raccontare lavoro tecnico.
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            La UI usa primitive accessibili e componibili: bottoni, badge,
            card, tab, accordion e menu mobile sono gia integrati.
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

      <section id="eventi" className="bg-[#f1eee6]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Badge variant="secondary" className="mb-4">
              <BarChart3 className="text-brand-blue" />
              Workflow
            </Badge>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Uno spazio pronto per sezioni, contenuti e conversione.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              La pagina ora ha una base riutilizzabile: si puo espandere con
              nuove sezioni senza cambiare linguaggio visivo.
            </p>
          </div>

          <Tabs defaultValue="studio" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {projects.map((project) => (
                <TabsTrigger key={project.value} value={project.value}>
                  {project.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {projects.map((project) => (
              <TabsContent key={project.value} value={project.value}>
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>
                      Struttura dimostrativa con Tabs shadcn/Radix.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {project.points.map((point) => (
                        <div key={point} className="flex gap-3 text-sm">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="chisiamo" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Badge variant="outline" className="mb-4 bg-white">
              <ShieldCheck className="text-success" />
              Domande
            </Badge>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Base shadcn pronta per continuare.
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
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white text-brand-blue">
              <ClipboardList className="text-success" />
              Prossimo step
            </Badge>
            <h2 className="text-3xl font-semibold">
              Aggiungi testi finali, contatti e casi studio reali.
            </h2>
          </div>
          <Button asChild variant="secondary" size="lg">
            <a href="mailto:info@leonardo.example">
              Scrivi a Leonardo
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
