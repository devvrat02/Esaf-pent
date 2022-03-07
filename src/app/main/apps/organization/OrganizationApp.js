import DemoContent from "@fuse/core/DemoContent";
import { styled } from "@mui/material/styles";
import FusePageSimple from "@fuse/core/FusePageSimple";
import OrgHeader from "./OrgHeader";
import OContent from "./OContent";
const Root = styled(FusePageSimple)({
  "& .FusePageSimple-header": {
    minHeight: 64,
    height: 64,
  },
  "& .FusePageSimple-toolbar": {},
  "& .FusePageSimple-content": {},
  "& .FusePageSimple-sidebarHeader": {},
  "& .FusePageSimple-sidebarContent": {},
});
function OrganizationApp() {
  return (
    <Root


      content={
        <div className="p-24">
          <OContent />
        </div>
      }
    />
  );
}

export default OrganizationApp;
