import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nygren Massasje | Behandlinger og priser",
  description: "Massasje, gravidmassasje, barnemassasje, lymfedrenasje, vipper og bryn og hårfjerning hos Caroline Nygren. Se behandlinger og priser, og bestill time i Timma.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body className="antialiased">{children}</body>
    </html>
  );
}
