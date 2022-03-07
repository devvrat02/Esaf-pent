import { lazy } from 'react';

const VulnerabilitiesApp = lazy(() => import('./VulnerabilitiesApp'));


const VulnerabilitiesAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/Vulnerabilities',
      element: <VulnerabilitiesApp />,
    },
  ],

};

// export default VulnerabilitiesAppConfig;
export default VulnerabilitiesAppConfig;
