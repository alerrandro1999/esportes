import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PublicHeading({ eyebrow, title, description, current }: { eyebrow: string; title: string; description: string; current: string }) {
  return <div className="public-page-heading"><div className="public-container"><div className="public-breadcrumb"><Link href="/portal">Início</Link><ChevronRight size={12}/><span>{current}</span></div><span className="public-eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div></div>;
}
