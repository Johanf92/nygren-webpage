import Link from "next/link";
import type { Metadata } from "next";
import BrandWordmark from "../components/BrandWordmark";
import ContactForm from "../components/ContactForm";
import { caroline } from "../data/caroline";

export const metadata: Metadata = { title: "Kontakt | Nygren Massasje", description: "Ta kontakt med Caroline hos Nygren Massasje på Tolvsrød Torg." };

export default function ContactPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_TIMMA_URL ?? "https://bestill.timma.no/reservation/bedrehverdag";
  return <main className="min-h-screen bg-paper px-5 pb-20 text-ink sm:px-8">
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-5 py-7"><Link href="/" aria-label="Nygren Massasje – forsiden" className="text-mur"><BrandWordmark /></Link><Link href="/" className="py-3 text-sm underline underline-offset-4">← Til forsiden</Link></header>
    <div className="mx-auto mt-10 grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
      <div><p className="text-xs font-bold uppercase tracking-[0.25em] text-mur">Nygren Massasje</p><h1 className="mt-5 font-serif text-5xl sm:text-6xl">Kontakt Caroline</h1><p className="mt-6 text-lg leading-8 text-muted-ink">Har du spørsmål om behandlingene eller besøket ditt? Send meg en henvendelse.</p>
        <a href={`mailto:${caroline.email}`} className="mt-6 inline-block break-all py-2 text-mur underline underline-offset-4">{caroline.email}</a>
        <p className="mt-5 leading-7">Du finner meg på {caroline.location}.</p><Link href="/#finn-frem" className="inline-block py-3 text-mur underline underline-offset-4">Se lokasjon og parkering</Link>
        <div className="mt-8 rounded-2xl bg-sand p-6"><h2 className="font-serif text-2xl">Ønsker du en time?</h2><p className="mt-3 leading-7 text-muted-ink">Se ledige timer og bestill direkte i Timma.</p><a href={bookingUrl} target="_blank" rel="noreferrer" className="mt-5 inline-block rounded-full bg-mur px-6 py-3 font-semibold text-paper hover:bg-mur-dark">Bestill time ↗</a></div>
      </div>
      <div className="rounded-3xl border border-ink/15 p-6 sm:p-9"><h2 className="font-serif text-3xl">Din henvendelse</h2><ContactForm /></div>
    </div>
  </main>;
}
