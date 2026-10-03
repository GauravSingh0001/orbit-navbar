/** @author GauravSingh0001 | https://github.com/GauravSingh0001 */
import { useMemo } from 'react';
import './orbitNavbar.css';
import { NavPod } from './NavPod.jsx';
import {
  DEFAULT_LEFT_LINKS,
  DEFAULT_RIGHT_LINKS,
  SCROLL_THRESHOLD,
  buildPaletteStyle,
  useScrolled,
} from './orbitNavbar.functions.js';

const DefaultGsLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="orbit-gs-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--nav-text-hover, #12484C)" />
        <stop offset="100%" stopColor="var(--nav-accent, #861211)" />
      </linearGradient>
    </defs>
    <text
      x="50%"
      y="54%"
      textAnchor="middle"
      dominantBaseline="middle"
      fill="url(#orbit-gs-grad)"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
      fontSize="13"
      fontWeight="800"
      letterSpacing="0.8px"
    >
      GS
    </text>
  </svg>
);

export default function OrbitNavbar({
  logoContent = <DefaultGsLogo />,
  logoHref = '#',
  logoAriaLabel = 'Return to top',
  leftLinks = DEFAULT_LEFT_LINKS,
  rightLinks = DEFAULT_RIGHT_LINKS,
  scrollThreshold = SCROLL_THRESHOLD,
  palette = 'OceanTeal',
  rotateOnScroll = true,
  className = '',
  style = undefined,
}) {
  const scrolled = useScrolled(scrollThreshold);
  const paletteStyle = useMemo(() => buildPaletteStyle(palette), [palette]);
  const containerStyle = useMemo(() => (!paletteStyle && !style ? undefined : { ...paletteStyle, ...style }), [paletteStyle, style]);

  return (
    <header className={`nav-host${className ? ` ${className}` : ''}`} aria-label="Site navigation" style={containerStyle}>
      <div className={`nav-group${scrolled ? ' nav-group--scrolled' : ''}`}>
        <NavPod side="left" links={leftLinks} />
        <div className="nav-center">
          <a href={logoHref} className="nav-logo-link" aria-label={logoAriaLabel}>
            <div className={`nav-logo-content${rotateOnScroll ? ' nav-logo-content--rotate' : ''}`}>
              {logoContent}
            </div>
          </a>
        </div>
        <NavPod side="right" links={rightLinks} />
      </div>
    </header>
  );
}

OrbitNavbar.__author__ = 'GauravSingh0001';
OrbitNavbar.__pkg__ = '@gskit/orbit-navbar';