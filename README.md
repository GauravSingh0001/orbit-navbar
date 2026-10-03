# @gskit/orbit-navbar

A floating split-arc glassmorphism React navbar with spring-animated pods, a rotating circular logo slot, and a built-in palette system.

[![npm](https://img.shields.io/npm/v/@gskit/orbit-navbar)](https://www.npmjs.com/package/@gskit/orbit-navbar)
[![license](https://img.shields.io/github/license/GauravSingh0001/orbit-navbar)](./LICENSE)
[![react peer](https://img.shields.io/npm/dependency-version/@gskit/orbit-navbar/peer/react)](https://react.dev)

---

## Features

- 🌀 **Split-arc pods** — SVG concave-cap geometry that perfectly cradles the logo circle
- 🍎 **Liquid glass** — `backdrop-filter` frost with a sheen gradient overlay
- 🌿 **Spring animations** — pods emerge with a satisfying overshoot; retract with a blur fade
- 🎨 **Palette system** — 6 built-in themes + fully custom `palette` prop (defaults to `OceanTeal`)
- ♿ **Accessible** — semantic `<nav>`, `aria-label`, `focus-visible` rings, `prefers-reduced-motion`
- 📱 **Responsive** — tightens automatically on screens ≤ 640 px
- 🌙 **Dark mode** — automatic via `prefers-color-scheme` when no palette is set
- 🔷 **TypeScript-ready** — ships full `.d.ts` declarations

---

## Installation

```bash
npm install @gskit/orbit-navbar
```

### Import the CSS

```js
import '@gskit/orbit-navbar/styles';
```

Add this once — in your root `App.jsx`, `_app.tsx`, or global stylesheet.

---

## Quick start

```jsx
import { OrbitNavbar } from '@gskit/orbit-navbar';
import '@gskit/orbit-navbar/styles';

export default function App() {
  return (
    <OrbitNavbar
      logoContent={<img src="/logo.png" alt="My brand" />}
      logoHref="/"
    />
  );
}
```

---

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `logoContent` | `ReactNode` | `null` | Node rendered in the circular logo slot. Pass `<img>`, SVG, icon, or text. |
| `logoHref` | `string` | `'#'` | `href` for the logo anchor. |
| `logoAriaLabel` | `string` | `'Return to top'` | `aria-label` for the logo link. |
| `leftLinks` | `NavLink[]` | see below | Links for the left pod. |
| `rightLinks` | `NavLink[]` | see below | Links for the right pod. |
| `scrollThreshold` | `number` | `50` | Scroll distance (px) before pods retract. |
| `palette` | `PalettePreset \| OrbitPalette \| null` | `'OceanTeal'` | Colour palette preset name (e.g. `'DuskRose'`), preset object, or custom palette. |
| `rotateOnScroll` | `boolean` | `true` | Whether the logo rotates 360° on scroll retraction. |
| `className` | `string` | `''` | Optional extra CSS classes for the container. |
| `style` | `CSSProperties` | `undefined` | Optional inline styles merged with palette variables. |

### `NavLink` shape

```ts
{ label: string; href: string }
```

### Default links

```js
leftLinks  = [{ label: 'Home', href: '#home' }, { label: 'Services', href: '#services' }, { label: 'About', href: '#about' }]
rightLinks = [{ label: 'Blog', href: '#blog' }, { label: 'Pricing', href: '#pricing' }, { label: 'Contact', href: '#contact' }]
```

---

## Palette system

By default, `OrbitNavbar` renders with the **`OceanTeal`** palette out of the box — zero setup needed.

### 1. Simple string name (Recommended)

Pass the preset name directly as a string (PascalCase or camelCase):

```jsx
<OrbitNavbar palette="OceanTeal" />
<OrbitNavbar palette="DuskRose" />
<OrbitNavbar palette="MidnightViolet" />
```

### 2. Direct named import

```jsx
import { OrbitNavbar, OceanTeal, DuskRose } from '@gskit/orbit-navbar';

<OrbitNavbar palette={OceanTeal} />
```

### Built-in presets

| Preset | Description |
|---|---|
| `OceanTeal` *(default)* | Deep ocean teal + crimson accent |
| `MidnightViolet` | Deep purple + amber accent |
| `ForestEmber` | Forest green + burnt orange |
| `DuskRose` | Plum + dusty rose + ocean blue |
| `CarbonAmber` | Charcoal grays + amber |
| `ArcticSky` | Navy + sky blue + crimson |

### 3. Override a preset

```jsx
import { OrbitNavbar, ArcticSky } from '@gskit/orbit-navbar';

<OrbitNavbar palette={{ ...ArcticSky, accent: '#FF3366' }} />
```

### 4. Fully custom palette

```jsx
<OrbitNavbar
  palette={{
    text:        '#1a1a2e',
    textHover:   '#16213e',
    accent:      '#e94560',
    linkHoverBg: 'rgba(233,69,96,0.12)',
    glassBg:     'rgba(255,255,255,0.15)',
    glassEdge:   'rgba(233,69,96,0.35)',
  }}
/>
```

### `OrbitPalette` keys

| Key | CSS variable | Controls |
|---|---|---|
| `text` | `--nav-text` | Primary link colour |
| `textHover` | `--nav-text-hover` | Link colour on hover |
| `accent` | `--nav-accent` | Focus ring + scrolled logo ring |
| `linkHoverBg` | `--nav-link-hover-bg` | Pill background on hover |
| `glassBg` | `--glass-bg` | Frosted glass fill |
| `glassEdge` | `--glass-edge` | Hairline border |

> Palette styles are applied as inline CSS custom properties on the `<header>` element — **fully scoped** to this navbar instance.

---

## Examples

### Logo as image

```jsx
<OrbitNavbar
  logoContent={<img src="/logo.svg" alt="Acme" />}
  logoHref="https://acme.com"
  logoAriaLabel="Acme — home"
/>
```

### Logo as text / icon

```jsx
import { Rocket } from 'lucide-react';
import { OrbitNavbar, MidnightViolet } from '@gskit/orbit-navbar';

<OrbitNavbar
  logoContent={<Rocket size={24} />}
  palette={MidnightViolet}
/>
```

### Custom links

```jsx
<OrbitNavbar
  leftLinks={[
    { label: 'Products', href: '/products' },
    { label: 'Pricing',  href: '/pricing'  },
  ]}
  rightLinks={[
    { label: 'Docs',    href: '/docs'    },
    { label: 'Sign in', href: '/sign-in' },
  ]}
/>
```

### Custom scroll threshold

```jsx
<OrbitNavbar scrollThreshold={120} />
```

---

## TypeScript

The package ships a full `.d.ts` declaration file with complete autocomplete:

```ts
import { OrbitNavbar, PALETTES, OceanTeal } from '@gskit/orbit-navbar';
import type { OrbitPalette, NavLink, OrbitNavbarProps } from '@gskit/orbit-navbar';
```

---

## CSS custom properties reference

You can also style the navbar directly with CSS variables:

```css
:root {
  --nav-text:          #0E2931;
  --nav-text-hover:    #12484C;
  --nav-accent:        #861211;
  --nav-link-hover-bg: rgba(43,117,116,0.14);
  --glass-bg:          rgba(226,226,224,0.18);
  --glass-edge:        rgba(43,117,116,0.45);
}
```

---

## Browser support

| Feature | Minimum version |
|---|---|
| `backdrop-filter` | Chrome 76, Safari 9, Firefox 103 |
| `clip-path: path()` | Chrome 88, Safari 14, Firefox 97 |
| CSS custom properties | All modern browsers |

---

## Building from source

```bash
# Dev preview
npm run dev

# Library bundle (ESM + UMD + CSS + .d.ts)
npm run build:lib
```

---

## License

MIT © [Gaurav Singh](https://github.com/GauravSingh0001)
