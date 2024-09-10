import { RulesOptionsUI } from "./interface";
import { rulesOptionsConfig, appsConfig } from "../../config/rules.config";

function RulesOptions() {
  return (
    <RulesOptionsUI
      appName={appsConfig[0].label}
      appDescription={appsConfig[0].description}
      appOptions={rulesOptionsConfig}
      appRoute={appsConfig[0].crumbs}
    />
  );
}


export { RulesOptions  };
