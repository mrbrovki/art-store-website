# Art Store Website

An online art store built with **Next.js 13**, **TypeScript**, and **Sass**, powered by the [Pexels API](https://www.pexels.com/api/).

Browse paintings, drawings, and sculptures, view them in a room preview, and add pieces to your cart.

## Live Demo

https://art-store-website.vercel.app

## Tech Stack

- [Next.js 13](https://nextjs.org/) — SSG / SSR
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/) — CSS modules
- [Pexels API](https://www.pexels.com/api/) — artwork images
- [SWR](https://swr.vercel.app/)

## Getting Started

### Prerequisites

- Node.js 16+
- A free [Pexels API key](https://www.pexels.com/api/)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/mrbrovki/art-store-website.git
cd art-store-website

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# Edit .env.local and add your Pexels API key

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable             | Description         |
| -------------------- | ------------------- |
| `ENV_PEXELS_API_KEY` | Your Pexels API key |

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |
