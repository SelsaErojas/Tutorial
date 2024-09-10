import { Route, Routes } from "react-router-dom";
import { PositionsProvider } from "@context/positionsContext";

import { PrivilegesOptions } from "@pages/privileges/outlets/options";
import { Positions } from "@pages/privileges/outlets/positions";
import { AddPosition } from "@pages/privileges/outlets/positions/add-position";
import { ErrorPage } from "@components/layout/ErrorPage";

function PrivilegesRoutes() {
  return (
    <PositionsProvider>
      <Routes>
        <Route path="/" element={<PrivilegesOptions />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="positions/add-position" element={<AddPosition />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </PositionsProvider>
  );
}

export { PrivilegesRoutes };
