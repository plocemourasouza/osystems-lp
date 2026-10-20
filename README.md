# oSystems — site institucional

Site estático da oSystems (consultoria executiva de tecnologia para PMEs). Astro 5 + React 19 + Tailwind v4.

## Rotas

| Rota | Página | View |
|------|--------|------|
| `/` | `src/pages/index.astro` | `src/views/Home.tsx` |
| `/consultoria` | `src/pages/consultoria.astro` | `src/views/Consultoria.tsx` |
| `/equipamentos` | `src/pages/equipamentos.astro` | `src/views/Equipamentos.tsx` |
| `/desenvolvimento` | `src/pages/desenvolvimento.astro` | `src/views/Desenvolvimento.tsx` |

## Estrutura

```
src/
  pages/        rotas (.astro, wrappers finos)
  views/        conteúdo de cada página (React)
  components/   Header, Footer, CtaBand, OrbitMark, Photo, ui…
  layouts/      Base.astro (fontes, meta, header/footer)
  lib/tokens.ts design tokens (cores, tipografia)
  styles/       globals.css
public/uploads/ imagens usadas pelo site
docs/models/    protótipos HTML de copy/marketing (fora do build)
originals/      artes-fonte (PNG) e variantes WebP não usadas
```

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera dist/
npm run preview
npm run lint
npm run typecheck # astro check
```

## Deploy

Saída estática em `dist/`. Docker: `docker compose up --build` serve via nginx em `http://localhost:3000`.
Destino futuro: Cloudflare Workers Assets (sem adapter).
