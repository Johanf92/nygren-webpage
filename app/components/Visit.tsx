import { caroline } from "../data/caroline";

export default function Visit() {
  return <section id="finn-frem" className="bg-sand px-5 py-20 text-ink sm:px-8 lg:px-12">
    <div className="mx-auto max-w-6xl">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-mur">Velkommen til</p>
      <h2 className="mt-4 font-serif text-4xl sm:text-5xl">{caroline.location}</h2>
      <p className="mt-6 max-w-2xl text-lg leading-8">{caroline.locationText}</p>
      <div className="mt-9 grid gap-8 md:grid-cols-2">
        <div><h3 className="font-serif text-2xl">Parkering</h3><p className="mt-3 leading-7 text-muted-ink">{caroline.parking}</p></div>
        <div><h3 className="font-serif text-2xl">Finn frem</h3>
          {(caroline.streetAddress || caroline.postalAddress) && <p className="mt-3 leading-7">{caroline.streetAddress}<br />{caroline.postalAddress}</p>}
          {caroline.directions && <p className="mt-3 whitespace-pre-line leading-7 text-muted-ink">{caroline.directions}</p>}
          {caroline.mapUrl && <a href={caroline.mapUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block py-2 font-semibold text-mur underline underline-offset-4">Åpne kart ↗</a>}
          <a href="/kontakt" className="mt-3 block py-2 font-semibold text-mur underline underline-offset-4">Spørsmål før besøket? Kontakt meg</a>
        </div>
      </div>
    </div>
  </section>;
}
