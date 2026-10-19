import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parauapebas Esporte | Gestão esportiva municipal",
  description: "Protótipo de apresentação do painel de gestão esportiva de Parauapebas. Eventos, atletas e competições em um só lugar.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><AppShell>{children}</AppShell></body></html>;
}
