export type Sport = "Corrida" | "Futebol" | "Vôlei" | "Futsal" | "Multiesportivo";
export type PublicEvent = {
  id: string; title: string; sport: Sport; tagline: string; description: string;
  start: string; end?: string; time: string; location: string; address: string;
  status: "Inscrições abertas" | "Em andamento" | "Em breve" | "Inscrições encerradas";
  registration: "individual" | "equipe"; category: string; color: string;
  capacity: string; deadline?: string; dates: string[]; schedule: { time: string; title: string; location?: string }[];
};

export const publicEvents: PublicEvent[] = [
  { id: "corrida-da-cidade", title: "Corrida da Cidade", sport: "Corrida", tagline: "Cada passo, uma nova conquista.", description: "Vista seu tênis e venha descobrir a cidade em um novo ritmo. Um encontro para quem está começando e para quem já tem a corrida como parte da vida, com percursos de 5 km e 10 km.", start: "2026-10-25", time: "06:00", location: "Praça de Eventos", address: "Parauapebas · PA", status: "Inscrições abertas", registration: "individual", category: "Adulto · 18 anos ou mais · 5 km e 10 km", color: "blue", capacity: "600 vagas demonstrativas", deadline: "2026-10-23", dates: ["2026-10-23", "2026-10-25"], schedule: [{ time: "23 out · 09h às 17h", title: "Entrega de kits", location: "Secretaria de Esportes" }, { time: "25 out · 05h30", title: "Concentração e aquecimento" }, { time: "25 out · 06h", title: "Largada dos percursos de 5 km e 10 km" }, { time: "25 out · 08h", title: "Encerramento e premiação" }] },
  { id: "municipal-de-futebol", title: "Campeonato Municipal de Futebol", sport: "Futebol", tagline: "A paixão da cidade entra em campo.", description: "As equipes de Parauapebas se encontram para uma temporada de talento, respeito e paixão pelo futebol. Acompanhe a programação e venha torcer pelo seu time.", start: "2026-10-05", end: "2026-11-29", time: "16:00", location: "Estádio Rosenão", address: "Parauapebas · PA", status: "Em andamento", registration: "equipe", category: "Adulto · Masculino · 18 anos ou mais", color: "green", capacity: "24 equipes demonstrativas", dates: ["2026-10-05", "2026-10-19", "2026-10-20", "2026-10-24", "2026-11-29"], schedule: [{ time: "19 out · 16h", title: "União FC × Atlético Pebas" }, { time: "20 out · 18h", title: "Estrela × Novo Horizonte" }, { time: "24 out · 16h", title: "Bairro da Paz × União FC" }, { time: "29 nov · 16h", title: "Final do campeonato" }] },
  { id: "copa-de-volei", title: "Copa Parauapebas de Vôlei", sport: "Vôlei", tagline: "A próxima conquista é em equipe.", description: "Reúna seu time para uma competição que celebra a energia das quadras. Uma oportunidade para jogar, conhecer outras equipes e fortalecer o vôlei da nossa cidade.", start: "2026-11-07", end: "2026-11-22", time: "09:00", location: "Ginásio Poliesportivo", address: "Parauapebas · PA", status: "Inscrições abertas", registration: "equipe", category: "Adulto · Misto · 18 anos ou mais", color: "amber", capacity: "16 equipes demonstrativas", deadline: "2026-11-03", dates: ["2026-11-07", "2026-11-08", "2026-11-21", "2026-11-22"], schedule: [{ time: "07 nov · 09h", title: "Abertura e primeiros jogos" }, { time: "08 nov · 09h", title: "Fase de grupos" }, { time: "21 nov · 14h", title: "Semifinais" }, { time: "22 nov · 10h", title: "Finais e premiação" }] },
  { id: "jogos-escolares", title: "Jogos Escolares Municipais", sport: "Multiesportivo", tagline: "O futuro do esporte começa aqui.", description: "Estudantes de diferentes escolas se encontram em uma celebração do esporte, da amizade e do trabalho em equipe. A participação será organizada pelas escolas e responsáveis.", start: "2026-11-16", end: "2026-11-27", time: "08:00", location: "Complexo Esportivo", address: "Parauapebas · PA", status: "Em breve", registration: "equipe", category: "Escolar · Sub-17 · Inscrição pelas escolas", color: "purple", capacity: "32 escolas demonstrativas", dates: ["2026-11-16", "2026-11-20", "2026-11-27"], schedule: [{ time: "16 nov · 08h", title: "Cerimônia de abertura" }, { time: "20 nov · 08h", title: "Rodada de modalidades coletivas" }, { time: "27 nov · 15h", title: "Encerramento dos jogos" }] },
  { id: "torneio-de-futsal", title: "Torneio dos Bairros de Futsal", sport: "Futsal", tagline: "Seu bairro, sua torcida, seu time.", description: "Um encontro entre os bairros de Parauapebas para celebrar o futsal. Acompanhe os jogos, reúna sua torcida e venha fazer parte dessa energia.", start: "2026-10-24", end: "2026-10-31", time: "15:00", location: "Ginásio Poliesportivo", address: "Parauapebas · PA", status: "Inscrições encerradas", registration: "equipe", category: "Adulto · Masculino · 18 anos ou mais", color: "green", capacity: "12 equipes demonstrativas", dates: ["2026-10-24", "2026-10-31"], schedule: [{ time: "24 out · 15h", title: "Primeira rodada" }, { time: "31 out · 17h", title: "Final e premiação" }] },
  { id: "corrida-verde", title: "Circuito Verde de Corrida", sport: "Corrida", tagline: "Movimento que faz bem.", description: "Um domingo de esporte e convivência ao ar livre. Prepare-se para um percurso de 5 km, feito para reunir a comunidade e incentivar uma vida mais ativa.", start: "2026-12-06", time: "06:30", location: "Complexo Esportivo", address: "Parauapebas · PA", status: "Em breve", registration: "individual", category: "Adulto · 18 anos ou mais · 5 km", color: "blue", capacity: "300 vagas demonstrativas", dates: ["2026-12-06"], schedule: [{ time: "06 dez · 06h", title: "Concentração dos participantes" }, { time: "06 dez · 06h30", title: "Largada do circuito de 5 km" }] },
];

export const sports: Sport[] = ["Corrida", "Futebol", "Vôlei", "Futsal", "Multiesportivo"];
export function getPublicEvent(id: string) { return publicEvents.find(event => event.id === id); }
export function eventDate(value: string, options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "long" }) {
  return new Intl.DateTimeFormat("pt-BR", { ...options, timeZone: "UTC" }).format(new Date(`${value}T12:00:00Z`));
}
export function normalizeSearch(text: string) { return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); }

export function dayProgram(event: PublicEvent, date: string) {
  const day = date.split("-")[2];
  const month = eventDate(date, { month: "short" }).replaceAll(".", "");
  const activities = event.schedule.filter(item => item.time.startsWith(`${day} ${month}`));
  return {
    time: activities.length ? activities.map(item => item.time.split(" · ")[1]).join(" · ") : event.time.replace(":", "h"),
    label: activities.length === 1 ? activities[0].title : activities.length > 1 ? `${activities.length} atividades na programação` : "Confira a programação completa",
    location: activities[0]?.location ?? event.location,
  };
}
