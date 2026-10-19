import { notFound } from "next/navigation";
import { RegistrationForm } from "@/components/public/registration-form";
import { getPublicEvent, publicEvents } from "@/lib/public-events";

export function generateStaticParams() { return publicEvents.map(event => ({id:event.id})); }
export const metadata = {title:"Inscrição demonstrativa"};
export default async function EventRegistration({params}:{params:Promise<{id:string}>}) { const {id}=await params; const event=getPublicEvent(id); if(!event) notFound(); return <RegistrationForm kind={event.registration === "equipe" ? "equipe" : "corrida"} event={event}/>; }
