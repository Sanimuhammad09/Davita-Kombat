---
name: Vigilant Prestige
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#44474e'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#495f82'
  primary: '#001026'
  on-primary: '#ffffff'
  primary-container: '#0b2545'
  on-primary-container: '#778db2'
  inverse-primary: '#b1c7f0'
  secondary: '#1d4ed8'
  on-secondary: '#ffffff'
  secondary-container: '#4069f2'
  on-secondary-container: '#fffbff'
  tertiary: '#2b0001'
  on-tertiary: '#ffffff'
  tertiary-container: '#530003'
  on-tertiary-container: '#ff4840'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b1c7f0'
  on-primary-fixed: '#001c3b'
  on-primary-fixed-variant: '#314769'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001551'
  on-secondary-fixed-variant: '#0039b5'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#93000b'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-xl-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-tactical:
    fontFamily: Montserrat
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system projects unyielding authority, institutional reliability, and technological precision. Engineered for an elite private security and defense consultancy operating across high-stakes corporate, industrial, and diplomatic sectors, the interface conveys executive calm coupled with decisive readiness. 

The aesthetic marries **Corporate / Modern** discipline with **High-Contrast Architectural Structure**. Clean, cool-tinted off-white surfaces create an expansive, tactical field, while deep royal navy foundations anchor key functional blocks. Precision borders and measured micro-shadows communicate an uncompromising standard of operational rigor. The emotional response is one of absolute protection, national-tier capability, and elite institutional competence.

## Colors
The palette balances deep authoritative force with energetic clarity and urgent focal anchors.

- **Primary (`#0B2545` - Royal Navy):** The structural core. Used for main header bars, high-prominence banners, major titles, and solid structural badges. An alternate deep shade (`#134074`) serves as hover states or secondary navy panels.
- **Secondary (`#1D4ED8` - Security Blue):** The kinetic action color. Applied to interactive elements, progress tracking, primary interactive buttons, and focused states.
- **Tertiary (`#DC2626` - Emergency Crimson):** Reserved strictly for critical defense alerts, rapid deployment hotlines, live incident statuses, and emergency response actions. Use with discipline to preserve visual urgency.
- **Neutral Surface Ecosystem:** 
  - Primary Surface: `#FFFFFF` (Pure pristine white)
  - Secondary Canvas Surface: `#F4F6FA` (Tactical light gray)
  - Surface Inset / Well: `#EEF2F8` (Cool off-white)
  - Subtle Dividing Lines: `#E2E8F0` (Structural slate border)
  - Body Text / Neutral Dark: `#0F172A` (Slate black for maximal contrast and readability)
  - Muted Text / Neutral: `#64748B` (Technical label tone)

## Typography
The typographic architecture pairs the chiseled, architectural presence of **Montserrat** with the functional clarity of **Inter**.

- **Headlines & Display (Montserrat):** Set with tight tracking and strong weights (700-800). Section titles and tactical markers should occasionally leverage uppercase styling with `label-tactical` for military-grade precision (e.g., "TACTICAL RESPONSE UNITS", "ARMORED FLEET OPERATIONS").
- **Body & Numerical Readouts (Inter):** Highly legible across varied viewports. Standardized with optical vertical centering and generous line heights to preserve reading comprehension under emergency or critical monitoring contexts.

## Layout & Spacing
The layout relies on a disciplined 12-column responsive grid system engineered for information density and executive clarity.

- **Desktop (1200px+):** 12 columns with a fixed maximum container width of `1280px`, `1.5rem` gutters, and `3rem` outer margin buffers.
- **Tablet (768px - 1199px):** 8 columns with `1.25rem` gutters and `2rem` side margins.
- **Mobile (Below 768px):** 4 columns with `1rem` gutters and `1.25rem` margins. Heavy multi-column tactical matrices collapse into linear vertical stacks.
- **Vertical Spacing Rhythm:** Component spacing strictly adheres to a base-8 scale: micro items (`space-xs`, `space-sm`), mid-tier card internals (`space-md`, `space-lg`), and section blocks (`space-xl` and multipliers thereof).

## Elevation & Depth
Depth in this system is subtle, crisp, and structural, avoiding heavy diffuse shadows to maintain military precision and corporate clarity.

- **Level 0 (Flat / Canvas):** Applied to root page backgrounds (`#F4F6FA`) and embedded panel containers (`#EEF2F8`). No shadow; bounded by `#E2E8F0` hairline borders.
- **Level 1 (Structural Cards & Modules):** Pure white background (`#FFFFFF`) with a hairline border (`1px solid #E2E8F0`) and an authoritative crisp micro-shadow: `0 1px 3px rgba(11, 37, 69, 0.05), 0 1px 2px rgba(11, 37, 69, 0.03)`.
- **Level 2 (Interactive Hover & Active Cards):** Elevated state upon user engagement: `0 4px 12px rgba(11, 37, 69, 0.08), 0 2px 4px rgba(11, 37, 69, 0.04)`, retaining the defined slate perimeter.
- **Level 3 (Overlays, Flight Menus & Emergency Drawers):** Floating elements: `0 12px 28px rgba(11, 37, 69, 0.14), 0 4px 8px rgba(11, 37, 69, 0.06)`, framed by a slightly darker border (`#CBD5E1`) for strict separation.

## Shapes
The shape language uses **Soft** geometry (`roundedness: 1`), embodying controlled engineering, architectural permanence, and corporate trust. 

- Interactive controls (buttons, inputs, status pills) default to `0.25rem` (4px).
- Structural containers, tactical cards, and operational modules use `0.5rem` (8px).
- Modals, prominent hero containers, and alert banners use `0.75rem` (12px).
- Pill-shaped or overly rounded elements are strictly forbidden; rounded shapes must reflect crisp, machined corners.

## Components

- **Buttons:**
  - *Primary (Command):* Solid `#0B2545` with `#FFFFFF` text. Hover shifts to `#134074`. Border-radius 4px, font weight 600, uppercase letter-spacing 0.04em.
  - *Secondary (Tactical Action):* Solid `#1D4ED8` with `#FFFFFF` text. Hover shifts to `#2563EB`.
  - *Critical Action (Emergency / Rapid Call):* Solid `#DC2626` background, `#FFFFFF` text. Hover transitions to `#B91C1C`.
  - *Outline (Corporate):* Transparent background, 1.5px solid `#0B2545`, text in `#0B2545`. Hover background `#EEF2F8`.

- **Cards & Operational Panels:**
  - Background `#FFFFFF`, 1px solid border `#E2E8F0`, corner radius 8px, padding `1.5rem`.
  - Service and credential cards feature a top accent bar (3px height) colored in `#0B2545` (standard) or `#1D4ED8` (featured).

- **Badges & Tactical Status Chips:**
  - *Active / Secure:* Background `#EFF6FF`, border 1px solid `#BFDBFE`, text `#1D4ED8`.
  - *Critical / Live Alert:* Background `#FEF2F2`, border 1px solid `#FECACA`, text `#DC2626`.
  - *Corporate Tier / Verified:* Background `#F1F5F9`, border 1px solid `#CBD5E1`, text `#0B2545`.
  - Radius 4px; uppercase `label-tactical` typography.

- **Form Fields & Search:**
  - Inputs feature `#FFFFFF` fill, 1px solid `#CBD5E1` border, text `#0F172A`, placeholder `#94A3B8`.
  - Focused state: border `#1D4ED8`, subtle focus ring `0 0 0 3px rgba(29, 78, 216, 0.15)`.

- **Checkboxes & Radios:**
  - Square or circular 16px frames, border 1.5px `#94A3B8`.
  - Checked state fills `#0B2545` with crisp white checkmark/dot.

- **Lists & Field Matrices:**
  - Divided by `#E2E8F0` hairline rules.
  - Bulleted specs replace generic dots with custom navy check-shields or squared technical tick markers.

- **Domain-Specific Components:**
  - *Deployment Status Bar:* Pinned upper strip featuring live operational status indicators, control room contact lines, and crisis response trigger buttons.
  - *Personnel / Guard Credential Card:* Standardized portrait card with verified ID badge numbering, security clearance tier chip, and verified licensing micro-icons.