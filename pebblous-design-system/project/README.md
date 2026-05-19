# Pebblous Design System

> 페블러스의 웬만한 발표자료 — Pebblous's general-purpose presentation & product design system.

Pebblous (페블러스, pebblous.ai) is a Korean AI data infrastructure company. Their mission: *"Pebblous Makes Data Tangible"* — make data do its job. The product family covers the full data lifecycle behind an AI model:

| Product | 한국어 | Role |
|---|---|---|
| **Data Clinic** | 데이터 종합병원 | Solution for AI training data — quality diagnostics, synthetic data generation |
| **PebbloScope** | 데이터 커뮤니케이션 도구 | Interactive 3D Data Communication Tool for
visualization and sharing actionable insights |
| **PebbloSim** | 합성데이터 생성 솔루션 | Edge-case augmentation via synthetic data |
| **Data Greenhouse** | 자율 데이터 운영 체계 | Autonomous data operating system |

## Sources

- **Figma** (mounted, read-only): `🍊 Pebblous Design System.fig` — 19 pages including `/Color`, `/Typography`, `/Logo-IP`, `/Button`, `/Navigation`, `/Feedback`, `/Products`, etc. Design tokens and type/color choices in this repo are lifted directly from `/Color/Definition/index.jsx` and `/Typography/Section-1/index.jsx`.
- **Fonts** (user-uploaded, `uploads/*.otf`): Pretendard full family + TT Firs Neue Variable, copied to `fonts/`.
- No codebase or slide deck was provided; UI recreations and slide templates here are designed to the Figma's visual language.

---

## CONTENT FUNDAMENTALS — how Pebblous writes

Pebblous is a **Korean-first** brand. Korean is the primary voice; English is used for product names, headings, and technical terms but never as the primary tone.

- **Tone**: confident, technical, quietly assertive. Not cute, not playful. Feels like a sober research group that happens to ship product.
- **Tense / register**: Korean uses `-ㅂ니다 / -습니다` (formal-polite) in marketing copy, `-요` in product UI. No informal `-야/해`.
- **Pronouns**: Pebblous rarely uses "we" (`저희`) in marketing body copy. Addresses the reader as **당신** only for emphasis; usually just describes the world ("AI가…", "데이터가…").
- **Casing (English)**: Product names stay untranslated. Write **Data Clinic** as two words (never `DataClinic`). *PebbloScope*, *PebbloSim* are `PascalCase`. The diagnostic artifact is **Diagnosis Report** (English, not `진단리포트`). All-caps **only** for UI eyebrow labels (e.g. `OUR PRODUCTS`, `SUMMARY`). Never for sentences.
- **Emoji**: The Figma uses a single orange emoji (🍊) as the file mascot — that's it. Do **not** use emoji in product UI, slides, or marketing copy. Use the P-mark or a pebble motif instead.
- **Length**: Headlines are short (5–12 Korean characters) and often set up a contrast: *"데이터가 제 역할을 해내도록."*. Body is ≤ 2 lines per paragraph.
- **Numbers**: big numbers in **TT Firs Neue** display weight with negative tracking. `57.2M`, `99.4%`, `24/7` — not `57,200,000`.

Examples pulled from the Figma:

- > "AI가 세상을 더 잘 이해하도록, 데이터가 제 역할을 해내도록."
- > "Factory Floor Scene-Text Recognition AI Training Dataset"
- > "Class view > Community 0 > scenetextdl Instance view"

---

## VISUAL FOUNDATIONS

### Colors
See `colors_and_type.css`. The palette is tight on purpose.

- **Primary** — *Pebblous Orange* `#F86825`. The whole brand hinges on this one color. Hovers go darker (`#C64900`, `#923401`); softs go warm-cream (`#FFF0E6`, `#FFF9F5`).
- **Neutrals** — cool grays tuned warm: `#171719` (near-black, not pure), `#70737C` body text, `#F4F4F5` canvas, `#EAEBEC` dividers. Pure white `#FFFFFF` is used; pure black `#000000` is used **inside product chrome only** (the browser-window mocks).
- **Semantic** — Success `#32AC62/#51C57A`, Warning `#DDA200`, Error `#E53935/#CF1D21`, Info `#0066FF`. Paired with very pale tint backgrounds.
- **Accent** — a rarely-used violet `#9747FF` / `#6541F2` appears in the Figma strokes; treat as an *editorial accent*, not a product color.

### Typography
- **Primary** — **Pretendard JP** (Korean-friendly variable humanist sans). SemiBold for UI labels (14/11/13px), Medium for body (16/14px), Bold for display (24/36/40px).
- **Display / numerics** — **TT Firs Neue Variable**. DemiBold/Bold, very tight tracking (`-0.02em` to `-0.04em`), used for large stat numbers (56–180px) and the `Pebblous` wordmark.
- **Fallback** — Pretendard (non-JP variant) for web targets without JP subsets.
- Letter-spacing is **always negative** at display sizes (`-0.025em` ~ `-0.04em`), **zero or slightly positive** for uppercase eyebrow labels (`+0.08em`).

### Spacing & geometry
- Grid-based spacing: **4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80** (rem-or-px, design uses px).
- Section gaps in decks are 64px; card padding 24–32px; tight UI density at 12–16px.
- **Corner radii**: `4 / 8 / 12 / 16 / 24 / 32 / 64 / full`. Cards use 20–32px; buttons 10–12px; big brand surfaces 32–64px (e.g. the Presentation section frame is 64px).

### Backgrounds
- **No gradient walls.** The brand avoids the "bluish-purple gradient" trap entirely. Grounds are flat `#171719`, flat `#F4F4F5`, flat `#F86825`, or flat `#fff`.
- One exception: **radial pebble halos** — a soft orange `radial-gradient` top-right of hero sections, evoking the "pebble" mark. Used sparingly.
- Product showcase frames sit on a **dark photographic background** (`b892b3e9e8dd.png` in Figma — a dark gradient plate with subtle noise). Laptop/browser chrome always has black body + white foreground.
- No hand-drawn illustrations, no repeating textures, no stock photography in UI.

### Animation & interaction
- **Fades and color crossfades**, 150–200ms ease-out. No bouncy springs, no parallax-heavy choreography.
- Hover: **darker** (not lighter) for primary orange; subtle `rgba(112,115,124,0.08)` tint for neutral ghost buttons.
- Press: one step darker + no scale (the brand avoids squish).
- Focus: 3px orange soft-ring (`rgba(248,104,37,0.15)`) + 1px solid orange border.

### Borders & shadows
- **Borders** preferred over shadows for structure. `1px solid #EAEBEC` is the workhorse divider; `1px solid #DBDCDF` is field-strength.
- **Shadows** are quiet and layered — see `preview/shadows.html`. Four levels: hover / card / popover / modal, topping out at `0 16px 48px rgba(0,0,0,0.12)`.
- Inner shadows are not part of the system.

### Transparency & blur
- Transparency is used **inside dark product chrome**: `rgba(255,255,255,0.1)` for secondary surfaces, `rgba(255,255,255,0.05)` for tertiary. Never on light grounds.
- Backdrop blur is not used.

### Imagery
- Imagery is **warm, desaturated, with slight film-grain noise**. When product screenshots appear, they sit on a black/very-dark plate.
- No "AI-generated glossy 3D" renders.

---

## ICONOGRAPHY

Pebblous uses a **custom 20/16/24px icon set** (visible in `/Icon/components/` of the Figma — `check`, `chevronRightTightSmall`, etc.) with these traits:

- **Style**: line + fill hybrid, **1.5px stroke**, rounded joins, no color fills (mono).
- **Sizes**: 16, 20, 24px (component `Tight=True|False, Thick=True|False, Small=True|False`).
- **Color**: always inherits from text (`currentColor`). Default `#171719`, orange `#F86825` for active states.
- No icon font. Icons are individual SVG symbols in Figma.
- **Emoji are not used in product UI.** The 🍊 in the Figma file name is a file-mascot nod (Pebble → Orange Pebble), not a UI asset.
- **Unicode pictographs** (→, ✓, ●) are used sparingly for arrows, checks, and presence dots.

### Current status in this repo
The Figma source is read-only and the icon set was not bulk-exported into `assets/`. Until it is, **this design system substitutes Lucide Icons** (similar stroke weight / rounded joins). Load from CDN when needed:

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

> ⚠️ **Flagged substitution.** Please provide the Pebblous icon SVGs (or point to a public source) so we can replace the Lucide fallback. A handful of logo / product SVGs have been copied to `assets/logos/` already.

---

## Fonts — flagged substitutions
- **Pretendard JP** — the Figma reports `Pretendard JP` as the primary face. User uploaded the standard **Pretendard** family; this system aliases `font-family: "Pretendard"` and expects it to carry Korean + Japanese. If the `-JP` variant is required, please upload it to `fonts/`.
- **TT Firs Neue Variable** — uploaded and in use ✅.

---

## Index — what's in this repo

| Path | What |
|---|---|
| `colors_and_type.css` | Foundation tokens: CSS vars for color scales, type, spacing, radii, shadow, focus. |
| `fonts/` | Pretendard 9-weight + TT Firs Neue Variable. |
| `assets/logos/` | Pebblous wordmark, icon, product logos, pebble icon PNG. |
| `assets/products/` | Laptop-mockup background plate. |
| `preview/` | HTML cards that populate the Design System tab (type, color, spacing, components). |
| `ui_kits/pebblous-web/` | Marketing-site recreation — Header, Hero, Products, Stats, Footer. |
| `slides/` | 7 reusable 1280×720 slide templates (Title, Section, Content, Quote, Metric, Comparison, Closing). |
| `SKILL.md` | Cross-compatible Agent Skill manifest for downloading into Claude Code. |

---

## Production alignment — Data Clinic codebase

`pebblousDev/dataclinic-web-production` (Next.js 14 + MUI Minimal) — the Data Clinic production codebase — has been imported into `src/theme/*`. Key production values confirmed and now reflected in `colors_and_type.css`:

- **Primary**: `#F86825` ✓ (matches Figma). Lighter `#FF9B6A`, lightest `#FFF9F5`, soft `#FFF0E6`, darker `#7F3714`.
- **Body text**: `#585858` (grey-700), secondary `#808080` (grey-500). Cool neutral `#171719` is **Figma-only**, not in prod.
- **Grey ramp** (prod): `F9FAFB / F4F6F8 / DFE3E8 / C4CDD5 / 808080 / 637381 / 585858 / 212B36 / 161C24` — MUI Minimal baseline.
- **Status colors** (note the surprise): `success.main = #78AFF0` **(blue)**, `warning.main = #FFC23F`, `error.main = #F1576A`, `info.main = #00B8D9`. Production overrides MUI defaults; check before switching.
- **Font stack**: `"Pretendard Variable", "Pretendard", …` (not Pretendard JP).
- **Type scale** in prod is lighter than Figma: all headings are `fontWeight: 400`, h1 = 40px (down to 32px mobile), h2 = 26px, body = 16px/14px. `button { fontWeight: 700, textTransform: 'unset' }`.

## CAVEATS (read me!)

1. **Korean fonts vs JP**: Figma says `Pretendard JP` — we've been supplied only `Pretendard`. Rendering of JP-subset characters may fall back to system fonts.
2. **Icons**: No Pebblous icon SVGs are currently in the project. Lucide is used as a stand-in; please upload the real set.
3. **Product screenshots**: The `Products/*_laptop` Figma frames reference raster PNGs (`b892b3e9e8dd.png` etc.) that were not exported. The product dashboards inside `ui_kits/pebblous-web` are illustrative approximations.
4. **No deck template was attached** — the slide designs here were derived from the Figma's general visual language, not a reference deck.
