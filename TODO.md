# Pendências

## Formulário "Agendar diagnóstico" não envia leads

- **Onde:** form `data-cta-form` em `src/components/CtaBand.tsx`; handler de submit em `src/layouts/Base.astro` (script no fim do `<body>`).
- **Hoje:** o submit chama `preventDefault()`, esconde o form e mostra a mensagem de agradecimento. Nenhum dado sai do navegador — todo lead é perdido.
- **Decidir antes de implementar:**
  - Canal de destino: e-mail, WhatsApp, CRM ou outro.
  - Se o diagnóstico é gratuito (afeta a copy do CTA).
- **Restrição:** site é estático (Astro `output: "static"`, deploy previsto em Cloudflare Workers Assets, sem adapter). O envio precisa de um serviço externo de formulários ou de uma função/Worker dedicada.
- **Pronto quando:** um envio real chega ao canal escolhido, com validação dos campos e mensagem de erro se o envio falhar.

## Dados pendentes do cliente

Contato (e-mail, telefone/WhatsApp, cidade/UF, redes), CNPJ no rodapé, cases/depoimentos/métricas reais, categorias concretas de equipamentos, logo final.
