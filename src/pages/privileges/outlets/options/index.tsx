import { appsConfig } from "@config/nav";
import { PrivilegesOptionsUI } from "@pages/privileges/outlets/options/interface";

import { privilegeOptionsConfig } from "../../config/privileges.config";

function PrivilegesOptions() {
  return (
    <PrivilegesOptionsUI
      appName={appsConfig[0].label}
      appDescription={appsConfig[0].description}
      appOptions={privilegeOptionsConfig}
      appRoute={appsConfig[0].crumbs}
    />
  );
}

export { PrivilegesOptions };
