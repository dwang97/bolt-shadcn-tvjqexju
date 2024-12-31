import { PageLayout } from '@/components/layout/PageLayout.tsx';
import { createBrowserRouter } from 'react-router-dom';
import { History } from '@/pages/History';
import { Account } from '@/pages/Account';
import { Pricing } from '@/pages/Pricing';
import { Editor } from '@/pages/Editor';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout/>,
    children: [
      {
        path: '/',
        element: <Editor/>,
      },
      {
        path: '/history',
        element: <History/>,
      },
      {
        path: '/pricing',
        element: <Pricing/>,
      },
      {
        path: '/account',
        element: <Account/>,
      },
    ],
  },
]);
