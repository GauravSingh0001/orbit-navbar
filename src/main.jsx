import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import OrbitNavbar from './component/orbitNavbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OrbitNavbar />
  </StrictMode>,
);
