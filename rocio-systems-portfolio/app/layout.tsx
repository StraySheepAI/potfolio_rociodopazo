import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rocío Dopazo — Systems & Change Architect",
  description: "Systems architecture, IT delivery, organizational transformation and applied AI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
