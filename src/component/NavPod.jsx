/** @author GauravSingh001 | https://github.com/GauravSingh001 */
import { memo, useRef, useState } from 'react';
import { POD_HEIGHT, podPath, useIsomorphicLayoutEffect } from './orbitNavbar.functions.js';

export const NavPod = memo(function NavPod({ side, links = [] }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setWidth((prev) => (prev === el.offsetWidth ? prev : el.offsetWidth));
    measure();
    if (typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const d = width ? podPath(side, width) : '';

  return (
    <nav ref={ref} className={`nav-pod nav-pod--${side}`} aria-label={`${side} navigation`}>
      <div className="nav-pod__glass" style={d ? { clipPath: `path('${d}')` } : undefined} aria-hidden="true" />
      {d ? (
        <svg className="nav-pod__edge" width={width} height={POD_HEIGHT} viewBox={`0 0 ${width} ${POD_HEIGHT}`} aria-hidden="true">
          <path d={d} />
        </svg>
      ) : null}
      <ul className="nav-pod__list">
        {links.map((link, i) => (
          <li key={`${i}-${link.href || ''}-${link.label || ''}`}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default NavPod;
