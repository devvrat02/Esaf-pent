import { lazy } from 'react';

const AnalyticsApp = lazy(() => import('./AnalyticsApp'));

const AnalyticsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/analytics',
      element: <AnalyticsApp />,
    },
  ],
};

export default AnalyticsAppConfig;
