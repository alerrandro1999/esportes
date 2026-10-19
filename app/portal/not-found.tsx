import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

export default function PublicNotFound() { return <section className="public-container public-form-complete"><span className="public-success-icon"><MapPin size={34}/></span><span className="public-eyebrow">PÁGINA NÃO ENCONTRADA</span><h1>Vamos encontrar outro caminho?</h1><p>Esta página ou evento não faz parte da programação demonstrativa.</p><Link href="/portal/eventos" className="public-button public-button-primary"><ArrowLeft size={16}/>Explorar eventos</Link></section>; }
