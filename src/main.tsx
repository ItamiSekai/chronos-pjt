import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Primeiro componente da pagina
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
