import CalendarAppConfig from "./calendar/CalendarAppConfig";
import OrganizationAppConfig from "./organization/OrganizationAppConfig";
import TeamsAppConfig from "./teams/TeamsAppConfig";
import ChatAppConfig from "./chat/ChatAppConfig";
import AnalyticsAppConfig from "./analytics/AnalyticsAppConfig";
import VulnerabilitiesAppConfig from "./vulnerabilities/VulnerabilitiesAppConfig";
import VulConfig from "./vulnerabilities/VulReport/VulConfig";
import CloudAppConfig from "./cloud/CloudAppConfig";
import KnowledgeBaseConfig from "./knowledgebase/KnowledgeBaseConfig";
import CompConfig from "./Comp/CompConfig";
import SettingConfig from "./setting/SettingConfig";
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
