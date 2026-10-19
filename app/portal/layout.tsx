import type { Metadata } from "next";
import { PublicShell } from "@/components/public/public-shell";
import "./portal.css";

export const metadata: Metadata = { title: { default: "Esporte para todos | Parauapebas Esporte", template: "%s | Parauapebas Esporte" }, description: "Conheça a proposta do portal público de eventos esportivos de Parauapebas. Calendário, modalidades e inscrições demonstrativas para a comunidade." };
export default function PortalLayout({ children }: { children: React.ReactNode }) { return <PublicShell>{children}</PublicShell>; }
