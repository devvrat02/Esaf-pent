import { lazy } from 'react';

const VulnerabilitiesApp = lazy(() => import('./VulnerabilitiesApp'));


const VulnerabilitiesANDConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/VulnerabilitiesAND',
      element: <VulnerabilitiesApp />,
    },
  ],

};

// export default VulnerabilitiesAppConfig;
export default VulnerabilitiesANDConfig;
