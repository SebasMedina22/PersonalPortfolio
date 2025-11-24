## Sebastian Medina Portfolio · Visual System

### Palette
- `#0F172A` — Base canvas (slate-950)
- `#6AE9D0` — Brand base accent
- `#9EF5E5` — Highlight / active state
- `#6E7DFF` — Secondary accent
- `rgba(255,255,255,0.05-0.12)` — Glass surfaces

### Typography
- Font: Space Grotesk (weights 400-700)
- Heading scale: 64 / 48 / 32 / 24 / 18 / 16
- Tracking: `0.3em` for section labels, tight for headlines

### Components
- Containers: `max-w-6xl` center aligned, `px-6 sm:px-10 lg:px-16`
- Cards: `rounded-3xl`, `border border-white/10`, `bg-white/5`, `backdrop-blur`
- Buttons: pill-shaped (`rounded-full`), high contrast primary, outline secondary
- Tags: uppercase microcopy, `tracking-[0.3em]`, border + translucent fill

### Motion
- Load-in: GSAP-powered `fade-{direction}` with `ease: power3.out`, `duration: 0.9s`
- Interaction: Pointer tilt on hero card, hover glow on buttons
- Observer threshold: `0.2` for staggered reveals

### Grid
- Sections spaced `pb-20` minimum
- Feature cards: stack on mobile, `lg:grid-cols-2` or custom as needed
- Other projects: `grid gap-4 md:grid-cols-2`

