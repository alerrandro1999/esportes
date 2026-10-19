import { PublicCalendar } from "@/components/public/public-calendar";
import { PublicHeading } from "@/components/public/public-heading";

export const metadata = { title: "Calendário esportivo" };
export default function CalendarPage() { return <><PublicHeading eyebrow="SEU PRÓXIMO ENCONTRO ESTÁ AQUI" title="Uma agenda cheia de movimento." description="Explore o mês, escolha um dia e confira os eventos da cidade." current="Calendário"/><PublicCalendar/></>; }
