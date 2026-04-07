# Content Hub DESIGN.md

## 1. Visual Theme & Atmosphere
This project uses an Apple-inspired interface language adapted for a movie discovery site. The mood should feel premium, calm, and cinematic rather than flashy or entertainment-blog noisy.

The page should alternate between two scene types:
- dark showcase sections for discovery, immersion, and emphasis
- light information sections for explanation, reading, and navigation

The interface should feel like it is presenting curated film paths, not fighting for attention. Every section should make the content hierarchy clearer.

## 2. Color Palette & Roles
- `#000000`: hero backgrounds, footer, strongest cinematic canvas
- `#1d1d1f`: dark surface, primary dark text, premium dark section base
- `#272729`: elevated dark cards inside dark sections
- `#f5f5f7`: default light section background
- `#ffffff`: highest light surface and inverse text
- `rgba(29, 29, 31, 0.72)`: secondary text on light surfaces
- `rgba(255, 255, 255, 0.76)`: secondary text on dark surfaces
- `#0071e3`: primary CTA color
- `#2997ff`: brighter interactive accent on dark backgrounds
- `#0066cc`: link color on light backgrounds

Rules:
- use blue only for interaction and focus
- keep non-interactive surfaces neutral
- avoid decorative gradients outside hero or dark showcase panels

## 3. Typography Rules
- Prefer `SF Pro Display` / `SF Pro Text` style stacks with Apple platform fallbacks.
- Headings should be tight, dense, and confident.
- Body copy should remain readable and slightly more open.

Hierarchy:
- Hero title: very large, semibold, tight line-height
- Section title: large, semibold, compact
- Card title: medium-large, strong contrast
- Body text: regular weight, readable rhythm
- Meta text: smaller, quieter, but still legible

Tone:
- no playful or exaggerated typography
- no serif-led editorial treatment for primary UI
- use concise headlines and short supporting paragraphs

## 4. Component Stylings
### Hero
- dark cinematic background
- large title, short explanatory copy
- one filled primary pill CTA and one outlined secondary pill CTA
- one supporting image with soft rounded corners

### Navigation
- sticky translucent dark bar
- compact links with pill hover states
- should feel lightweight and not dominate the page

### Panels
- large rounded section containers
- alternate dark and light panels to create rhythm
- content should have generous padding and clear internal grouping

### Cards
- rounded 24px to 28px feel
- soft borders, almost no visible chrome
- hover should lift slightly and feel polished, not bouncy

### Links and Buttons
- primary buttons: filled Apple blue pills
- secondary buttons: transparent or outline pills
- text links: blue and understated
- focus should always be clearly visible

## 5. Layout Principles
- content width should stay centered and controlled
- use alternating panels instead of many nested boxes
- leave generous vertical breathing room between sections
- card groups should read as curated sets, not dense feeds
- imagery should support navigation and mood, not overwhelm text

## 6. Responsive Behavior
- desktop: hero can use two columns
- tablet: grids may shift from 3 columns to 2 columns
- mobile: stack all major grids into one column
- buttons should expand comfortably on small screens
- maintain strong spacing and avoid cramped card layouts

## 7. Do and Don't
Do:
- keep the site feeling curated, premium, and trustworthy
- make discovery paths obvious
- use contrast to separate immersive sections from informational ones
- prioritize readability for AdSense-review-friendly public pages

Don't:
- do not introduce neon, purple-heavy, or gamer-like visual language
- do not make cards look like a news portal or ad-heavy magazine
- do not overuse gradients, shadows, or decorative badges
- do not let interface effects distract from the movie guides themselves
