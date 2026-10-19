"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Bell, ChevronDown, ChevronRight, Command, Menu, Search, X, PanelLeftClose, Sparkles, Globe } from "lucide-react";
import { modules } from "@/lib/modules";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [popover, setPopover] = useState<"notifications" | "profile" | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const activeModule = modules.find(item => item.slug === pathname.split("/")[1]);
  const filtered = modules.filter(item => item.label.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(query.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "")));

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") { event.preventDefault(); searchRef.current?.focus(); setSearchOpen(true); }
      if (event.key === "Escape") { setMobileOpen(false); setSearchOpen(false); setPopover(null); }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  if (pathname === "/portal" || pathname.startsWith("/portal/")) return <>{children}</>;

  return <div className={`app-shell ${compact ? "sidebar-compact" : ""}`}>
    <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
    {mobileOpen && <button className="sidebar-backdrop" aria-label="Fechar menu" onClick={() => setMobileOpen(false)} />}
    <aside className={`sidebar ${mobileOpen ? "mobile-open" : ""}`} aria-label="Navegação principal">
      <div className="municipal-brand"><Link href="/" aria-label="Prefeitura de Parauapebas — início"><Image src="/prefeitura-parauapebas.png" width={214} height={60} alt="Prefeitura de Parauapebas" priority /></Link><button className="icon-button mobile-close" aria-label="Fechar menu" onClick={() => setMobileOpen(false)}><X size={20} /></button></div>
      <div className="product-brand"><span className="product-symbol"><TrophyMark /></span><div><strong>Parauapebas<span> Esporte</span></strong><small>GESTÃO ESPORTIVA MUNICIPAL</small></div></div>
      <nav className="nav-groups">{["PRINCIPAL", "GESTÃO ESPORTIVA", "ADMINISTRAÇÃO"].map(group => <div className="nav-group" key={group}><p className="nav-label">{group}</p>{modules.filter(item => item.group === group).map(item => <Link key={item.slug} href={`/${item.slug}`} title={compact ? item.label : undefined} aria-current={activeModule?.slug === item.slug ? "page" : undefined} className={`nav-item ${activeModule?.slug === item.slug ? "active" : ""}`} onClick={() => setMobileOpen(false)}><item.icon size={19} strokeWidth={1.7} /><span>{item.label}</span>{item.badge && <b className="nav-badge">{item.badge}</b>}</Link>)}</div>)}</nav>
      <div className="sidebar-bottom"><Link href="/portal" className="public-portal-link"><Globe size={17}/><span>Acessar portal público</span><ArrowUpRight size={14}/></Link><Link href="/ajuda" className="help-link" onClick={() => setMobileOpen(false)}><span className="help-symbol">?</span><span>Precisa de ajuda?<small>Acesse a central de suporte</small></span><ArrowUpRight size={16} /></Link><div className="sidebar-version"><span className="status-dot" />Versão de apresentação <span>v1.0</span></div></div>
    </aside>
    <div className="workspace">
      <header className="topbar">
        <div className="topbar-context"><button className="icon-button desktop-toggle" onClick={() => setCompact(!compact)} aria-label={compact ? "Expandir navegação" : "Recolher navegação"}><PanelLeftClose size={19} /></button><button className="icon-button mobile-toggle" aria-label="Abrir menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(true)}><Menu size={22} /></button><span className="breadcrumb-root">Gestão esportiva</span><ChevronRight size={13} className="breadcrumb-chevron" /><span className="breadcrumb-current">{activeModule?.label ?? "Página"}</span></div>
        <div className="topbar-actions"><div className="global-search"><Search size={17} /><input ref={searchRef} value={query} onChange={event => { setQuery(event.target.value); setSearchOpen(true); }} onFocus={() => setSearchOpen(true)} onBlur={() => setTimeout(() => setSearchOpen(false), 150)} placeholder="Buscar na plataforma..." aria-label="Buscar módulos da plataforma" aria-expanded={searchOpen} aria-controls="search-results" /><kbd><Command size={11} /> K</kbd>{searchOpen && <div id="search-results" className="search-results"><div className="popover-label">{query ? "RESULTADOS DA BUSCA" : "ACESSO RÁPIDO"}</div>{filtered.length ? filtered.slice(0, 6).map(item => <Link key={item.slug} href={`/${item.slug}`} onClick={() => { setQuery(""); setSearchOpen(false); }}><item.icon size={17} />{item.label}<ChevronRight size={14} /></Link>) : <p className="search-empty">Nenhum módulo encontrado.</p>}</div>}</div>
          <span className="topbar-divider" /><div className="popover-anchor"><button className={`icon-button notification-button ${popover === "notifications" ? "selected" : ""}`} aria-label="Notificações: 2 avisos demonstrativos" aria-expanded={popover === "notifications"} onClick={() => setPopover(popover === "notifications" ? null : "notifications")}><Bell size={20} /><i /></button>{popover === "notifications" && <div className="header-popover notifications"><div className="popover-heading">Notificações <span className="demo-small">Demonstração</span></div><Link href="/inscricoes" onClick={() => setPopover(null)}><span className="notice-icon"><UsersMini /></span><div><strong>12 inscrições para revisar</strong><small>Corrida da Cidade · há 15 min</small></div></Link><Link href="/eventos" onClick={() => setPopover(null)}><span className="notice-icon blue"><Bell size={17} /></span><div><strong>O esporte tem encontro marcado</strong><small>Confira os próximos eventos da semana.</small></div></Link><Link href="/notificacoes" className="popover-footer" onClick={() => setPopover(null)}>Ver todas as notificações <ChevronRight size={14} /></Link></div>}</div>
          <div className="popover-anchor"><button className="profile-button" aria-expanded={popover === "profile"} onClick={() => setPopover(popover === "profile" ? null : "profile")}><span className="avatar">AC</span><span className="profile-copy"><strong>Ana Costa</strong><small>Administradora</small></span><ChevronDown size={14} /></button>{popover === "profile" && <div className="header-popover profile-popover"><div className="popover-label">PERFIL DEMONSTRATIVO</div><Link href="/perfil" onClick={() => setPopover(null)}>Meu perfil <ChevronRight size={14} /></Link><Link href="/configuracoes" onClick={() => setPopover(null)}>Configurações <ChevronRight size={14} /></Link></div>}</div>
        </div>
      </header>
      <main id="main-content" tabIndex={-1}>{children}</main>
      <footer className="page-footer"><span>© 2026 Prefeitura de Parauapebas <span className="footer-separator">·</span> Secretaria de Esportes e Lazer</span><span><Sparkles size={12} /> Ambiente de demonstração · Dados fictícios</span></footer>
    </div>
  </div>;
}

function TrophyMark() { return <svg width="23" height="24" viewBox="0 0 24 26" fill="none" aria-hidden="true"><path d="M7 3h10v7a5 5 0 0 1-10 0V3Z" stroke="currentColor" strokeWidth="1.7" /><path d="M7 5H3v4a4 4 0 0 0 4 4M17 5h4v4a4 4 0 0 1-4 4M12 15v6m-5 2h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /><path d="m12 5 1 2 2 .3-1.5 1.5.4 2.2-1.9-1-1.9 1 .4-2.2L9 7.3l2-.3 1-2Z" fill="currentColor" /></svg>; }
function UsersMini() { return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3 20v-3a6 6 0 0 1 12 0v3m2-15a3 3 0 0 1 0 6m4 9v-3a6 6 0 0 0-4-5"/></svg>; }

