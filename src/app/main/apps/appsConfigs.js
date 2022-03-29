import CalendarAppConfig from "./calendar/CalendarAppConfig";

import TeamsAppConfig from "./teams/TeamsAppConfig";
import ChatAppConfig from "./chat/ChatAppConfig";

import VulnerabilitiesAppConfig from "./vulnerabilities/VulnerabilitiesAppConfig";
import VulConfig from "./vulnerabilities/VulReport/VulConfig";

import KnowledgeBaseConfig from "./knowledgebase/KnowledgeBaseConfig";
import CompConfig from "./Comp/CompConfig";

import BugRepoConfig from "./BugRepo/BugRepoConfig"
import VulnerabilitiesANDConfig from './vulnerabilitiesAND/VulnerabilitiesANDConfig';
import VulnerabilitiesIOSConfig from './vulnerabilitiesIOS/VulnerabilitiesIOSConfig';

const appsConfigs = [
  VulnerabilitiesAppConfig,
  KnowledgeBaseConfig,
  CalendarAppConfig,
  TeamsAppConfig,
  CompConfig,
  ChatAppConfig,
  VulConfig,
  BugRepoConfig,
  VulnerabilitiesIOSConfig,
  VulnerabilitiesANDConfig,
];

export default appsConfigs;
