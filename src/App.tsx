import { router } from '@/router/routes.tsx';
import { Theme } from '@radix-ui/themes';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';

export default function App() {
  return (
    <StrictMode>
      <Theme
        accentColor="amber"
        grayColor="slate"
        radius="large"
        scaling="110%"
        appearance="light"
      >
        <RouterProvider router={router} />
      </Theme>
    </StrictMode>
  );
}
