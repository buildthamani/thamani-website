# Thamani Theme System

You are the design system guardian for Thamani. Every color, spacing value, and typographic
choice follows this theme. The system is derived from the Thamani logo — three overlapping
paths that form a gradient from deep trust (blue) through clarity (mid-blue) to possibility
(cyan).

## Brand Philosophy

The color system reflects Thamani's mission of financial mindfulness:
- **Deep Blue** — Trust, stability, security (the foundation)
- **Mid Blue** — Clarity, insight, understanding (the journey)
- **Cyan** — Possibility, growth, future (the destination)

## Core Palette

### Primary Colors (from logo SVG)

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `primary-deep` | `#0050FF` | 0, 80, 255 | Primary actions, key CTAs, headers |
| `primary` | `#0095FE` | 0, 149, 254 | Default primary, links, active states |
| `primary-bright` | `#05D3FF` | 5, 211, 255 | Accents, highlights, progress indicators |

### Extended Palette

These are derived from the core trio to fill out the full design system.

| Token | Hex | Usage |
|---|---|---|
| `primary-900` | `#001A66` | Darkest text on light backgrounds |
| `primary-800` | `#002E99` | Heavy emphasis text |
| `primary-700` | `#0042CC` | Section headers |
| `primary-600` | `#0050FF` | Primary actions (= primary-deep) |
| `primary-500` | `#0073FE` | Default interactive elements |
| `primary-400` | `#0095FE` | Links, active states (= primary) |
| `primary-300` | `#38B4FF` | Hover states, secondary accents |
| `primary-200` | `#7DD1FF` | Borders, dividers, tags |
| `primary-100` | `#B8E6FF` | Light backgrounds, cards |
| `primary-50` | `#E6F6FF` | Subtle backgrounds, hover fills |

### Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `success` | `#00C853` | Positive amounts, streaks, shields |
| `success-light` | `#E8F9EF` | Success backgrounds |
| `warning` | `#FFB300` | Budget alerts, approaching limits |
| `warning-light` | `#FFF8E1` | Warning backgrounds |
| `error` | `#FF3B30` | Overspend, broken streaks, failures |
| `error-light` | `#FFEBEE` | Error backgrounds |
| `info` | `#0095FE` | Tips, insights (uses primary) |
| `info-light` | `#E6F6FF` | Info backgrounds (uses primary-50) |

### Neutrals

| Token | Hex | Usage |
|---|---|---|
| `neutral-950` | `#0A0E14` | Primary text (light mode) |
| `neutral-900` | `#111827` | Headings |
| `neutral-800` | `#1F2937` | Body text |
| `neutral-700` | `#374151` | Secondary text |
| `neutral-600` | `#4B5563` | Placeholder text |
| `neutral-500` | `#6B7280` | Disabled text |
| `neutral-400` | `#9CA3AF` | Borders |
| `neutral-300` | `#D1D5DB` | Dividers |
| `neutral-200` | `#E5E7EB` | Card borders |
| `neutral-100` | `#F3F4F6` | Card backgrounds |
| `neutral-50` | `#F9FAFB` | Page background |
| `white` | `#FFFFFF` | Surface |

### Gradients

The logo gradient is the brand signature. Use sparingly for maximum impact.

| Token | Value | Usage |
|---|---|---|
| `gradient-brand` | `#0050FF → #0095FE → #05D3FF` | Hero sections, onboarding, splash |
| `gradient-primary` | `#0050FF → #0095FE` | Buttons (premium), progress bars |
| `gradient-accent` | `#0095FE → #05D3FF` | Streak indicators, achievement cards |
| `gradient-subtle` | `#E6F6FF → #FFFFFF` | Card backgrounds, section fills |

**Gradient direction:** Default is `135deg` (top-left to bottom-right), matching the logo's visual flow.

## Dark Mode

| Light Token | Dark Value | Notes |
|---|---|---|
| `primary-deep` | `#3878FF` | Lightened for dark bg contrast |
| `primary` | `#4DA6FF` | Lightened |
| `primary-bright` | `#33DDFF` | Slightly muted to reduce glare |
| `neutral-950` | `#FFFFFF` | Text flips to white |
| `neutral-900` | `#F3F4F6` | Headings |
| `neutral-50` | `#0A0E14` | Page background |
| `neutral-100` | `#111827` | Card backgrounds |
| `white` | `#1F2937` | Surface |
| `success` | `#4ADE80` | Lightened for dark bg |
| `warning` | `#FBBF24` | Lightened for dark bg |
| `error` | `#FF6B6B` | Lightened for dark bg |

## Typography

### Font Stack

| Platform | Primary | Mono | Fallback |
|---|---|---|---|
| Android | `Geist` | `Geist Mono` | `Roboto`, system sans-serif |
| iOS | `Geist` | `Geist Mono` | `SF Pro`, system sans-serif |
| Web | `Geist` | `Geist Mono` | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` |

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `display-lg` | 32px | 700 | 40px | Hero numbers (balance) |
| `display-md` | 28px | 700 | 36px | Section totals |
| `heading-lg` | 24px | 600 | 32px | Page titles |
| `heading-md` | 20px | 600 | 28px | Section headers |
| `heading-sm` | 16px | 600 | 24px | Card titles |
| `body-lg` | 16px | 400 | 24px | Primary body |
| `body-md` | 14px | 400 | 20px | Default body |
| `body-sm` | 12px | 400 | 16px | Captions, timestamps |
| `label-lg` | 14px | 500 | 20px | Buttons, tabs |
| `label-md` | 12px | 500 | 16px | Tags, badges |
| `label-sm` | 10px | 500 | 14px | Micro labels |
| `mono` | 14px | 500 | 20px | Amounts (KES values) |

**Money amounts** always use `Geist Mono` with `tabular-nums` (font-variant-numeric) for aligned digits.

## Spacing

8px base grid. Everything aligns to multiples of 4.

| Token | Value | Usage |
|---|---|---|
| `space-0` | 0px | — |
| `space-1` | 4px | Tight gaps (icon-to-text) |
| `space-2` | 8px | Inline spacing, small gaps |
| `space-3` | 12px | Default inner padding |
| `space-4` | 16px | Card padding, list gaps |
| `space-5` | 20px | Section gaps |
| `space-6` | 24px | Between cards |
| `space-8` | 32px | Section padding |
| `space-10` | 40px | Page margins |
| `space-12` | 48px | Major section breaks |
| `space-16` | 64px | Hero spacing |

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 6px | Tags, badges, small chips |
| `radius-md` | 12px | Cards, inputs, buttons |
| `radius-lg` | 16px | Bottom sheets, modals |
| `radius-xl` | 24px | Large cards, feature highlights |
| `radius-full` | 9999px | Avatars, circular icons |

## Elevation (Shadows)

| Token | Value | Usage |
|---|---|---|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Cards at rest |
| `shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.08)` | Elevated cards, dropdowns |
| `shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1)` | Modals, bottom sheets |
| `shadow-glow` | `0 0 20px rgba(0,149,254,0.25)` | Active/selected primary elements |

## Component Patterns

### Buttons

| Variant | Background | Text | Border |
|---|---|---|---|
| Primary | `primary` | `white` | none |
| Primary Gradient | `gradient-primary` | `white` | none |
| Secondary | `primary-50` | `primary-deep` | none |
| Outline | transparent | `primary` | `primary-200` |
| Ghost | transparent | `primary` | none |
| Destructive | `error` | `white` | none |

### Cards

- Background: `white` (light) / `neutral-100` (dark)
- Border: `neutral-200` with `radius-md`
- Padding: `space-4`
- Shadow: `shadow-sm` (rest), `shadow-md` (hover/press)

### Streak & Achievement Visuals

| Shield Level | Color | Gradient |
|---|---|---|
| Wood | `#8B6914` → `#C49A2A` | Warm bronze tones |
| Bronze | `#CD7F32` → `#E8A849` | Rich copper |
| Silver | `#9CA3AF` → `#D1D5DB` | Cool neutral |
| Gold | `#FFB300` → `#FFD54F` | Warm gold |

Streak fire icon uses `gradient-accent` (`#0095FE → #05D3FF`).

## Accessibility

- All text meets **WCAG AA** minimum contrast (4.5:1 for body, 3:1 for large text)
- `primary-deep` (#0050FF) on white = **4.6:1** — passes AA for body text
- `primary` (#0095FE) on white = **3.1:1** — use only for large text or non-text elements
- `primary-bright` (#05D3FF) on white = **2.1:1** — decorative only, never for text
- In dark mode, lightened variants maintain equivalent contrast ratios

**Rule:** If you need text in a primary color, use `primary-deep` (or `primary-700`+). Never
use `primary-bright` for readable text.

For platform-specific implementation code (Compose, CSS, Tailwind, Swift), see `implementations.md` (in the same references directory).
