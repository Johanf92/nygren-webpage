"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Camera } from "lucide-react";
import { useRef } from "react";

// Eksempelinnlegg fra designutkastet. Automatisk Instagram-henting er ikke tilkoblet.
const posts = [
  { image: "/images/relax7.webp", alt: "Et rolig øyeblikk med en varm kopp", text: "Små pauser kan gjøre en stor forskjell i en travel hverdag." },
  { image: "/images/relax3.webp", alt: "Rolig stemning og tid til avkobling", text: "Finn behandlingen som passer kroppen din akkurat i dag." },
  { image: "/images/relax9.webp", alt: "Bøker og en kopp i et rolig rom", text: "Tid til å lande, samle tankene og puste litt lettere." },
];

const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/massasjenygren/";

export default function InstagramCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const move = (direction: number) => track.current?.scrollBy({ left: direction * Math.min(track.current.clientWidth * 0.82, 460), behavior: "smooth" });

  return <section id="instagram" className="bg-sand px-5 py-24 text-ink sm:px-8 lg:px-12 lg:py-32">
    <div className="mx-auto max-w-[88rem]">
      <div className="mb-12 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-mur"><Camera className="size-4" /> Fra Instagram</p><h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.035em] sm:text-6xl">Små pust i hverdagen.</h2></div>
        <div className="flex items-center gap-3"><button type="button" onClick={() => move(-1)} aria-label="Forrige innlegg" className="grid size-12 place-items-center rounded-full border border-ink/25 transition hover:bg-ink hover:text-white"><ArrowLeft className="size-5" /></button><button type="button" onClick={() => move(1)} aria-label="Neste innlegg" className="grid size-12 place-items-center rounded-full border border-ink/25 transition hover:bg-ink hover:text-white"><ArrowRight className="size-5" /></button></div>
      </div>
      <div ref={track} className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
        {posts.map((post, index) => <article key={post.image} className="min-w-[82vw] snap-start overflow-hidden rounded-[1.75rem] bg-paper sm:min-w-[430px] lg:min-w-[calc((100%-2.5rem)/3)]"><div className="relative aspect-[4/5]"><Image src={post.image} alt={post.alt} fill className="object-cover" sizes="(min-width: 1024px) 32vw, 82vw" /></div><div className="p-6"><p className="text-xs font-bold uppercase tracking-[0.2em] text-mur">Innlegg {String(index + 1).padStart(2, "0")}</p><p className="mt-3 text-base leading-7 text-ink/78">{post.text}</p></div></article>)}
      </div>
      <a href={instagramUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm font-semibold transition hover:border-ink">Følg på Instagram <ArrowRight className="size-4" /></a>
    </div>
  </section>;
}
