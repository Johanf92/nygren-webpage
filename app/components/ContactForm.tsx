"use client";

import { useState, type FormEvent } from "react";
import { caroline } from "../data/caroline";

// Klargjort for e-post. Ingen meldinger lagres eller sendes fra serveren.
// Direkte sending krever en separat, konfigurert skjematjeneste/serverfunksjon.
export default function ContactForm() {
  const [opened, setOpened] = useState(false);
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = `${data.get("message")}\n\nNavn: ${data.get("name")}\nE-post: ${data.get("email")}`;
    window.location.href = `mailto:${caroline.email}?subject=${encodeURIComponent("Henvendelse til Nygren Massasje")}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }
  const field = "mt-2 w-full rounded-xl border border-ink/25 bg-white px-4 py-3 text-ink focus:outline-2 focus:outline-offset-2 focus:outline-mur";
  return <form onSubmit={prepareEmail} className="mt-8 space-y-6">
    <label className="block font-medium" htmlFor="name">Navn<input id="name" name="name" autoComplete="name" required maxLength={100} className={field} /></label>
    <label className="block font-medium" htmlFor="email">E-post<input id="email" name="email" type="email" autoComplete="email" required maxLength={200} className={field} /></label>
    <label className="block font-medium" htmlFor="message">Hva lurer du på?<textarea id="message" name="message" required rows={6} maxLength={2000} aria-describedby="message-help" className={field} /></label>
    <p id="message-help" className="text-sm leading-6 text-muted-ink">Bestill time i Timma. Unngå å skrive sensitive helseopplysninger her.</p>
    <p className="text-sm leading-6 text-muted-ink">Knappen åpner e-postprogrammet ditt med meldingen ferdig utfylt. Du sender den derfra.</p>
    <button type="submit" className="min-h-12 rounded-full bg-mur px-6 py-3 font-semibold text-paper hover:bg-mur-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mur">Åpne e-post med meldingen</button>
    {opened && <p role="status" className="rounded-xl bg-sand p-4 leading-7">Meldingen er ikke sendt fra nettsiden. Send den i e-postprogrammet ditt. Hvis ingenting åpnet seg, kan du kopiere teksten og sende til <a className="underline" href={`mailto:${caroline.email}`}>{caroline.email}</a>.</p>}
  </form>;
}
