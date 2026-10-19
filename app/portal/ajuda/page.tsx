import Link from "next/link";
import { ArrowRight, CircleHelp } from "lucide-react";
import { PublicHeading } from "@/components/public/public-heading";

export const metadata = { title:"Dúvidas frequentes" };
const questions=[
  {title:"Como encontro um evento para participar?",text:"Acesse Eventos e use a busca ou os filtros de modalidade, mês e situação. Na página do evento, você encontra data, local, categoria e programação."},
  {title:"Como faço a inscrição da minha equipe?",text:"Cadastre a equipe na área Participe. Para uma competição específica com inscrições abertas, abra a página do evento e escolha Inscrever minha equipe. O cadastro da equipe e a inscrição na competição são etapas diferentes."},
  {title:"Como me inscrevo em uma corrida?",text:"Escolha uma corrida com inscrições abertas e acesse Quero me inscrever. Você também pode acessar Participe, selecionar Inscrição em corrida e escolher o evento e a distância."},
  {title:"O cadastro de atleta garante minha vaga em eventos?",text:"Não. O cadastro identifica o atleta e suas modalidades de interesse. A participação em cada evento depende da inscrição específica e das condições da competição."},
  {title:"Menores de idade podem participar?",text:"A proposta prevê categorias por faixa etária e participação com responsáveis. Nesta demonstração, o formulário individual está limitado a maiores de 18 anos. Os Jogos Escolares apresentam o fluxo previsto para escolas e responsáveis, ainda sem inscrições abertas."},
  {title:"Os eventos, cadastros e inscrições desta página são reais?",text:"Não. Esta é uma apresentação do frontend da plataforma. Eventos, datas, vagas e programação são fictícios. Os formulários exibem uma confirmação demonstrativa e não enviam nem armazenam informações."},
  {title:"Preciso criar uma conta para consultar o calendário?",text:"Não. A consulta aos eventos, locais, horários e calendário é pública e não exige uma conta nesta proposta."},
  {title:"Como navego pelo calendário?",text:"Use as setas para mudar de mês e selecione um dia. Os dias com marcações têm atividades previstas. O painel ao lado mostra os eventos e o acesso à programação completa. O botão Mês de referência retorna a outubro de 2026."},
];
export default function HelpPage() { return <><PublicHeading eyebrow="INFORMAÇÃO PARA ENTRAR NO JOGO" title="Podemos ajudar?" description="Veja como encontrar eventos e participar das atividades esportivas." current="Dúvidas frequentes"/><section className="public-container public-section public-faq-layout" id="participacao"><aside><span className="public-faq-icon"><CircleHelp size={32} strokeWidth={1.4}/></span><h2>Do primeiro passo<br/> à participação.</h2><p>Reunimos as principais orientações sobre o portal.</p><Link className="public-text-link" href="/portal/eventos">Encontre seu evento<ArrowRight size={16}/></Link></aside><div className="public-faq-list">{questions.map((item,i) => <details key={item.title} open={i === 0}><summary>{item.title}<span>+</span></summary><p>{item.text}</p></details>)}</div></section></>; }
