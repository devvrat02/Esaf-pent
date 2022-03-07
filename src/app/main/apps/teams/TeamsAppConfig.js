import { lazy } from 'react';

const TeamsApp = lazy(() => import('./TeamsApp'));

const TeamsAppConfig = {
  settings: {
    layout: {
     
    },
  },
  routes: [
    {
      path: 'apps/Teams',
      element: <TeamsApp />,
    },
  ],
};

export default TeamsAppConfig;
