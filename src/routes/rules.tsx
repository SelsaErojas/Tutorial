import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "@components/layout/ErrorPage";
import { RulesOptions } from "@pages/rules/outlets/options";

function RulesRoutes() {
  return (
    <Routes>
      <Route path="/options" element={<RulesOptions />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export { RulesRoutes };
