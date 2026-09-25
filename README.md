# Music School Website

A modern, responsive music learning platform built with **Next.js**, **TypeScript**, and **Tailwind CSS v4** — featuring animated UI components, course listings, live webinars, and a contact page, all wrapped in a sleek dark theme.

---

##  Features

-  **Course Catalog** — Browse all music courses (Guitar, Drums, Vocals, Music Theory, Production, Orchestral Arranging) with pricing, instructor info, and duration.
-  **Featured Courses Section** — Highlighted courses displayed in a responsive animated grid.
-  **3D Interactive Course Cards** — Hover-tilt course cards with smooth motion effects.
-  **Live Webinars** — Expandable webinar cards with instructor details and registration links, powered by Framer Motion's `layoutId` for smooth open/close transitions.
-  **Testimonials** — Auto-scrolling infinite testimonial carousel from students.
-  **Sticky Scroll Reveal** — "Why Choose Us" section with scroll-linked content reveal.
-  **Contact Page** — Styled contact form with an animated background beam effect.
-  **Light/Dark Mode Support** — Fully themed using Tailwind's `dark:` variants.
-  **Route-Level Loading States** — Custom animated loaders per page using Next.js's `loading.tsx` convention.
- 📱 **Fully Responsive** — Optimized layouts across mobile, tablet, and desktop breakpoints.

---

##  Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| UI Components | Custom + [Aceternity UI](https://ui.aceternity.com/)-inspired components |
| Utility | `clsx`, `tailwind-merge` (via `cn()` helper) |

---

##  Project Structure

```
app/
├── components/
│   ├── ui/                    # Reusable animated UI components
│   │   ├── background-gradient.tsx
│   │   ├── background-beams.tsx
│   │   ├── card-hover-effect.tsx
│   │   ├── 3d-card.tsx
│   │   ├── sticky-scroll-reveal.tsx
│   │   ├── navbar-menu.tsx
│   │   └── loader.tsx
│   ├── HeroSection.tsx
│   ├── FeaturedCourses.tsx
│   ├── Navbar.tsx
│   └── WhyChooseUs.tsx
├── courses/
│   ├── page.tsx                # All courses page
├── webinars/
│   ├── page.tsx                # Live webinars page
├── contact/
│   ├── page.tsx                # Contact form page
│   └── loading.tsx
├── data/
│   └── music_data.json         # Course data
├── utilities/
│   └── utils.ts                # cn() helper (clsx + tailwind-merge)
├── hooks/
│   └── use-outside-click.ts
├── globals.css
└── page.tsx                    # Home page
```

---

##  Getting Started

### Prerequisites
- Node.js 18+ installed
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/music-school-website.git
cd music-school-website

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

##  Key Dependencies

```bash
npm install framer-motion clsx tailwind-merge
```

---

##  Design System

- **Color palette:** Neutral/zinc grayscale for a clean, non-tinted dark theme (avoiding `slate`'s blue undertone).
- **Buttons:** Rounded pill-style buttons with subtle hover scale + shadow transitions.
- **Cards:** Gradient-bordered cards (`BackgroundGradient`) with consistent grid-based sizing — no fixed `max-w` caps that break responsive width.
- **Custom animations:** Defined directly in `globals.css` under `@theme inline` (Tailwind v4 native animation utilities), including:
  - `animate-spotlight` — fade/scale-in spotlight effect
  - `animate-scroll` — infinite horizontal scroll for testimonials

---

## 🗺️ Roadmap

- [ ] Wire up contact form submission (API route / email service)
- [ ] Add user authentication for course enrollment
- [ ] Add individual course detail pages (`/courses/[slug]`)
- [ ] Add individual webinar detail pages (`/webinars/[slug]`)
- [ ] Add payment integration for paid courses/webinars
- [ ] Add admin dashboard for managing courses and webinars

---

##  Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

---

##  License

This project is open source and available under the [MIT License](LICENSE).

---

##  Author

**Muhammad Anas**
Front-End Web Developer | [GitHub](https://github.com/Muhammadanas311)