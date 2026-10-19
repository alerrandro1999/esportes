import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3, MapPin, MoveUpRight, Trophy, Volleyball, Footprints, Goal } from "lucide-react";
import { eventDate, type PublicEvent } from "@/lib/public-events";

export function SportSymbol({ sport, size = 54 }: { sport: string; size?: number }) {
  const Icon = sport === "Corrida" ? Footprints : sport === "Vôlei" ? Volleyball : sport === "Multiesportivo" ? Trophy : Goal;
  return <Icon size={size} strokeWidth={1.15} aria-hidden="true"/>;
}

export function EventArtwork({ event, large = false }: { event: PublicEvent; large?: boolean }) {
  return <div className={`public-event-art art-${event.color} ${large ? "art-large" : ""}`} aria-hidden="true"><span className="event-art-caption">PARAUAPEBAS EM MOVIMENTO</span><div className="event-art-lines"><i/><i/><i/><i/></div><span className="event-art-symbol"><SportSymbol sport={event.sport} size={large ? 112 : 66}/></span><span className="event-art-sport">{event.sport}<MoveUpRight size={large ? 30 : 20}/></span><span className="event-art-star">✦</span></div>;
}

export function EventCard({ event }: { event: PublicEvent }) {
  return <article className="public-event-card"><Link href={`/portal/eventos/${event.id}`} className="event-art-link" aria-label={`Conhecer ${event.title}`}><EventArtwork event={event}/><span className="event-date-stamp"><strong>{eventDate(event.start, { day: "2-digit" })}</strong><span>{eventDate(event.start, { month: "short" }).replace(".", "")}</span></span></Link><div className="public-event-card-content"><div className="event-card-tags"><span className="public-sport-tag">{event.sport}</span><span className={`public-event-status ${event.status === "Inscrições abertas" ? "open" : ""}`}><i/>{event.status}</span></div><h3><Link href={`/portal/eventos/${event.id}`}>{event.title}</Link></h3><p>{event.tagline}</p><div className="event-card-meta"><span><CalendarDays size={14}/>{eventDate(event.start)}{event.end ? ` a ${eventDate(event.end)}` : ""}</span><span><MapPin size={14}/>{event.location}</span></div><div className="event-card-bottom"><span><Clock3 size={13}/>{event.time.replace(":", "h")}</span><Link href={`/portal/eventos/${event.id}`}>Ver evento<ArrowUpRight size={15}/></Link></div></div></article>;
}
