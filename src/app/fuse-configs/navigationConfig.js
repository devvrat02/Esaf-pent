
const navigationConfig = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'vulnerabilities',
        title: 'Vulnerabilities',
        translate: 'Vulnerabilities',
        type: 'collapse',
        icon: 'bug_report',
        url: 'apps/vulnerabilities',
        children: [

          {
            id: 'WEB',
            title: 'WEB',
            translate: 'WEB',
            type: 'item',
            icon: 'language',
            url: 'apps/vulnerabilities',
          },
          {
            id: 'IOS',
            title: 'IOS',
            translate: 'IOS',
            type: 'item',
            icon: 'tablet_mac ',
            url: 'apps/vulnerabilitiesIOS',
          },
          {
            id: 'Android',
            title: 'Android',
            translate: 'Android',
            type: 'item',
            icon: 'android',
            url: 'apps/vulnerabilitiesAND',

          },

        ],
      },
      {
        id: 'BugReport',
        title: 'BugReport',
        translate: 'BugReport',
        type: 'item',
        icon: 'article',
        url: 'apps/BugRepo',
      },
      {
        id: 'calendar',
        title: 'Calendar',
        translate: 'Calendar',
        type: 'item',
        icon: 'date_range',
        url: 'apps/calendar',
      },
      {
        id: 'support',
        title: 'Support',
        translate: 'Support',
        type: 'item',
        icon: 'support_agent',
        url: 'apps/chat',
        // badge: {
        //   title: 13,
        //   bg: "rgb(9,210,97)",
        //   fg: "#FFFFFF"
        // }
      },
      {
        id: 'knowledge-base',
        title: 'Knowledge Base',
        type: 'item',
        icon: 'import_contacts',
        url: 'apps/knowledgebase',
      },
    ],
  },

];

export default navigationConfig;


