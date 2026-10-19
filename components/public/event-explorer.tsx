"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { CalendarDays, Search, SlidersHorizontal, X } from "lucide-react";
import { EventCard } from "./event-card";
import { publicEvents, sports, normalizeSearch } from "@/lib/public-events";

export function EventExplorer() {
  const params = useSearchParams();
  const requestedSport = params.get("modalidade") ?? "Todas";
  const [sport, setSport] = useState(sports.some(item => item === requestedSport) ? requestedSport : "Todas");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("Todos os eventos");
  const [month, setMonth] = useState("Todos os meses");
  const filtered = publicEvents.filter(event => (sport === "Todas" || event.sport === sport) && (status === "Todos os eventos" || event.status === status) && (month === "Todos os meses" || event.dates.some(date => date.startsWith(month))) && normalizeSearch(`${event.title} ${event.location} ${event.sport}`).includes(normalizeSearch(query)));
  const reset = () => { setSport("Todas"); setQuery(""); setStatus("Todos os eventos"); setMonth("Todos os meses"); };
  return <section className="public-container public-section event-explorer"><div className="public-filters"><label className="public-search"><Search size={18}/><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Busque um evento, modalidade ou local" aria-label="Buscar eventos"/>{query && <button onClick={() => setQuery("")} aria-label="Limpar busca"><X size={16}/></button>}</label><label className="public-select"><SlidersHorizontal size={16}/><span className="sr-only">Filtrar modalidade</span><select value={sport} onChange={event => setSport(event.target.value)}><option value="Todas">Todas as modalidades</option>{sports.map(item => <option key={item}>{item}</option>)}</select></label><label className="public-select"><CalendarDays size={16}/><span className="sr-only">Filtrar mês</span><select value={month} onChange={event => setMonth(event.target.value)}><option>Todos os meses</option><option value="2026-10">Outubro 2026</option><option value="2026-11">Novembro 2026</option><option value="2026-12">Dezembro 2026</option></select></label></div><div className="public-filter-tabs" aria-label="Filtrar situação do evento">{["Todos os eventos", "Inscrições abertas", "Em andamento", "Em breve", "Inscrições encerradas"].map(item => <button key={item} className={status === item ? "selected" : ""} onClick={() => setStatus(item)} aria-pressed={status === item}>{item}</button>)}</div><div className="public-results-line"><span><strong>{filtered.length}</strong> {filtered.length === 1 ? "evento encontrado" : "eventos encontrados"}</span><Link href="/portal/calendario"><CalendarDays size={15}/>Ver no calendário</Link></div>{filtered.length ? <div className="public-events-grid">{filtered.map(event => <EventCard key={event.id} event={event}/>)}</div> : <div className="public-empty"><Search size={35} strokeWidth={1.3}/><h2>Nenhum evento por aqui.</h2><p>Tente outra modalidade, período ou palavra na busca.</p><button className="public-button public-button-primary" onClick={reset}>Limpar filtros</button></div>}<p className="public-sample-caption">Eventos e informações fictícios para demonstração da plataforma.</p></section>;
}
