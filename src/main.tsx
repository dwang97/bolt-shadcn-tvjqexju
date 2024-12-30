import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme
      accentColor="amber"
      grayColor="slate"
      radius="large"
      scaling="110%"
      appearance="light"
    >
      <App />
    </Theme>
  </StrictMode>
);
