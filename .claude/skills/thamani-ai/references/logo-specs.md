# Thamani Logo Specifications

Technical specifications for the Thamani logo mark and wordmark.

## The Mark

The Thamani logo is three overlapping paths forming a unified shape, representing the
convergence of insight, discipline, and growth.

### Logo Colors

| Path | Hex | Role |
|---|---|---|
| Path 1 (left) | `#0050FF` | Deep Blue — Trust, foundation |
| Path 2 (center) | `#0095FE` | Mid Blue — Clarity, journey |
| Path 3 (right) | `#05D3FF` | Cyan — Possibility, destination |

The three paths overlap to create the brand gradient effect. The colors flow left-to-right
matching the visual metaphor of progress from foundation to possibility.

### SVG Source

The logo SVG contains three `<path>` elements with the fill colors above. The paths are
designed to overlap, creating subtle blend areas that reinforce the gradient feel.

## Approved Variations

| Variation | Background | Logo Colors | Usage |
|---|---|---|---|
| **Full color on white** | `#FFFFFF` | Original 3 colors | Primary — most contexts |
| **Full color on dark** | `#0A0E14` or `#111827` | Original 3 colors | Dark mode, dark sections |
| **Monochrome dark** | Light backgrounds | All paths `#111827` | Single-color printing |
| **Monochrome light** | Dark backgrounds | All paths `#FFFFFF` | Photography overlays |
| **Mark only** | Any approved | Appropriate variant | App icon, favicons, small spaces |
| **Full logo (mark + wordmark)** | Any approved | Appropriate variant | Headers, about pages |

## Sizing

### Minimum Sizes

| Context | Mark Only | Full Logo (mark + wordmark) |
|---|---|---|
| Digital | 32px height | 120px width |
| Print | 10mm height | 30mm width |

### Clear Space

Maintain minimum clear space equal to the width of the smallest logo path on all sides.
No text, icons, or other elements should intrude into this zone.

```
          ┌─────────────────────┐
          │     clear space     │
          │   ┌─────────────┐   │
          │   │             │   │
          │   │    LOGO     │   │
          │   │             │   │
          │   └─────────────┘   │
          │     clear space     │
          └─────────────────────┘
              ↕ = path width
```

## App Icon

The app icon uses the **mark only** variation:
- Rounded corners per platform guidelines (Android adaptive icon, iOS superellipse)
- Background: `#FFFFFF` (light) or `#0A0E14` (dark)
- Mark centered with equal padding on all sides
- No wordmark in the icon

### Favicon

- 32x32px and 16x16px sizes
- Mark only, simplified if needed at 16px
- Background transparent or white

## Logo + Wordmark

When using the full logo with "Thamani" text:
- Font: **Geist** at weight 600 (SemiBold)
- Spacing between mark and wordmark: equal to mark height / 3
- Wordmark color: `neutral-900` (light mode) or `white` (dark mode)
- Mark and wordmark vertically centered

## Prohibited Uses

These are violations — never do these:

1. **Do not stretch or distort** — maintain original aspect ratio
2. **Do not rotate** — the logo should always be upright
3. **Do not apply drop shadows** — the mark stands on its own
4. **Do not add outlines or strokes** — the fill colors are the logo
5. **Do not recolor individual paths** — use only approved variations
6. **Do not add effects** — no glow, emboss, bevel, or 3D transforms
7. **Do not place on busy backgrounds** — use a color block if needed
8. **Do not recreate or approximate** — always use the official SVG/assets
9. **Do not combine with other logos** without explicit brand approval
10. **Do not animate individual paths** — the mark is a single unified shape

## File Formats

| Format | Usage |
|---|---|
| SVG | Web, documentation, scalable contexts |
| PNG (@1x, @2x, @3x) | Mobile assets, email headers |
| PDF | Print materials |
| ICO | Favicon |

All logo assets should be sourced from the official brand asset folder. Do not export
or recreate logos from screenshots or other sources.
