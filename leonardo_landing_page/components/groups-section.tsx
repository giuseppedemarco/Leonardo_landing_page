import { ExternalLink, MessageCircle } from "lucide-react";

const groups = [
  {
    department: "Dipartimento FISICA",
    title: "Fisica",
    url: "https://chat.whatsapp.com/EUqKgguau4yCysZ36LMD4q",
  },
  {
    department: "Dipartimento DIMEG",
    title: "Ingegneria Meccanica",
    url: "https://chat.whatsapp.com/HkazFIrRy5u7dKjdvxRmnr",
  },
  {
    department: "Dipartimento DIMEG",
    title: "Ingegneria Gestionale",
    url: "https://chat.whatsapp.com/KxrHR6FmPxP2CFkQH2VMOR",
  },
  {
    department: "Dipartimento DISU",
    title: "Comunicazione e DAMS",
    url: "https://chat.whatsapp.com/IF3rjfFgTbS067oBJO0yF9",
  },
  {
    department: "Dipartimento DISU",
    title: "Filosofia e Storia",
    url: "https://chat.whatsapp.com/HMV1PLZCLeDEPnEF0v0j1m",
  },
  {
    department: "Dipartimento DISU",
    title: "Lettere",
    url: "https://chat.whatsapp.com/KS9luJ4wc3RH9asYdY5GKs",
  },
  {
    department: "Dipartimento DISU",
    title: "Lingue e Culture Moderne",
    url: "https://chat.whatsapp.com/KGBLgBt4WtnESIfIchMqwK",
  },
  {
    department: "Dipartimento DICES",
    title: "Scienze dell'Educazione",
    url: "https://chat.whatsapp.com/GhcwHaQJPnuB3abDWosknm",
  },
  {
    department: "Dipartimento DICES",
    title: "Mediazione Linguistica",
    url: "https://chat.whatsapp.com/LiztfLx8PNd7nx5IDE8IUy",
  },
  {
    department: "Dipartimento DICES",
    title: "Scienze e Tecniche Psicologiche",
    url: "https://chat.whatsapp.com/GvEFAjIMJAaCswCbIOZiRG",
  },
  {
    department: "Dipartimento DISPES",
    title: "Scienze dell'Amministrazione",
    url: "https://chat.whatsapp.com/LeBee7LLt5rDGq5mkrD5Uo",
  },
  {
    department: "Dipartimento DISPES",
    title: "Scienze Politiche",
    url: "https://chat.whatsapp.com/ITe5FT0wt8e7z86sJPgNmd",
  },
  {
    department: "Dipartimento DISPES",
    title: "Servizio Sociale",
    url: "https://chat.whatsapp.com/FbB576dlgA47Shlf8rCOfb",
  },
  {
    department: "Dipartimento DISPES",
    title: "Media e Societa digitale",
    url: "https://chat.whatsapp.com/D1QzdUX4H7G4lSyG30EoHZ",
  },
  {
    department: "Dipartimento DISCAG",
    title: "Economia Aziendale",
    url: "https://chat.whatsapp.com/FQV8D56OgB722dGPk8I6Zw",
  },
  {
    department: "Dipartimento DISCAG",
    title: "Giurisprudenza",
    url: "https://chat.whatsapp.com/KrPblp7CJ9B0MZEGOJCP28",
  },
  {
    department: "Dipartimento DISCAG",
    title: "Scienze Turistiche",
    url: "https://chat.whatsapp.com/D4xz7c7CpWC78yHEkqdHg0",
  },
  {
    department: "Dipartimento DISCAG",
    title: "Servizi Giuridici per l'Innovazione Digitale",
    url: "https://chat.whatsapp.com/F5oY9CQR5ex4FN8enJN6bL",
  },
  {
    department: "Dipartimento DESF",
    title: "Economia",
    url: "https://chat.whatsapp.com/Lfh5DJ1mF1pGEfuKXlFc9x",
  },
  {
    department: "Dipartimento DESF",
    title: "Statistica per Data Science",
    url: "https://chat.whatsapp.com/L0kjOU1O0NrLLOZNbg3Js3",
  },
  {
    department: "Dipartimento DIAM",
    title: "Ingegneria per l'ambiente e la Sicurezza del Territorio",
    url: "https://chat.whatsapp.com/Kgs01zLUMZe6FFX1ZZFp3h",
  },
  {
    department: "Dipartimento DIAM",
    title: "Tecnologie del Mare e della Navigazione",
    url: "https://chat.whatsapp.com/CxTAUMFhss0CnXicxVe4Pk",
  },
  {
    department: "Dipartimento DINCI",
    title: "Ingegneria Civile",
    url: "https://chat.whatsapp.com/IjVpjJvWqUF2PxTxcdjWJw",
  },
  {
    department: "Dipartimento DINCI",
    title: "Ingegneria Edile-Architettura",
    url: "https://chat.whatsapp.com/HrxKh1qSqPAA3gzrkfKVC2",
  },
  {
    department: "Dipartimento DEMACS",
    title: "Scienze della Formazione Primaria",
    url: "https://chat.whatsapp.com/HS11rBz4R7lLUvhrOm3APx",
  },
  {
    department: "Dipartimento DEMACS",
    title: "Informatica",
    url: "https://chat.whatsapp.com/GxvLvYpVzXY1U7XHK8YoeZ",
  },
  {
    department: "Dipartimento DEMACS",
    title: "Matematica",
    url: "https://chat.whatsapp.com/Gs0QYAmCKxp3umZq34MMGi",
  },
  {
    department: "Dipartimento CTC",
    title: "Chimica",
    url: "https://chat.whatsapp.com/KQFnj62xSAgEvCinVhPFgx",
  },
  {
    department: "Dipartimento DFSSN",
    title: "Chimica e Tecnologia Farmaceutiche",
    url: "https://chat.whatsapp.com/D9uo0ByuUSYJtZXetpMfsF",
  },
  {
    department: "Dipartimento DFSSN",
    title: "Farmacia",
    url: "https://chat.whatsapp.com/HSvBZSQzicTEjkl5uCYKcI",
  },
  {
    department: "Dipartimento DFSSN",
    title: "Fisioterapia",
    url: "https://chat.whatsapp.com/BtupkRWkZaaAHMuaUurpN5",
  },
  {
    department: "Dipartimento DFSSN",
    title: "Infermieristica",
    url: "https://chat.whatsapp.com/JUHDzBBaiBFBGQYxQAL3wL",
  },
  {
    department: "Dipartimento DFSSN",
    title: "ISFPS",
    url: "https://chat.whatsapp.com/EPT4EIod8VAAxU5petsu9s",
  },
  {
    department: "Dipartimento DFSSN",
    title: "Medicina e Chirurgia",
    url: "https://chat.whatsapp.com/Gt8rs0GRnh0LckK6ZTkPkO",
  },
  {
    department: "Dipartimento DFSSN",
    title: "Scienze della nutrizione",
    url: "https://chat.whatsapp.com/KfE2aLzbL378c893yyuYhk",
  },
  {
    department: "Dipartimento DIMES",
    title: "Ingegneria Biomedica",
    url: "https://chat.whatsapp.com/JIA9jWzR3As52huYvhREAB",
  },
  {
    department: "Dipartimento DIMES",
    title: "Ingegneria Chimica",
    url: "https://chat.whatsapp.com/HBGg9ATZptT50fYwjFqFLz",
  },
  {
    department: "Dipartimento DIMES",
    title: "Ingegneria Elettronica",
    url: "https://chat.whatsapp.com/Ep1OFHlS02w8cWRS2pa8hO",
  },
  {
    department: "Dipartimento DIMES",
    title: "Ingegneria Informatica",
    url: "https://chat.whatsapp.com/DSVTpjfLykYLIML6KbnfFy",
  },
  {
    department: "Dipartimento DIBEST",
    title: "Scienze e tecnologie per le attivita motorie e sportive",
    url: "https://chat.whatsapp.com/BEPpqL5Uif89NG12EiCOgs",
  },
  {
    department: "Dipartimento DIBEST",
    title: "Restauro e Beni Culturali",
    url: "https://chat.whatsapp.com/DzYGq0kgpNm8H1XUQm2JiZ",
  },
  {
    department: "Dipartimento DIBEST",
    title: "Scienze Naturali e Ambientali",
    url: "https://chat.whatsapp.com/IA2gxtdNimB6aATpiPtS7C",
  },
  {
    department: "Dipartimento DIBEST",
    title: "Scienze Geologiche",
    url: "https://chat.whatsapp.com/DuZnh8Vt9JKBX99OUVg7BP",
  },
  {
    department: "Dipartimento DIBEST",
    title: "Scienze e Tecnologie Biologiche",
    url: "https://chat.whatsapp.com/LhXv4gAFnwm8cxPXbWRPpJ",
  },
  {
    department: "Dipartimento DIBEST",
    title: "Biologia",
    url: "https://chat.whatsapp.com/EmMnVB4yd0aHn7hU4HgoO1",
  },
];

export function GroupsSection() {
  return (
    <section id="gruppi" className="bg-brand-blue px-5 py-24 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
              Gruppi matricole
            </p>
            <h2 className="mt-3 text-3xl font-extrabold italic leading-tight sm:text-5xl">
              Sei una Matricola? Entra nei gruppi whatsapp del tuo corso di laurea!
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              Trova il gruppo WhatsApp del tuo corso e raggiungi subito la
              community di riferimento.
            </p>
          </div>
          <a
            href="https://linktr.ee/associazione.rdu_leonardo#545650720"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Fonte Linktree di Leonardo
            <ExternalLink className="size-4" />
          </a>
        </div>

        <p className="mt-8 w-fit rounded-full bg-white/10 px-3 py-1 text-sm text-white/70">
          {groups.length} gruppi disponibili
        </p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <a
              key={group.url}
              href={group.url}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-28 flex-col justify-between rounded-lg border border-white/10 bg-white/[0.06] p-4 text-white transition-colors hover:border-white/30 hover:bg-white/12"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/45">
                  {group.department}
                </p>
                <h3 className="mt-2 text-base font-semibold leading-snug">
                  {group.title}
                </h3>
              </div>
              <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-white/70">
                Apri gruppo
                <MessageCircle className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
