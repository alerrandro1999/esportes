# Parauapebas Esporte

Protótipo de frontend em Next.js, React e TypeScript para apresentação de uma plataforma de gestão esportiva municipal à secretaria. Identidade baseada na imagem fornecida da Prefeitura de Parauapebas.

## Executar

```bash
npm install
npm run dev
```

Abra http://127.0.0.1:3000. Para produção local: `npm run build` e `npm start`. Verificação de tipos: `npm run typecheck`.

## Escopo

- Dashboard responsivo com indicadores, gráfico, agenda semanal, competições e distribuição por modalidade.
- Filtro de período nos indicadores, filtro de competições, alternância do gráfico e seleção de dias na agenda.
- Busca de módulos, menu móvel, navegação recolhível e menus de perfil e notificações.
- Exportação local de indicadores demonstrativos para CSV.
- Rotas para eventos, competições, inscrições, atletas, equipes, modalidades, espaços, arbitragem, resultados, relatórios, documentos, configurações, ajuda e portal do cidadão. Cada módulo leva a uma página padrão de desenvolvimento com seu escopo previsto.
- `/eventos/novo` apresenta a rota de criação de evento em desenvolvimento. URLs inexistentes exibem uma tela 404.

Todos os nomes, números, eventos e avisos são fictícios. Não há backend, login real, persistência de cadastros ou envio de dados. As interações usam apenas estado local do React, reiniciado ao recarregar. A fonte utiliza Google Fonts com fallback para fontes do sistema. Os dados estão em `components/dashboard.tsx`; a navegação e o escopo dos módulos estão em `lib/modules.ts`. O layout é compartilhado pelas rotas.

## Portal público

Acesse `/portal` para a área voltada à população, com navegação própria e sem a barra lateral administrativa. O dashboard permanece em `/` e ganhou um atalho para o portal.

- `/portal/eventos`: busca por nome, modalidade ou local; filtros por modalidade, mês e situação.
- `/portal/eventos/[id]`: detalhes, categorias, local, programação e acesso à inscrição quando disponível.
- `/portal/calendario`: calendário mensal navegável, filtro por modalidade e agenda do dia selecionado.
- `/portal/cadastros`: opções de cadastro de atleta, equipe e inscrição em corrida.
- `/portal/cadastros/atleta`, `/portal/cadastros/equipe`, `/portal/cadastros/corrida`: formulários demonstrativos com validação no navegador.
- `/portal/inscricao/[id]`: simulação de inscrição vinculada ao evento. Eventos sem inscrições abertas bloqueiam esse fluxo.
- `/portal/ajuda`: dúvidas frequentes e orientações de participação.

A programação está em `lib/public-events.ts`. As datas de referência são de outubro a dezembro de 2026. O formulário individual demonstra a categoria adulta, com referência etária em 19/10/2026. Nenhum dado de formulário é enviado a serviços ou salvo em armazenamento persistente; a confirmação informa explicitamente que não houve inscrição real. Acesso público aqui significa interface aberta sem login; publicação na internet e backend não fazem parte desta entrega local.
