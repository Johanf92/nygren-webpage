# Nygren Massasje

Nettsiden til Nygren Massasje, med innholdsoppdateringen fra 4. oktober 2026.
React, Next.js, TypeScript og Tailwind CSS.

## Status ved import

Kildekoden er overført fra det opplastede prosjektet og siste oppdateringspakke.
**Bildefilene gjenstår i GitHub.** Legg filene fra `nygren-bilder.zip` i
`public/images/` for at logo, portrett og eksempelinnlegg skal vises.
Pakken er levert separat i samtalen. Ingen uverifiserte bildefiler er lagt inn.

Forventede filer: `logo-full.webp`, `caroline-hero.webp`,
`caroline-portrait.webp`, `relax3.webp`, `relax7.webp`, `relax9.webp`.

Etter at bildepakkens zip-fil er lagt i prosjektroten:

```sh
unzip -o nygren-bilder.zip
git add public/images
git commit -m "Legg til logo og bilder"
git push
```

## Kjør lokalt

Bruk Node.js 22.13 eller nyere. Klon repoet til en NY mappe, slik at den gamle
prosjektmappen beholdes som sikkerhetskopi.

```sh
git clone https://github.com/Johanf92/nygren-webpage.git
cd nygren-webpage
npm install
npm run dev
```

Åpne `http://localhost:5173`. Miljøfilen er valgfri: lenkene har standardverdier.
For egne lenker, kopier `.env.example` til `.env.local` og fyll ut verdiene.
Ikke legg tilgangsnøkler eller andre hemmeligheter i Git eller i variabler som
starter med `NEXT_PUBLIC_`.

```sh
npm run typecheck
npm run build
npm start
```

Dette repoet bruker vanlig Next.js-oppstart i stedet for den gamle
forhåndsvisningsmotoren (Vinext/Cloudflare/Sites). Den gamle zip-filen manglet
`build/sites-vite-plugin`, som den tidligere oppstarten importerte.
Ubrukte generator-komponenter og lokal verktøydata er derfor ikke med.
Top-level pakkeversjoner er beholdt fra originalprosjektet og satt eksplisitt.
`npm install` lager en `package-lock.json`; legg den til i Git etter en vellykket
installasjon, slik at fremtidige installasjoner kan bruke `npm ci`.

## Her redigeres innholdet

| Fil | Innhold |
| --- | --- |
| `app/page.tsx` | Forside, fast toppmeny, hero, knapper og footer |
| `app/components/Treatments.tsx` | Behandlingskort, Les mer og prisliste |
| `app/data/treatments.ts` | Behandlingstekster, priser og varigheter |
| `app/data/caroline.ts` | Om Caroline, kontakt og besøksinformasjon |
| `app/components/InstagramCarousel.tsx` | Foreløpige eksempelinnlegg |
| `app/kontakt/page.tsx` | Kontaktside |
| `app/globals.css` | Farger og globale stiler |

## Ikke ferdig tilkoblet

- Instagram viser fortsatt eksempelinnlegg, ikke en automatisk feed.
- Gavekortknappen bruker bookinglenken inntil `NEXT_PUBLIC_GIFTCARD_URL` er satt.
- Kontaktskjemaet åpner kundens e-postprogram. Det sender ikke fra serveren.
- Adresse, kartlenke, parkering og utdanning må bekreftes med Caroline.
- Behandlingsteksten er et kundelevert utkast, ikke faglig verifiserte påstander.
  Se `NYGREN-OPPDATERING-2026-10-04.md` for publiseringssjekken.

Opplasting til GitHub publiserer ikke nettsiden til domenet. Ingen automatisk
deploy eller Instagram-integrasjon er lagt til i denne importen.

## Kontroller

TS/TSX-syntaks og de 22 prisene/varighetene er kontrollert mot den opplastede
versjonen. Full installasjon, applikasjonsbygging og nettlesertest er ikke
utført i denne overføringen. Kjør kommandoene over etter at bildene er lagt inn.
