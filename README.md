# nextjs-demo

A small Next.js 15 demo app (inside the `nextjs-demo` folder) that showcases a simple app router structure and a Posts page which fetches example posts from JSONPlaceholder and displays them in responsive cards.

This repository contains the demo app at `nextjs-demo/`. Use the instructions below to run the app locally.

## Requirements

- Node.js 18 or later (Node 20 recommended)
- npm (or pnpm/yarn)

## Install dependencies

Open a terminal at the repository root and install the dependencies for the demo app:

```bash
cd nextjs-demo
npm install
```

If you prefer pnpm or yarn, run `pnpm install` or `yarn` instead.

## Run the development server

Start the Next.js development server (the project uses Turbopack by default):

```bash
npm run dev
```

Open your browser to http://localhost:3000 to view the app. The Posts page is available at:

- http://localhost:3000/posts

## Build and start (production)

To build and serve a production build locally:

```bash
npm run build
npm run start
```

## Notes

- The demo fetches posts from `https://jsonplaceholder.typicode.com/posts?_limit=10` in the `posts` route.
- The UI uses Tailwind CSS utility classes. If you add or change Tailwind configuration, restart the dev server.
- If you run into issues, run `npm install` again and ensure Node.js is up to date.

## Where to look

- App entry: `nextjs-demo/src/app/page.tsx`
- Posts page: `nextjs-demo/src/app/posts/page.tsx`
- Tailwind config: `nextjs-demo/postcss.config.mjs` and project-level `tailwind.config.*` (if present)

If you want me to open the app in a browser or start the dev server for you, tell me and I'll run it in the terminal and report back the logs.



### Error handling
```
Git subtree folder containg gitlink

# 1) make a safety branch
git switch -c fix/convert-nextjs-demo-to-subtree

# 2) remove the gitlink entry from the index (keeps working tree)
git rm --cached -r nextjs-demo

# 3) add the folder contents as normal tracked files
git add nextjs-demo

# 4) commit
git commit -m "Convert nextjs-demo submodule/gitlink to normal tracked folder"

# 5) push to remote (push branch or merge to main)
git push origin HEAD
```