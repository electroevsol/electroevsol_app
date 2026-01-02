# Frontend Documentation

## Overview

The ELECTRO EVSOL frontend is a modern, responsive React application built with Vite. It provides a user-friendly interface for solar energy services, calculation tools, and company information.

## Table of Contents

- [Project Setup](#project-setup)
- [Architecture](#architecture)
- [Component Structure](#component-structure)
- [Pages Overview](#pages-overview)
- [Styling](#styling)
- [Routing](#routing)
- [Performance](#performance)
- [Development Guidelines](#development-guidelines)

---

## Project Setup

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

Launches dev server at `http://localhost:5173`

### Build

```bash
bun run build
```

Creates optimized production build in `dist/`

### Preview

```bash
bun run preview
```

Previews production build locally

### Linting

```bash
bun run lint
```

Checks code with ESLint

---

## Architecture

### Tech Stack

- **React 19**: UI library with latest features
- **Vite 7**: Next-generation build tool with fast HMR
- **React Router 7**: Client-side routing
- **Tailwind CSS 4**: Utility-first styling
- **Framer Motion 12**: Smooth animations
- **Heroicons**: Professional SVG icons

### Key Features

- **Server-Side Rendering Ready**: Can be adapted for SSR
- **Code Splitting**: Automatic route-based code splitting
- **CSS-in-JS**: Tailwind utility classes
- **Component Library**: Reusable UI components
- **Animation Framework**: Framer Motion for smooth transitions

---

## Component Structure

### Directory Organization

```
src/
├── components/
│   ├── about/
│   │   ├── FounderSection.jsx      # Team/founder information
│   │   ├── HeroAbout.jsx            # About page hero section
│   │   ├── Stats.jsx                # Company statistics display
│   │   └── Values.jsx               # Company values/mission
│   │
│   ├── calculator/
│   │   ├── CalculatorResults.jsx    # Results display component
│   │   └── EssentialDetails.jsx     # Input form component
│   │
│   ├── common/
│   │   ├── CallToAction.jsx         # CTA sections
│   │   ├── LoadingSpinner.jsx       # Loading indicator
│   │   └── ProcessStepsVertical.jsx # Vertical process display
│   │
│   ├── contact/
│   │   ├── ContactForm.jsx          # Email form
│   │   ├── ContactHero.jsx          # Contact page hero
│   │   ├── ContactInfoCards.jsx     # Contact info display
│   │   └── MapSection.jsx           # Location map
│   │
│   ├── home/
│   │   ├── Card.jsx                 # Reusable card component
│   │   ├── ContactZone.jsx          # Contact CTA zone
│   │   ├── Hero.jsx                 # Home page hero
│   │   └── ServiceCard.jsx          # Service showcase card
│   │
│   ├── layout/
│   │   ├── Footer.jsx               # Site footer
│   │   └── Navbar.jsx               # Navigation bar
│   │
│   ├── services/
│   │   ├── FeatureGrid.jsx          # Feature showcase
│   │   ├── ProcessSteps.jsx         # Process flow display
│   │   └── ServiceHero.jsx          # Services page hero
│   │
│   └── ui/
│       └── Button.jsx               # Reusable button component
│
├── pages/
│   ├── Home.jsx                     # Home page
│   ├── SolarCalculator.jsx          # Calculator page
│   ├── SolarService.jsx             # Services page
│   ├── About.jsx                    # About page
│   └── Contact.jsx                  # Contact page
│
├── App.jsx                          # Root component
├── main.jsx                         # Entry point
└── index.css                        # Global styles
```

### Component Types

#### Layout Components

- **Navbar**: Sticky navigation with menu
- **Footer**: Site footer with links and info

#### Page Components

- Full-page containers
- Combine multiple sub-components
- Handle routing-specific logic

#### Feature Components

- Organized by feature area (home, services, etc.)
- Reusable within and across pages
- Manage their own state

#### Common Components

- Used across multiple pages
- Generic functionality (loading, CTA, etc.)
- Highly reusable

#### UI Components

- Basic building blocks (Button, Card, etc.)
- No dependencies on page context
- Fully customizable via props

---

## Pages Overview

### Home Page (`pages/Home.jsx`)

**Purpose**: Landing page with service overview
**Key Sections**:

- Hero section with main value proposition
- Service cards highlighting offerings
- Features and benefits
- Call-to-action zones
- Contact section

**Components Used**:

- `Hero` - Main banner
- `ServiceCard` - Service showcase
- `ContactZone` - CTA section
- `CallToAction` - Additional CTAs

### Solar Calculator (`pages/SolarCalculator.jsx`)

**Purpose**: Interactive tool for energy calculations
**Features**:

- Input form for user details
- Real-time calculations
- Results display with estimates
- Savings projection

**Components Used**:

- `EssentialDetails` - Input form
- `CalculatorResults` - Results display
- `LoadingSpinner` - Loading state

### Solar Service (`pages/SolarService.jsx`)

**Purpose**: Detailed service information
**Sections**:

- Service overview and benefits
- Implementation process steps
- Feature showcase
- Testimonials/reviews

**Components Used**:

- `ServiceHero` - Hero section
- `ProcessSteps` - Process flow
- `FeatureGrid` - Feature showcase

### About Page (`pages/About.jsx`)

**Purpose**: Company information and team
**Sections**:

- Company mission and values
- Team information
- Statistics and achievements
- Founder information

**Components Used**:

- `HeroAbout` - Hero section
- `Values` - Company values
- `Stats` - Company statistics
- `FounderSection` - Team info

### Contact Page (`pages/Contact.jsx`)

**Purpose**: Contact and inquiry form
**Sections**:

- Contact hero section
- Contact form
- Contact information cards
- Location map

**Components Used**:

- `ContactHero` - Hero section
- `ContactForm` - Email form
- `ContactInfoCards` - Info display
- `MapSection` - Location map

---

## Styling

### Tailwind CSS

#### Configuration

- **Utility-first approach**: Classes for styling
- **Responsive design**: `sm:`, `md:`, `lg:`, `xl:` prefixes
- **Dark mode ready**: Can be enabled in tailwind config
- **Custom theme**: Extended colors and spacing

#### Common Patterns

```jsx
// Responsive layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// Flex layouts
<div className="flex items-center justify-between gap-6">

// Spacing
<div className="p-6 md:p-8 lg:p-10">

// Text styles
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
```

### CSS Organization

- **Global styles**: `index.css`
- **Component styles**: Inline Tailwind classes
- **Animations**: Framer Motion components
- **Custom CSS**: Use `clsx` and `tailwind-merge` for conditional classes

---

## Routing

### Routes Configuration

```javascript
// App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/calculator" element={<SolarCalculator />} />
  <Route path="/services" element={<SolarService />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<Home />} /> // Fallback
</Routes>
```

### Navigation

- **Sticky Navbar**: Always visible for navigation
- **ScrollToTop**: Auto-scroll on route change
- **Link Component**: Use `<Link>` from React Router

```jsx
import { Link } from "react-router-dom";

<Link to="/calculator" className="...">
  Open Calculator
</Link>;
```

---

## Performance

### Optimizations

1. **Code Splitting**: Automatic per route
2. **Lazy Loading**: Routes loaded on demand
3. **Image Optimization**: Use modern formats
4. **CSS Minification**: Tailwind purges unused styles
5. **Bundle Analysis**: `npm run build` shows metrics

### Best Practices

- Minimize re-renders with memoization
- Use `Suspense` for async boundaries
- Optimize animations with GPU-accelerated properties
- Lazy load heavy components

### Metrics to Monitor

- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- Time to Interactive (TTI)

---

## Development Guidelines

### Component Creation

```jsx
// Basic component template
import { memo } from "react";

const MyComponent = ({ title, description, ...props }) => {
  return (
    <div className="...">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default memo(MyComponent);
```

### State Management

- Use **React Hooks** for component state
- Use **Context API** for global state if needed
- Keep state as local as possible

### Props Convention

```jsx
// Prop types pattern
const Button = ({
  children, // Main content
  variant = "primary", // Style variant
  size = "md", // Size option
  disabled = false, // Disabled state
  onClick, // Event handler
  className = "", // Additional classes
  ...props // Rest props
}) => {
  // Implementation
};
```

### Common Patterns

**Conditional Rendering**:

```jsx
{
  isLoading && <LoadingSpinner />;
}
{
  error && <ErrorMessage error={error} />;
}
{
  data && <DataDisplay data={data} />;
}
```

**Form Handling**:

```jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};
```

**API Calls**:

```jsx
import { useEffect, useState } from "react";

const [data, setData] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/endpoint");
      setData(await response.json());
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  fetchData();
}, []);
```

### Naming Conventions

- Components: `PascalCase` (e.g., `MyComponent.jsx`)
- Files: Match component name
- Functions: `camelCase` (e.g., `handleClick`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_WIDTH`)
- Classes: `camelCase` for conditions

### Code Style

- Use ES6+ features
- Prefer functional components
- Keep components small and focused
- Extract reusable logic to utilities
- Comment complex logic

### Testing

- Create `.test.js` files alongside components
- Use React Testing Library
- Test user interactions, not implementation
- Aim for high coverage on critical paths

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Troubleshooting

### Common Issues

**Port 5173 Already in Use**

```bash
npm run dev -- --port 3000
```

**Hot Module Replacement Not Working**

- Clear `.vite` cache
- Restart dev server

**Build Fails**

```bash
rm -rf node_modules dist
npm install
npm run build
```

**ESLint Errors**

```bash
npm run lint -- --fix
```

---

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)

---

**Last Updated**: January 1, 2026
