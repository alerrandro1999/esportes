import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

export default function NotFound() {
  return <div className="page-content"><section className="development-card"><span className="development-icon"><MapPin size={40}/></span><div className="eyebrow">PÁGINA NÃO ENCONTRADA</div><h1>Vamos voltar para o jogo?</h1><p>O endereço que você acessou não faz parte desta apresentação.</p><Link className="button button-primary" href="/"><ArrowLeft size={16}/>Voltar ao dashboard</Link></section></div>;
}
