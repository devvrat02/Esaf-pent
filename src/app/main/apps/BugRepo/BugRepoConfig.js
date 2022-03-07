import { lazy } from 'react';

const BugRepo = lazy(() => import('./BugRepo'));


const BugRepoConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: 'apps/BugRepo',
            element: <BugRepo />,
        },
    ],

};

export default BugRepoConfig;
