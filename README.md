# Hands-on Next.js Contact App

This project is a minimal Next.js application demonstrating a contact form backed by a SQLite database using Prisma.

## Features
- Next.js App Router with TypeScript
- Tailwind CSS styling
- API route saving submissions to SQLite via Prisma

## Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Generate Prisma client and migrate database:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

The app exposes a simple form on the home page. Submissions are persisted to `prisma/dev.db`.
