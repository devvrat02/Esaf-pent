import { lazy } from 'react';

const VulnerabilitiesApp = lazy(() => import('./VulnerabilitiesApp'));


const VulnerabilitiesIOSConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/VulnerabilitiesIOS',
      element: <VulnerabilitiesApp />,
    },
  ],

};


export default VulnerabilitiesIOSConfig;
