"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Clock3, MapPin } from "lucide-react";
import { publicEvents, eventDate, sports, dayProgram } from "@/lib/public-events";

function dateKey(year: number, month: number, day: number) { return `${year}-${String(month + 1).padStart(2,"0")}-${String(day).padStart(2,"0")}`; }
export function PublicCalendar() {
  const [view, setView] = useState({ year:2026, month:9 });
  const [selected, setSelected] = useState("2026-10-25");
  const [sport, setSport] = useState("Todas");
  const firstWeekday = (new Date(Date.UTC(view.year,view.month,1)).getUTCDay()+6)%7;
  const days = new Date(Date.UTC(view.year,view.month+1,0)).getUTCDate();
  const filtered = publicEvents.filter(event => sport === "Todas" || event.sport === sport);
  const dayEvents = filtered.filter(event => event.dates.includes(selected));
  const monthLabel = eventDate(dateKey(view.year,view.month,1), {month:"long",year:"numeric"});
  function changeMonth(offset:number) {
    const next = new Date(Date.UTC(view.year,view.month+offset,1));
    const year = next.getUTCFullYear(), month = next.getUTCMonth();
    setView({year,month}); setSelected(dateKey(year,month,1));
  }
  return <section className="public-container public-section public-calendar-section"><div className="public-calendar-toolbar"><span><span className="public-calendar-dot"/>Datas com programação</span><label className="public-select"><span className="sr-only">Modalidade no calendário</span><select value={sport} onChange={event => setSport(event.target.value)}><option value="Todas">Todas as modalidades</option>{sports.map(item => <option key={item}>{item}</option>)}</select></label></div><div className="public-calendar-layout"><div className="public-month-card"><div className="public-month-heading"><h2>{monthLabel}</h2><div><button aria-label="Voltar a outubro de 2026" className="public-calendar-today" onClick={() => {setView({year:2026,month:9});setSelected("2026-10-25");}}>Mês de referência</button><button className="icon-button" aria-label="Mês anterior" onClick={() => changeMonth(-1)}><ChevronLeft size={19}/></button><button className="icon-button" aria-label="Próximo mês" onClick={() => changeMonth(1)}><ChevronRight size={19}/></button></div></div><div className="public-month-weekdays">{["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"].map(day => <span key={day}>{day}</span>)}</div><div className="public-month-days">{Array.from({length:firstWeekday},(_,i) => <span className="empty-calendar-day" key={`empty-${i}`}/>)}{Array.from({length:days},(_,i) => {
    const date = dateKey(view.year,view.month,i+1); const events = filtered.filter(event => event.dates.includes(date));
    return <button key={date} className={`${selected === date ? "selected" : ""} ${events.length ? "with-events" : ""}`} aria-label={`${eventDate(date,{day:"numeric",month:"long",year:"numeric"})}, ${events.length} ${events.length === 1 ? "evento" : "eventos"}`} aria-pressed={selected === date} onClick={() => setSelected(date)}><strong>{i+1}</strong><span className="calendar-day-events">{events.slice(0,2).map(event => <span key={event.id} className={`calendar-event-chip chip-${event.color}`}>{event.title}</span>)}{events.length > 2 && <span className="calendar-more">+{events.length-2} evento</span>}</span><span className="calendar-mobile-dots">{events.slice(0,3).map(event => <i key={event.id} className={`dot-${event.color}`}/>)}</span></button>;
  })}</div><div className="calendar-reference-note">Calendário demonstrativo · Programação de outubro a dezembro de 2026</div></div><aside className="public-day-panel"><span className="public-eyebrow">PROGRAMAÇÃO DO DIA</span><h2>{eventDate(selected,{day:"numeric",month:"long"})}</h2><p>{eventDate(selected,{weekday:"long"})} · {view.year}</p><div className="public-day-events">{dayEvents.length ? dayEvents.map(event => { const program=dayProgram(event,selected); return <Link href={`/portal/eventos/${event.id}`} key={event.id} className={`public-day-event day-${event.color}`}><span className="public-sport-tag">{event.sport}</span><h3>{event.title}</h3><p className="public-day-activity">{program.label}</p><span><Clock3 size={13}/>{program.time}</span><span><MapPin size={13}/>{program.location}</span><strong>Ver programação<ArrowRight size={14}/></strong></Link>; }) : <div className="public-day-empty"><CalendarDays size={35} strokeWidth={1.2}/><h3>Um dia para se preparar.</h3><p>Nenhum evento previsto para esta data{sport !== "Todas" ? ` na modalidade ${sport.toLowerCase()}` : ""}. Selecione um dia marcado no calendário.</p><Link href="/portal/eventos">Explorar os eventos<ArrowRight size={14}/></Link></div>}</div></aside></div><p className="public-sample-caption">As marcações indicam dias de jogos ou atividades. Confira os horários na programação de cada evento.</p></section>;
}
