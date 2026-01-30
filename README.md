# Deploy Link via Varcel

## [Link Tugas Module 4](https://milestone-3-dzikriyadi.vercel.app/)

# Minimalist Ecommerce Store

A clean, modern ecommerce platform built with Next.js, featuring a minimalist monochrome design optimized for dark mode. This project showcases a professional UI/UX pattern suitable for product discovery and checkout flows.

## Overview

This ecommerce application demonstrates a full-featured product browsing experience with dynamic detail pages, interactive hero sections, and a focus on simplicity and accessibility. The design philosophy emphasizes:

- **Minimalism** — Clean layouts with plenty of whitespace
- **Monochrome Aesthetic** — Neutral grays and blacks for timeless appeal
- **Dark Mode Ready** — Native support for dark theme without custom colors
- **Responsive Design** — Mobile-first approach for all screen sizes
- **Performance** — Server-side rendering (SSR), Static Site Generation (SSG), and client-side caching

## Features Implemented

### Core Pages & Components

- **Home Page** — Hero section with animated carousel background and fixed overlay text
- **Product Listing** — Grid of product cards with image, title, category, price, and "View Detail" button
- **Product Detail Page** — Comprehensive product view with:
  - Large product image
  - Full description
  - Category badge
  - Quantity selector with +/- buttons
  - Dynamic price calculation
  - Checkout button
  - Product specifications grid
  - Delivery, returns, and warranty info
- **About Page** — SSG-rendered page with project overview and FAQ section
- **Navigation Bar** — Responsive top navigation with dark mode toggle
- **Product Card** — Reusable card component with hover effects

### Interactive Features

- **Image Carousel** — Animated background carousel on hero section with manual controls
- **Dark Mode Toggle** — Seamless theme switching
- **Quantity Selector** — Add/remove quantity with real-time total calculation
- **Responsive Navigation** — Mobile-friendly menu with sheet component
- **Slide Indicators** — Visual feedback for carousel position

### Rendering Strategies

- **SSR (Server-Side Rendering)** — Product detail page fetches from API
- **SSG (Static Site Generation)** — About page pre-rendered at build time
- **CSR (Client-Side Rendering)** — Interactive components with React hooks

## Technologies Used

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **React Version:** 19.2.3
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with custom animations
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/) + custom components
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Utilities:**
  - `class-variance-authority` — CSS class composition
  - `tailwind-merge` — Tailwind class merging
  - `tailwindcss-animate` — Animation utilities
- **TypeScript** — Full type safety

## Getting Started

First, run the development server:

```bash
# Clone and install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page (CSR)
│   ├── about/page.tsx          # About page (SSG)
│   └── product/
│       ├── [id]/page.tsx       # Product detail page (SSR)
│       └── components/
│           ├── ProductCard.tsx
│           ├── ProductDetailPage.tsx
│           └── QuantitySelector.tsx
├── components/
│   ├── HeroPage.tsx            # Hero section with carousel
│   ├── AboutPage.tsx           # About & FAQ content
│   ├── NavigationBar.tsx       # Top navigation
│   ├── ThemeToggle.tsx         # Dark mode toggle
│   └── ui/                     # Shadcn components
└── lib/
    └── utils.ts                # Helper functions
```

## Design Highlights

### Color Palette

- **Background:** `slate-950`, `slate-900`
- **Text:** `white`, `gray-300`, `gray-400`
- **Borders:** `slate-800`, `slate-700`
- **Accents:** White for primary actions

### Typography

- **Headings:** Light weight (300-400) for elegance
- **Body:** Regular weight for readability
- **Tracking:** Increased letter-spacing on uppercase labels

### Spacing & Layout

- Max-width containers for better readability
- Consistent padding/margin scale
- Flexbox & Grid for responsive layouts

## API Integration

This project uses the **Fake Store API** for demonstration:

```
https://api.escuelajs.co/api/v1/products/:id
```

To integrate your own API:

1. Update fetch URLs in `src/app/product/[id]/page.tsx`
2. Adjust type definitions in `src/types/product.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Shopping cart with persistence (Soon)
- [ ] User authentication (Soon)
- [ ] Payment gateway integration (Soon)
- [ ] Order management (Soon)
- [ ] Admin dashboard (Soon)
- [ ] Product search & filtering (Soon)
- [ ] User reviews & ratings (Soon)

## License

Open source. Feel free to use this as a template for your projects.

## Support

For issues or questions, check the [Next.js Documentation](https://nextjs.org/docs).
