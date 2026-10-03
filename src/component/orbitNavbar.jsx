/** @author GauravSingh001 | https://github.com/GauravSingh001 */
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

export default function OrbitNavbar({
  logoContent = null,
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

OrbitNavbar.__author__ = 'GauravSingh001';
OrbitNavbar.__pkg__ = '@gskit/orbit-navbar';