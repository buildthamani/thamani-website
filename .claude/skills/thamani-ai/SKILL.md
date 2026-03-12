---
name: thamani-ai
description: >
  The complete Thamani knowledge base — product strategy, Android architecture, design system,
  and brand identity in one skill. Use this skill whenever doing anything related to Thamani,
  the financial mindfulness app for M-PESA users. This covers: product decisions, feature design,
  UX, gamification, roadmap planning, writing Kotlin/Android code, structuring modules and layers,
  Compose UI, ViewModels, repositories, data sources, choosing colors, typography, spacing,
  theming, dark mode, writing copy, notifications, marketing, brand voice, logo usage, and
  accessibility. Triggers on any mention of Thamani or any task involving the Thamani codebase,
  product, design, or brand — even small things like a button label, a color choice, or where
  to put a new API call. If the user says "Thamani", "thamani", or works on Thamani code,
  this skill applies.
---

# Thamani AI — Complete Knowledge Base

You are the product, engineering, design, and brand guardian for Thamani — a financial
mindfulness app built for M-PESA users in East Africa. This skill is the single source
of truth across all domains.

## Quick Navigation

| Domain | What's Here | Deep Reference |
|---|---|---|
| **Product** | Core problem, mission, guardrails, gamification, roadmap | This file |
| **Android Architecture** | Modules, layers, data flow, UI patterns, naming | `references/architecture.md` |
| **Design System** | Colors, typography, spacing, components, dark mode | `references/theme.md` |
| **Theme Implementations** | Compose, CSS, Tailwind, SwiftUI code | `references/implementations.md` |
| **Brand Identity** | Voice, tone, copy patterns, logo, imagery | `references/brand.md` |
| **Copy Patterns** | Notification templates, onboarding, error states | `references/copy-patterns.md` |
| **Logo Specs** | Sizing, variations, prohibited uses | `references/logo-specs.md` |
| **Architecture Examples** | Full feature scaffold, caching, DI patterns | `references/architecture-examples.md` |

---

## Product

### The Core Problem: "The Financial Fog"

Most personal finance tools fail because they focus on **accounting** rather than **awareness**.
M-PESA users are bombarded with SMS notifications that are hard to track. When money is tight,
users avoid looking — creating an anxiety loop. Thamani breaks this by making the act of
"looking" at your money clear, rewarding, and completely private.

### Mission Pillars

- **Clarity**: Visualization, understanding, and planning capabilities
- **Structure**: Organization, control, and sustainability tools

### Core Functions

- **Illuminate** — Transforms transaction data into actionable insights (spending patterns,
  essentials vs indulgences, savings opportunities)
- **Guide** — Goal-setting tools, progress monitoring, proactive alerts, visual dashboards

### Product Guardrails (The Three Rules)

Every feature must pass all three:

1. **Zero Manual Labor** — If a user has to type a single transaction, the product has failed.
   The local engine handles 99% of categorization instantly.
2. **Insight-First UX** — The home screen shows **answers**, not transactions.
   Not "KES 2,500 on Food" but "You've spent 15% more on Food this week. Tap to see why."
3. **Privacy as a Ritual** — Security is an experience, not a setting. The Privacy Mask makes
   users feel their data is a vault only they can unlock.

### Foundational Principles

1. **Knowledge** — Convert financial data into clear insights for confident decision-making
2. **Simplicity** — Intuitive tools and easy navigation for complex financial tasks
3. **Community** — Build collective success through shared goals and financial literacy
4. **Purpose** — Automate tasks and analyze spending to highlight what matters

### The Gamification Engine

**Awareness Streak:**
- Trigger: Opening the app and confirming uncategorized transactions
- Each day of active categorization = +1
- 7 days → "Weekly Spend-Reflection" report
- 30 days → "Master of Clarity" badge + "Future Forecaster"

**Budgeting Shield:**
- Trigger: Staying under limit for high-velocity categories (Dining, Entertainment)
- Each week the shield isn't broken = streak grows
- Visual evolution: Wood → Bronze → Silver → Gold

### Value Roadmap

| Phase | Feature | User Motivation |
|---|---|---|
| 1. Insight | Categorization & Breakdown | "Where is my money going?" |
| 2. Discipline | Streaks & Budgeting | "I want to stop wasting money." |
| 3. Community | Group Goals & Bill Splitting | "We want to build something together." |
| 4. Wealth | MMF Bridges & Credit Health | "I want my money to work for me." |

### Product Decision Checklist

1. Does it serve Clarity or Structure? If neither, question it.
2. Zero manual labor? Insight-first? Privacy-respecting?
3. Which roadmap phase? Are prerequisites met?
4. Does the copy lead toward "Build Thamani"?
5. Can it reinforce daily engagement through streaks?
6. Designed for M-PESA culture, mobile-first, East African financial realities?

Default to **awareness over accounting** and **insight over information**.

---

## Android Architecture (Summary)

The full architecture reference is in `references/architecture.md`. Extended code examples
are in `references/architecture-examples.md`. Here's the essential overview.

### Module Dependency Graph

```
Application
    |
    v
User Interface (presentation)
    |
    v
  Domain (optional)
    |
    v
   Data
   / \
  v   v
Local   Network
```

Dependencies flow **downward only**. Never upward.

### Quick Decision Guide

| Question | Answer |
|---|---|
| Where does my API call go? | `network-datasource` as a `fun interface` returning `NetworkResult` |
| Where does my Room/SQLite query go? | `local-datasource` as a `fun interface` returning `LocalResult` |
| Where do I combine network + local? | `data` module in a Repository with explicit `CachingStrategy` |
| Where do I combine multiple repositories? | `domain` module (only if truly needed) |
| Where does my ViewModel go? | `user-interface` feature container, marked `internal` |
| Where does my Composable go? | `user-interface` feature presenter |
| What's the only public UI thing? | The `Route` composable |
| Should my entity/DTO be public? | Entities: **no** (`internal`). DTOs: **yes**. Domain models: **yes**. |
| Naming for a datasource? | `{Verb}{Domain}{Module}Datasource` |

### Architecture Violations

Flag these immediately:
1. Leaking library types outside their datasource module
2. UI directly calling a datasource (skipping repository)
3. Public ViewModels or UI models (everything is `internal` except Route)
4. Manual transactions (violates "Zero Manual Labor")
5. Domain layer doing writes (read-only aggregation only)
6. Implicit caching (must use explicit `CachingStrategy`)
7. Fat composables holding ViewModel + complex rendering (split into Screen + Content)

---

## Design System (Summary)

The full theme reference is in `references/theme.md`. Platform implementations (Compose,
CSS, Tailwind, SwiftUI) are in `references/implementations.md`.

### Core Palette (from logo)

| Token | Hex | Usage |
|---|---|---|
| `primary-deep` | `#0050FF` | Primary actions, key CTAs, headers |
| `primary` | `#0095FE` | Default primary, links, active states |
| `primary-bright` | `#05D3FF` | Accents, highlights, progress indicators |

### Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `success` | `#00C853` | Positive amounts, streaks, shields |
| `warning` | `#FFB300` | Budget alerts, approaching limits |
| `error` | `#FF3B30` | Overspend, broken streaks, failures |

### Typography

**Font: Geist** (by Vercel) — primary typeface. **Geist Mono** for money amounts.

| Platform | Primary | Mono | Fallback |
|---|---|---|---|
| Android | `Geist` | `Geist Mono` | `Roboto`, system sans-serif |
| iOS | `Geist` | `Geist Mono` | `SF Pro`, system sans-serif |
| Web | `Geist` | `Geist Mono` | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` |

Money amounts always use `Geist Mono` with `tabular-nums` for aligned digits.

### Key Tokens

- Spacing: 8px base grid, multiples of 4 (4/8/12/16/20/24/32/40/48/64)
- Radius: sm=6, md=12, lg=16, xl=24, full=9999
- Gradients: `gradient-brand` (#0050FF → #0095FE → #05D3FF) at 135deg

### Accessibility

- `primary-deep` on white = **4.6:1** — passes AA for body text
- `primary` on white = **3.1:1** — large text or non-text only
- `primary-bright` on white = **2.1:1** — decorative only, never for text

---

## Brand (Summary)

The full brand reference is in `references/brand.md`. Copy templates in
`references/copy-patterns.md`. Logo specs in `references/logo-specs.md`.

### Brand Tagline

**Build Future. Build Value. Build Clarity. Build Freedom. BUILD THAMANI.**

Use individual fragments contextually: Onboarding → "Build Clarity",
Streak achievement → "Build Freedom", Savings goal → "Build Value", General CTA → "Build Thamani".

### Voice Attributes

| Attribute | What It Means | What It's Not |
|---|---|---|
| **Insightful** | Reveals patterns and meaning in numbers | Data-dumping or jargon |
| **Encouraging** | Nudges toward better habits, never shame | Patronizing or guilt-tripping |
| **Clear** | Short sentences, plain language | Oversimplified or dumbed-down |
| **Trustworthy** | Precise numbers, honest assessments | Cold or robotic |
| **Warm** | Like a knowledgeable friend | Overly casual or slangy |
| **Private** | Treats financial data as sacred | Surveillance-like or invasive |

### Words & Formatting

**Use:** "clarity", "insight", "your money story", "patterns", "Build [X]", "streak", "shield",
"mindful", "KES" (always KES, not Ksh/K/Kshs)

**Avoid:** "budget" as verb → "set a limit", "track" → "understand", "spend less" → "spend smarter",
"alert" → "heads up", "user" → "you", "data" → "your money", "error" → "something went wrong"

**Currency:** KES 2,500 (space after KES, comma thousands). Dates: Mar 12, 2026. Times: 3:42 PM.

### Copy Patterns

- **Insights:** `[Observation]. [Implication or action].`
- **Streaks:** `[Achievement]! [What it unlocks].`
- **Budgets:** `[Status]. [Context without judgment].`
- **Errors:** `[What happened]. [What to do].`
