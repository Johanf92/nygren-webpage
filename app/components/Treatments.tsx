import { ArrowDown, ArrowUpRight, ChevronDown } from "lucide-react";
import { formatPrice, treatmentCategories } from "../data/treatments";

const cardStyles = [
  "bg-mur text-sand",
  "bg-keramikk text-ink",
  "bg-leire text-ink",
  "bg-tre text-ink",
];

export function Treatments() {
  return (
    <section id="behandlinger" className="bg-sand px-5 py-24 text-ink sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-12 grid gap-5 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-mur">Behandlinger</p>
          <h2 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-[-0.035em] sm:text-6xl">
            Gi deg en bedre hverdag.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {treatmentCategories.map((category, index) => (
            <article key={category.id} className={`flex flex-col rounded-[2rem] p-7 sm:p-10 ${cardStyles[index]}`}>
              <span className="text-sm uppercase tracking-[0.2em]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">{category.name}</h3>
              <p className="mt-5 max-w-xl text-lg leading-8">{category.description}</p>
              {category.longDescription?.length ? (
                <details className="group mt-6 border-t border-current/20 pt-5">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden">
                    <span>
                      <span className="group-open:hidden">Les mer</span>
                      <span className="hidden group-open:inline">Les mindre</span>
                      <span className="sr-only"> om {category.name.toLowerCase()}</span>
                    </span>
                    <ChevronDown aria-hidden="true" className="size-5 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-5 space-y-4 text-base leading-7">
                    {category.longDescription.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </details>
              ) : null}

              <a href={`#priser-${category.id}`} className="mt-8 inline-flex min-h-11 items-center gap-2 self-start border-b border-current pb-1 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-4">
                Se behandlinger og priser <ArrowDown aria-hidden="true" className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TreatmentPrices({ bookingUrl }: { bookingUrl: string }) {
  return (
    <section id="priser" className="bg-paper px-5 py-24 text-ink sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-mur">Behandlinger og priser</p>
          <h2 className="mt-5 font-serif text-5xl leading-[1.05] tracking-[-0.035em] sm:text-6xl">Finn din behandling.</h2>
          <p className="mt-7 text-lg leading-8">Se prisene under, og finn ledige timer i Timma. Er du usikker på hva som passer, kan du ta kontakt med Caroline.</p>
          <p className="mt-5 text-base leading-7">Klassisk massasje og velværemassasje bestilles under «Klassisk massasje» i Timma. Velg ønsket varighet.</p>
        </div>
        <div className="min-w-0">
          {treatmentCategories.map((category, index) => (
            <div id={`priser-${category.id}`} key={category.id} className="scroll-mt-4 border-b border-ink/20 first:border-t">
              <details open={index === 0} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-serif text-3xl">{category.name}</h3>
                  <ChevronDown aria-hidden="true" className="size-5 shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <ul className="divide-y divide-ink/10">
                  {category.services.map((service) => (
                    <li key={`${service.name}-${service.duration ?? ""}`} className="py-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h4 className="text-base font-semibold leading-6">{service.name}</h4>
                          {service.duration && <p className="mt-1 text-sm">{service.duration} minutter</p>}
                        </div>
                        <span className="shrink-0 whitespace-nowrap text-base font-semibold">{formatPrice(service.price)}</span>
                      </div>
                      {service.note && <p className="mt-2 max-w-xl text-sm leading-6 text-muted-ink">{service.note}</p>}
                    </li>
                  ))}
                </ul>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mb-7 mt-3 inline-flex min-h-12 items-center gap-2 rounded-full bg-mur px-6 py-3 text-base font-semibold text-paper hover:bg-mur-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mur">
                  Bestill i Timma <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
