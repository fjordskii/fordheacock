# fordheacock.com

Personal site — AI software consulting. Monochrome ASCII terminal aesthetic;
the hero is a live Three.js render of the moon converted to ASCII glyphs on
the GPU (no readPixels), with a committed static frame as the no-WebGL /
reduced-motion / loading fallback.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Connected to Vercel project `fjordskiis-projects/fordheacock`.

```bash
npx vercel deploy --prod        # ships to fordheacock.vercel.app
```

## Domain (finish last)

`fordheacock.com` was available at $11.25/yr as of 2026-08-26:

```bash
npx vercel domains buy fordheacock.com        # prompts for ICANN contact info
npx vercel domains add fordheacock.com fordheacock   # attach to this project
```

## Editing copy

All copy lives in `lib/content.ts`; identity/contact in `lib/site.ts`.
Design rules and the judge-panel history are in `PLAN.md`.
