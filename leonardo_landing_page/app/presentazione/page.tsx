import type { Metadata } from "next";

import { PresentationStory } from "@/components/presentation-story";

export const metadata: Metadata = {
  title: "Presentazione | LEONARDO",
  description: "Presentazione dell'associazione Leonardo.",
};

export default function PresentazionePage() {
  return <PresentationStory />;
}
