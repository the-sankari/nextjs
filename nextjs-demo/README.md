# nextjs-demo

A small Next.js 15 demo app that shows an App Router layout and a sample Posts page which fetches data from JSONPlaceholder and displays posts in responsive cards.

This README covers how to run the demo locally, where to find the Posts page, and a few troubleshooting tips.

## Requirements

- Node.js 18+ (Node 20 recommended)
- npm (or pnpm / yarn)

## Quick start (development)

```bash
cd nextjs-demo
npm install
npm run dev
```

The dev server runs with Turbopack by default. Open http://localhost:3000 in your browser. The Posts page is at:

- http://localhost:3000/posts

## Build & run (production)

```bash
cd nextjs-demo
npm run build
npm run start
```

## What to look at

- App entry: `src/app/page.tsx`
- Posts page (cards): `src/app/posts/page.tsx`
- Global styles: `src/app/globals.css`
- Tailwind / PostCSS: `postcss.config.mjs` (project uses Tailwind utility classes in the UI)

## Notes

- The posts route fetches from `https://jsonplaceholder.typicode.com/posts?_limit=10`.
- If you change Tailwind configuration or CSS, restart the dev server to pick up changes.
- The project targets Next.js 15 and uses React 19; ensure your Node version is compatible.

## Troubleshooting

- If `npm run dev` fails with missing packages, re-run `npm install` in the `nextjs-demo` folder.
- If you see Tailwind utility classes not being applied, check `globals.css` and your Tailwind config.

If you'd like, I can start the dev server here and report the terminal logs and the HTTP response for `/posts`.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
