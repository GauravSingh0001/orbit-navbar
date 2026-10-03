/**
 * orbit-navbar — TypeScript declarations
 *
 * Consumers using TypeScript will get full prop autocomplete,
 * even though the source is plain JavaScript.
 */
import * as React from 'react';

// ── Palette ──────────────────────────────────────────────────
export interface OrbitPalette {
  /** Primary link colour. Maps to --nav-text. */
  text?: string;
  /** Link colour on hover. Maps to --nav-text-hover. */
  textHover?: string;
  /** Focus ring & scrolled logo ring. Maps to --nav-accent. */
  accent?: string;
  /** Pill background on link hover. Maps to --nav-link-hover-bg. */
  linkHoverBg?: string;
  /** Frosted glass fill (rgba recommended). Maps to --glass-bg. */
  glassBg?: string;
  /** Hairline border colour (rgba recommended). Maps to --glass-edge. */
  glassEdge?: string;
}

export interface NavLink {
  /** Visible text of the link. */
  label: string;
  /** href attribute value. */
  href: string;
}

// ── Individual palette presets ───────────────────────────────
export declare const oceanTeal: OrbitPalette;
export declare const OceanTeal: OrbitPalette;
export declare const midnightViolet: OrbitPalette;
export declare const MidnightViolet: OrbitPalette;
export declare const forestEmber: OrbitPalette;
export declare const ForestEmber: OrbitPalette;
export declare const duskRose: OrbitPalette;
export declare const DuskRose: OrbitPalette;
export declare const carbonAmber: OrbitPalette;
export declare const CarbonAmber: OrbitPalette;
export declare const arcticSky: OrbitPalette;
export declare const ArcticSky: OrbitPalette;

// ── Built-in palette presets dictionary ───────────────────────
export declare const PALETTES: {
  oceanTeal:      OrbitPalette;
  OceanTeal:      OrbitPalette;
  midnightViolet: OrbitPalette;
  MidnightViolet: OrbitPalette;
  forestEmber:    OrbitPalette;
  ForestEmber:    OrbitPalette;
  duskRose:       OrbitPalette;
  DuskRose:       OrbitPalette;
  carbonAmber:    OrbitPalette;
  CarbonAmber:    OrbitPalette;
  arcticSky:      OrbitPalette;
  ArcticSky:      OrbitPalette;
};

export type PalettePreset = keyof typeof PALETTES;

// ── Component props ──────────────────────────────────────────
export interface OrbitNavbarProps {
  /**
   * Node rendered inside the circular logo slot.
   * Pass an `<img>`, SVG, icon component, or text.
   * @default null (renders an empty frosted circle)
   */
  logoContent?: React.ReactNode;

  /**
   * `href` for the logo anchor link.
   * @default '#'
   */
  logoHref?: string;

  /**
   * `aria-label` for the logo anchor link.
   * @default 'Return to top'
   */
  logoAriaLabel?: string;

  /**
   * Navigation links rendered in the left pod.
   * @default [Home, Services, About]
   */
  leftLinks?: NavLink[];

  /**
   * Navigation links rendered in the right pod.
   * @default [Blog, Pricing, Contact]
   */
  rightLinks?: NavLink[];

  /**
   * Scroll distance in pixels before the pods retract.
   * @default 50
   */
  scrollThreshold?: number;

  /**
   * Colour palette applied as scoped CSS custom properties.
   * Defaults to `'OceanTeal'`. Use a preset name string, a preset object, or custom `OrbitPalette`.
   *
   * @default 'OceanTeal'
   *
   * @example
   * // Preset name (PascalCase or camelCase):
   * <OrbitNavbar palette="OceanTeal" />
   * <OrbitNavbar palette="duskRose" />
   *
   * // Direct preset import:
   * import { OrbitNavbar, OceanTeal } from 'orbit-navbar';
   * <OrbitNavbar palette={OceanTeal} />
   *
   * // Fully custom:
   * <OrbitNavbar palette={{ text: '#1a1a2e', accent: '#e94560' }} />
   */
  palette?: PalettePreset | OrbitPalette | null;

  /**
   * Whether the circular logo rotates 360 degrees when retracting on scroll.
   * @default true
   */
  rotateOnScroll?: boolean;

  /**
   * Optional custom CSS class name for the navbar container.
   */
  className?: string;

  /**
   * Optional custom inline styles merged with palette CSS variables.
   */
  style?: React.CSSProperties;
}

// ── Utility function declarations ───────────────────────────
export declare function buildPaletteStyle(
  palette?: PalettePreset | OrbitPalette | null
): React.CSSProperties | undefined;

export declare function podPath(side: 'left' | 'right', width: number): string;

export declare function useScrolled(threshold?: number): boolean;

// ── Default + named export ───────────────────────────────────
declare const OrbitNavbar: React.FC<OrbitNavbarProps>;
export { OrbitNavbar };
export default OrbitNavbar;
