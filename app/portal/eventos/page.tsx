import { Suspense } from "react";
import { EventExplorer } from "@/components/public/event-explorer";
import { PublicHeading } from "@/components/public/public-heading";

export const metadata = { title: "Eventos esportivos" };
export default function EventsPage() { return <><PublicHeading eyebrow="ESCOLHA SEU PRÓXIMO DESAFIO" title="Tem esporte acontecendo." description="Encontre eventos, confira as datas e descubra como participar." current="Eventos"/><Suspense fallback={<div className="public-container public-section">Carregando eventos…</div>}><EventExplorer/></Suspense></>; }
