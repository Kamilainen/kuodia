# Renewable Energy Landing Page - Development Tasks

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Swiper
- Lucide React
- ESLint
- Prettier
- Husky
- lint-staged

---

# Phase 1 - Project Setup

## Task 1 - Initialize Project

### Objective

Create a new React + TypeScript project.

### Requirements

- Vite
- React 19
- TypeScript
- React Router
- ESLint
- Prettier
- Husky
- lint-staged

### Acceptance Criteria

- Project runs successfully.
- `npm run dev` works.
- `npm run lint` passes.
- `npm run build` succeeds.

---

## Task 2 - Install UI Dependencies

### Install

- Tailwind CSS
- clsx
- lucide-react
- framer-motion
- swiper

### Acceptance Criteria

- All packages installed successfully.
- Tailwind configured and working.

---

## Task 3 - Create Folder Structure

### Create

```text
src/
│
├── assets/
├── components/
├── layouts/
├── pages/
├── hooks/
├── services/
├── constants/
├── data/
├── types/
├── styles/
├── utils/
```

---

# Phase 2 - Design System

## Task 4 - Setup Theme

### Configure

- Colors
- Typography
- Shadows
- Radius
- Container Width
- Breakpoints
- Spacing

### Acceptance Criteria

Reusable design tokens are available.

---

## Task 5 - Create Reusable Components

Create

- Button
- Container
- Section
- Card
- Badge

### Acceptance Criteria

Every component supports props and variants.

---

# Phase 3 - Layout

## Task 6 - Build Main Layout

### Components

- Header
- Main
- Footer

### Acceptance Criteria

Every page uses the MainLayout.

---

# Phase 4 - Header

## Task 7 - Build Header

### Components

- Logo
- Navigation
- Dropdown Menu
- Language Selector
- CTA Button

### Features

- Sticky Header
- Active Menu
- Mobile Menu
- Scroll Shadow

---

# Phase 5 - Hero Section

## Task 8 - Hero Banner

### Components

- Heading
- Subtitle
- Two CTA Buttons
- Background Image

### Animation

- Fade In
- Slide Up

### Images

Use random placeholder images.

Example

```
https://picsum.photos/1600/900
```

---

# Phase 6 - Solution Cards

## Task 9 - Solution Card Component

### Props

- title
- description
- icon
- link

### Data Source

Render using array.

---

## Task 10 - Solution Grid

Display

- 4 solution cards

Responsive

- Desktop
- Tablet
- Mobile

---

# Phase 7 - Statistics

## Task 11 - Statistics Section

### Create StatCard

Props

- icon
- number
- title
- subtitle

Example

- 70%
- 60%
- 3-7 Years
- Tailored
- Local Support

---

# Phase 8 - About Section

## Task 12 - Why Choose Us

### Left

- Heading
- Description
- Checklist
- Button

### Right

- Large random image

---

## Task 13 - Floating Labels

Reusable component.

Examples

- Solar Energy
- Heat Recovery
- Hotel Energy

---

# Phase 9 - Projects

## Task 14 - Project Card

### Components

- Image
- Title
- Description
- Metrics

### Hover

- Scale
- Shadow

---

## Task 15 - Project Carousel

Use

- Swiper

Features

- Navigation
- Responsive
- Infinite Loop

---

# Phase 10 - CTA

## Task 16 - Calculator Banner

### Components

- Icon
- Heading
- Description
- CTA Button

Background

- Gradient

---

# Phase 11 - Footer

## Task 17 - Footer

### Columns

- Logo
- Solutions
- About
- Resources
- Contact

### Bottom

- Copyright
- Privacy Policy
- Terms

---

# Phase 12 - Mock Data

## Task 18 - Mock Data

Create

```text
data/
├── solutions.ts
├── projects.ts
├── statistics.ts
└── footer.ts
```

Images

Use

```
https://picsum.photos
```

or

```
https://images.unsplash.com
```

---

# Phase 13 - Icons

## Task 19

Replace every icon using

- Lucide React

---

# Phase 14 - Animations

## Task 20

Add animations

- Hero
- Cards
- Buttons
- Sections
- Images

Use

- Framer Motion

---

# Phase 15 - Responsive

## Task 21

Optimize

- Desktop
- Laptop
- Tablet
- Mobile

---

# Phase 16 - Loading

## Task 22

Create Skeleton Components

- Hero
- Solution Cards
- Projects

---

# Phase 17 - SEO

## Task 23

Setup

- Title
- Meta Description
- OpenGraph
- Favicon

---

# Phase 18 - Performance

## Task 24

Optimize

- Lazy Images
- Code Splitting
- Dynamic Import

---

# Recommended Build Order

1. Initialize Project
2. Install Dependencies
3. Folder Structure
4. Design System
5. Reusable Components
6. Main Layout
7. Header
8. Hero Section
9. Solution Cards
10. Statistics Section
11. About Section
12. Floating Labels
13. Project Cards
14. Project Carousel
15. CTA Banner
16. Footer
17. Mock Data
18. Icons
19. Animations
20. Responsive Design
21. Skeleton Loading
22. SEO
23. Performance Optimization

---

# Folder Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── Button/
│   ├── Badge/
│   ├── Card/
│   ├── Container/
│   ├── Header/
│   ├── Footer/
│   ├── Hero/
│   ├── SolutionCard/
│   ├── StatCard/
│   ├── ProjectCard/
│   ├── FloatingLabel/
│   ├── CTA/
│   └── Skeleton/
│
├── layouts/
│   └── MainLayout.tsx
│
├── pages/
│   └── Home/
│       └── index.tsx
│
├── data/
│   ├── solutions.ts
│   ├── projects.ts
│   ├── statistics.ts
│   └── footer.ts
│
├── hooks/
├── services/
├── styles/
├── constants/
├── types/
└── utils/
```