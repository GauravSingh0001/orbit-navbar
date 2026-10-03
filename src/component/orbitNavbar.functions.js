/** @author GauravSingh001 | https://github.com/GauravSingh001 */
import { useCallback, useEffect, useLayoutEffect, useSyncExternalStore } from 'react';

export const POD_HEIGHT = 64;
export const PILL_RADIUS = 32;
export const CONCAVE_RADIUS = 32;
export const SCROLL_THRESHOLD = 50;

export const DEFAULT_LEFT_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
];

export const DEFAULT_RIGHT_LINKS = [
  { label: 'Blog', href: '#blog' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export function podPath(side, width) {
  if (!width || width <= 0) return '';
  return side === 'left'
    ? `M ${PILL_RADIUS},0 L ${width},0 A ${CONCAVE_RADIUS},${CONCAVE_RADIUS} 0 0,0 ${width},${POD_HEIGHT} L ${PILL_RADIUS},${POD_HEIGHT} A ${PILL_RADIUS},${PILL_RADIUS} 0 0,1 ${PILL_RADIUS},0 Z`
    : `M 0,0 A ${CONCAVE_RADIUS},${CONCAVE_RADIUS} 0 0,1 0,${POD_HEIGHT} L ${width - PILL_RADIUS},${POD_HEIGHT} A ${PILL_RADIUS},${PILL_RADIUS} 0 0,0 ${width - PILL_RADIUS},0 L 0,0 Z`;
}

export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export function useScrolled(threshold = SCROLL_THRESHOLD) {
  const subscribe = useCallback((onStoreChange) => {
    if (typeof window === 'undefined') return () => {};
    window.addEventListener('scroll', onStoreChange, { passive: true });
    return () => window.removeEventListener('scroll', onStoreChange);
  }, []);
  const getSnapshot = useCallback(() => (typeof window === 'undefined' ? false : window.scrollY > threshold), [threshold]);
  const getServerSnapshot = useCallback(() => false, []);
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export const PALETTE_VAR_MAP = {
  text: '--nav-text',
  textHover: '--nav-text-hover',
  accent: '--nav-accent',
  linkHoverBg: '--nav-link-hover-bg',
  glassBg: '--glass-bg',
  glassEdge: '--glass-edge',
};

export const oceanTeal = {
  text: '#0E2931',
  textHover: '#12484C',
  accent: '#861211',
  linkHoverBg: 'rgba(43,117,116,0.14)',
  glassBg: 'rgba(226,226,224,0.18)',
  glassEdge: 'rgba(43,117,116,0.45)',
};
export const OceanTeal = oceanTeal;

export const midnightViolet = {
  text: '#1A0533',
  textHover: '#3D1A6E',
  accent: '#F5A623',
  linkHoverBg: 'rgba(123,79,191,0.13)',
  glassBg: 'rgba(240,235,248,0.17)',
  glassEdge: 'rgba(123,79,191,0.40)',
};
export const MidnightViolet = midnightViolet;

export const forestEmber = {
  text: '#1B2A1A',
  textHover: '#2E5230',
  accent: '#D4500A',
  linkHoverBg: 'rgba(90,138,60,0.13)',
  glassBg: 'rgba(238,240,230,0.17)',
  glassEdge: 'rgba(90,138,60,0.42)',
};
export const ForestEmber = forestEmber;

export const duskRose = {
  text: '#2D1020',
  textHover: '#6B2040',
  accent: '#1A7FA6',
  linkHoverBg: 'rgba(196,96,122,0.13)',
  glassBg: 'rgba(245,234,240,0.17)',
  glassEdge: 'rgba(196,96,122,0.40)',
};
export const DuskRose = duskRose;

export const carbonAmber = {
  text: '#111111',
  textHover: '#2A2A2A',
  accent: '#F59E0B',
  linkHoverBg: 'rgba(74,74,74,0.12)',
  glassBg: 'rgba(240,240,238,0.17)',
  glassEdge: 'rgba(74,74,74,0.35)',
};
export const CarbonAmber = carbonAmber;

export const arcticSky = {
  text: '#0A1628',
  textHover: '#0D3B6E',
  accent: '#E8365D',
  linkHoverBg: 'rgba(26,122,196,0.13)',
  glassBg: 'rgba(220,240,250,0.18)',
  glassEdge: 'rgba(26,122,196,0.42)',
};
export const ArcticSky = arcticSky;

export const PALETTES = {
  oceanTeal, OceanTeal,
  midnightViolet, MidnightViolet,
  forestEmber, ForestEmber,
  duskRose, DuskRose,
  carbonAmber, CarbonAmber,
  arcticSky, ArcticSky,
};

export function buildPaletteStyle(palette) {
  if (!palette) return undefined;
  let resolved = palette;
  if (typeof palette === 'string') {
    resolved = PALETTES[palette] || PALETTES[Object.keys(PALETTES).find((k) => k.toLowerCase() === palette.toLowerCase())];
  }
  if (!resolved || typeof resolved !== 'object') return undefined;
  const style = {};
  for (const [key, cssVar] of Object.entries(PALETTE_VAR_MAP)) {
    if (resolved[key] != null) style[cssVar] = resolved[key];
  }
  return Object.keys(style).length > 0 ? style : undefined;
}
