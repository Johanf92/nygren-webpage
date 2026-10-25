import type { ReactNode } from "react";
import Image from "next/image";
import Visit from "./components/Visit";
import { caroline } from "./data/caroline";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import InstagramCarousel from "./components/InstagramCarousel";
import BrandWordmark from "./components/BrandWordmark";
import { Treatments, TreatmentPrices } from "./components/Treatments";

const bookingUrl = process.env.NEXT_PUBLIC_TIMMA_URL ?? "https://bestill.timma.no/reservation/bedrehverdag";
// Set NEXT_PUBLIC_GIFTCARD_URL once the dedicated gift-card URL is confirmed.
const giftCardUrl = process.env.NEXT_PUBLIC_GIFTCARD_URL?.trim() || bookingUrl;

function ActionLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 ${className}`}
    >
      {children}
      <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function BookingLink({ className = "" }: { className?: string }) {
  return (
    <ActionLink
      href={bookingUrl}
      className={`bg-mur text-paper hover:bg-mur-dark focus-visible:outline-mur ${className}`}
    >
      Bestill time
    </ActionLink>
  );
}

function GiftCardLink({ className = "" }: { className?: string }) {
  return (
    <ActionLink
      href={giftCardUrl}
      className={`border border-ink/15 bg-paper text-ink hover:bg-leire focus-visible:outline-ink ${className}`}
    >
      Kjøp gavekort
    </ActionLink>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-paper text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
        <div className="mx-auto flex min-h-20 max-w-[88rem] items-center justify-between gap-3 px-5 py-4 sm:px-8 lg:px-12">
          <a href="#topp" aria-label="Nygren Massasje – til toppen" className="shrink-0">
            <BrandWordmark />
          </a>
          <nav aria-label="Hovedmeny" className="hidden items-center gap-8 text-sm font-medium text-ink/80 lg:flex">
            <a href="#behandlinger" className="transition hover:text-ink">Behandlinger</a>
            <a href="#om" className="transition hover:text-ink">Om Caroline</a>
            <a href="#instagram" className="transition hover:text-ink">Instagram</a>
            <a href="/kontakt" className="transition hover:text-ink">Kontakt</a>
          </nav>
          <BookingLink className="!min-h-11 shrink-0 whitespace-nowrap !px-3 !py-2 sm:!px-4" />
        </div>
      </header>

      <section id="topp" className="px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
        <div className="mx-auto grid max-w-[88rem] items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-16">
          <div className="min-w-0 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-mur">Massasje · Velvære · Trygghet</p>
            <h1 className="mt-6 font-serif text-[clamp(3rem,5.8vw,6rem)] leading-[1.04] tracking-[-0.04em]">
              En liten pause
              <br />
              <em className="font-normal">fra hverdagen</em>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-ink sm:text-xl">
              Hos Nygren Massasje tilbyr vi klassisk massasje eller velværemassasje, lymfedrenasje, gravidmassasje og barnemassasje. Vi tilbyr også hårfjerning med voks og behandling av vipper og bryn.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <BookingLink />
              <GiftCardLink />
              <a href="#behandlinger" className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-[0.95rem] font-semibold transition hover:bg-leire focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
                Se behandlingene
              </a>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="absolute -left-4 -top-4 hidden h-28 w-28 rounded-full bg-sand blur-2xl lg:block" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-leire shadow-[0_24px_80px_rgba(48,40,35,0.12)]">
              <Image
                src="/images/caroline-hero.webp"
                alt="Caroline Nygren i behandlingsrommet"
                fill
                priority
                className="object-cover object-[center_18%]"
                sizes="(min-width: 1536px) 608px, (min-width: 1024px) 42vw, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
              />
            </div>
          </div>
        </div>
      </section>

      <Treatments />
      <TreatmentPrices bookingUrl={bookingUrl} />

      <section id="om" className="grid bg-leire text-ink lg:grid-cols-2">
        <div className="relative min-h-[440px] lg:min-h-[720px]">
          <Image
            src={caroline.portrait || "/images/relax9.webp"}
            alt={caroline.portrait ? "Caroline Nygren" : "Bøker, en kopp og et rolig øyeblikk"}
            fill
            className="object-cover object-[center_18%]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="flex items-center px-5 py-20 sm:px-12 lg:px-[clamp(3rem,7vw,8rem)]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-mur">Hos Caroline</p>
            <h2 className="mt-5 font-serif text-5xl leading-[1.02] tracking-[-0.035em] sm:text-6xl">
              Her blir du møtt
              <br />
              <em className="font-normal">som du er.</em>
            </h2>
            <p className="mt-8 text-lg leading-8 text-ink/75">{caroline.about}</p>
            {caroline.personal && <p className="mt-5 whitespace-pre-line text-lg leading-8 text-ink/75">{caroline.personal}</p>}
            {caroline.education.length > 0 && (
              <div className="mt-8">
                <h3 className="font-serif text-2xl">Utdanning og kurs</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-muted-ink">
                  {caroline.education.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            )}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-ink/15 p-5">
                <Sparkles aria-hidden="true" className="mb-5 size-5" />
                <p className="font-semibold">Gravidmassasje</p>
                <p className="mt-2 text-sm leading-6 text-ink/68">Tilpasset massasje med puter og justerbar benk. Tilbys etter uke 14.</p>
              </div>
              <div className="rounded-2xl border border-ink/15 p-5">
                <Sparkles aria-hidden="true" className="mb-5 size-5" />
                <p className="font-semibold">Massasje for barn</p>
                <p className="mt-2 text-sm leading-6 text-ink/68">Rolig behandling tilpasset alder og individuelle behov.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InstagramCarousel />
      <Visit />

      <section id="kontakt" className="bg-mur px-5 py-24 text-paper sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[88rem] text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-sand">Klar for en pause?</p>
          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-[clamp(3.4rem,7vw,7rem)] leading-[1.04] tracking-[-0.04em]">La oss finne en time som passer.</h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-white/75">Bestill direkte på nett, eller ta kontakt dersom du lurer på hvilken behandling du skal velge.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <BookingLink className="!bg-sand !text-ink hover:!bg-paper focus-visible:!outline-paper" />
            <a href="/kontakt" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-semibold transition hover:bg-white/10">
              <Mail aria-hidden="true" className="size-4" /> Kontakt meg
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-ink px-5 py-10 text-paper/68 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-5 text-sm lg:flex-row lg:items-center lg:justify-between">
          <BrandWordmark light />
          <a href="mailto:bedrehverdagnygren@gmail.com" className="break-all transition hover:text-white">bedrehverdagnygren@gmail.com</a>
          <p>© {new Date().getFullYear()} Caroline Nygren</p>
        </div>
      </footer>
    </main>
  );
}
