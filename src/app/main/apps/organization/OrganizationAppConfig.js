import { lazy } from 'react';

const OrganizationApp = lazy(() => import('./OrganizationApp'));

const OrganizationAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/Organization',
      element: <OrganizationApp />,
    },
  ],
};

export default OrganizationAppConfig;
