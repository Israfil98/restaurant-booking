# Dinespot — Restaurant Booking System

A full-stack restaurant booking and menu management app with a customer-facing site and an admin dashboard.

**Live:** [restaurant-booking-5jsz.vercel.app](https://restaurant-booking-5jsz.vercel.app)

## Features

### Customer Side
- **Landing Page** — Hero, about section with stats, featured menu from database, testimonials, CTA banner
- **Menu** — Browse dishes by category (Starters, Mains, Desserts, Drinks) with real-time data from Supabase
- **Book a Table** — Date picker, time slots, party size, special requests with form validation
- **Confirmation** — Formatted booking summary with redirect protection

### Admin Dashboard
- **Auth** — Email/password login with protected routes
- **Bookings Management** — Stats overview, status workflow (Pending → Confirmed / Cancelled), responsive table + card layout
- **Menu Management** — Full CRUD: add, edit, delete items, toggle availability

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite 7
- **Styling:** Tailwind CSS 4 with `@theme` tokens and `oklch` colors
- **Backend:** Supabase (PostgreSQL, Auth, Row Level Security)
- **State:** Zustand (auth), React Hook Form (forms)
- **Routing:** React Router with protected/public route guards
- **Animation:** Framer Motion (staggered entrances, scroll-triggered reveals)
- **Fonts:** Sora + Space Grotesk
- **Deployment:** Vercel with lazy loading and vendor chunk splitting

## Database

**menu_items** — name, description, price, category, available, image_url

**bookings** — customer_name, customer_email, date, time, party_size, status, notes

### RLS Policies
- Menu items: public read, authenticated write
- Bookings: public insert, authenticated read/update

## Getting Started

```bash
# Clone
git clone https://github.com/Israfil98/restaurant-booking.git
cd restaurant-booking

# Install
npm install

# Set up environment
cp .env.example .env.local
# Add your Supabase URL and anon key to .env.local

# Run
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type check + production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
| `npm run preview` | Preview production build |
