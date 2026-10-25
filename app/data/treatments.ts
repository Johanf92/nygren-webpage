// Kilde: Carolines Timma-skjermbilder, mottatt 15. september 2026.
// Priser er i kroner. Varighet er bare oppgitt der den fremgår av kilden.
// Utvidet tekst er kundens utkast og er ikke faglig kvalitetssikret.
// Se NYGREN-OPPDATERING-2026-10-04.md før publisering.
// Endre navn, beskrivelser og priser her; nettsiden bruker samme data overalt.
export type Treatment = {
  name: string;
  price: number;
  duration?: number;
  note?: string;
};

export type TreatmentCategory = {
  id: string;
  name: string;
  description: string;
  longDescription?: string[];
  services: Treatment[];
};

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: "massasje",
    name: "Massasje",
    description:
      "Velg mellom klassisk massasje med fastere trykk og mykere velværemassasje. Caroline tilbyr også gravidmassasje og barnemassasje.",
    longDescription: [
      "Caroline masserer med varme hender og et trygt, fast grep. Du skal kjenne at du får massasje, men du skal alltid klare å slappe av og puste godt under behandlingen. Hvis dere blir enige om å jobbe med spesifikke triggerpunkter, skal grensen være på «godt-vondt».",
      "I behandlingsmenyen velger du «klassisk massasje» når du gjør bestillingen din, så bestemmer dere sammen om du skal ha klassisk massasje eller velværemassasje når du kommer til timen; kanskje trenger du litt av begge deler.",
      "Massasjen er din time, din trygghet og ditt fristed. Har du noe på hjertet, lytter Caroline gjerne, og ønsker du ro og fred, gjennomføres massasjen kun med rolig musikk. Du er alltid velkommen som du er.",
    ],
    services: [
      { name: "Klassisk massasje / velværemassasje", duration: 30, price: 650,
        note: "Velg et fokusområde, for eksempel rygg og nakke eller legger og lår." },
      { name: "Klassisk massasje / velværemassasje", duration: 60, price: 1150,
        note: "Massasje av hele kroppen eller bestemte fokusområder." },
      { name: "Klassisk massasje / velværemassasje", duration: 90, price: 1650,
        note: "Massasje av hele kroppen eller bestemte fokusområder." },
      { name: "Klassisk massasje / velværemassasje", duration: 120, price: 2150,
        note: "Massasje av hele kroppen eller bestemte fokusområder." },
      { name: "Gravidmassasje", duration: 75, price: 1280,
        note: "Tilpasses dine ønsker, med puter og justerbar benk. Caroline tilbyr behandlingen etter uke 14." },
      { name: "Barnemassasje", duration: 30, price: 600,
        note: "Rolig helkroppsmassasje med mykere grep." },
    ],
  },
  {
    id: "lymfedrenasje",
    name: "Lymfedrenasje",
    description:
      "Manuell behandling med rolige, lette grep. Velg ansikt, hele kroppen eller en kombinasjon.",
    longDescription: [
      "Manuell lymfedrenasje er uten olje, så her kan du ha på løse klær, og behandlingen gjøres uten maskiner. I denne behandlingen settes lymfesystemet i gang, noe som videre kan vekke immunforsvaret, hormonsystemet og øke blodsirkulasjonen. Behandlingen passer godt for gravide, hvis du føler at du har mye vann i kroppen, eller ved lettere sykdom som ikke helt slipper taket.",
      "Under en lymfedrenasje opplever du gjerne total ro, da det er en «stille» behandling med rolig musikk i rommet og lette trykk mot kroppen. Det er ikke uvanlig å sovne under behandlingen. Merk at lymfedrenasje er en mye lettere behandling enn massasje, fordi lymfeårene ligger over musklene våre. Hvis du trenger å løsne opp muskulaturen, er det derfor massasje du skal bestille.",
      "Lymfedrenasje blir ofte anbefalt ved hovne ben, armer, fingre eller føtter, og etter operasjoner som kne- og hofteproteser. Behandlingen anbefales for å hjelpe kroppen med å drenere vekk overflødig væske.",
    ],
    services: [
      { name: "Hel kropp og ansikt", price: 1700 },
      { name: "Hel kropp", price: 1200, note: "Ansikt er ikke inkludert." },
      { name: "Ansikt", price: 750, note: "Utføres uten olje." },
    ],
  },
  {
    id: "vipper-bryn",
    name: "Vipper og bryn",
    description:
      "Farging av vipper og bryn, og forming av bryn med voks eller pinsett. Velg enkeltbehandling eller en kombinasjon.",
    longDescription: [
      "Her kan du velge å kun farge vipper, kun farge bryn, kun korrigere bryn med napping og/eller voksing, eller å kombinere behandlingene.",
      "Har du sensitive øyne, kan du skrive det i notatfeltet når du booker timen din. Fargen fra Reflectosil/Hamilton blir liggende i cirka 10 minutter på vippene. Du vil sannsynligvis kjenne litt sviing på vipperoten underveis, men fargen skylles rett av dersom du opplever kraftig ubehag — fortell gjerne hvordan du har det underveis.",
      "På bryn blir fargen liggende i alt mellom 2 og 15 minutter, avhengig av hvor mørke du ønsker dem. Merk at fargen ofte sitter litt igjen på huden i 1–2 dager, så hvis mulig anbefales det å farge bryn minst 2–5 dager før et planlagt event som bryllup, julebord, konfirmasjon eller lignende. Fargen på vipper og bryn holder seg fin i minst fire uker.",
    ],
    services: [
      { name: "Farging av vipper", price: 400 },
      { name: "Farging av vipper og bryn", price: 550,
        note: "Forming av bryn er ikke inkludert." },
      { name: "Farge og forming av bryn", price: 450 },
      { name: "Farging av vipper og bryn, samt forming av bryn", price: 600 },
      { name: "Farging av bryn", price: 250 },
      { name: "Forming av bryn", price: 400, note: "Med voks eller pinsett." },
    ],
  },
  {
    id: "harfjerning",
    name: "Hårfjerning",
    description:
      "Voksing av ansikt og kropp. Velg området du ønsker behandlet, eller kombiner legger og lår.",
    longDescription: [
      "Det brukes sensitiv og effektiv hardvoks fra Thalgo til voksing av bryn, overleppe og armhuler. Denne stivner selv og dras av uten vokspapir.",
      "Til legger og lår brukes Thalgo sin rullevoks, som dras av med vokspapir. Denne er også for sensitiv hud.",
      "Det gis dessverre ikke intimvoks, bikini eller brasiliansk voksing her.",
    ],
    services: [
      { name: "Voksing av overleppe", price: 210 },
      { name: "Voksing av legger", price: 450 },
      { name: "Voksing av armhuler", price: 260 },
      { name: "Voksing av armer", price: 450 },
      { name: "Voks av bryst/rygg", price: 420 },
      { name: "Voksing av lår", price: 450 },
      { name: "Voksing av legger og lår", price: 790 },
    ],
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("nb-NO").format(price) + " kr";
