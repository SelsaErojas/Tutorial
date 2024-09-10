import { useEffect, useState } from "react";
import { getAll } from "@mocks/utils/dataMock.service";

import { PositionsUI } from "./interface";
import { IPosition } from "./add-position/types";

export function Positions() {
  const [searchPosition, setSearchPosition] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [positions, setPositions] = useState<IPosition[]>([]);

  useEffect(() => {
    getAll("staff-positions")
      .then((data) => {
        setLoading(true);
        if (data !== null) {
          setPositions(data as IPosition[]);
        }
      })
      .catch((error) => {
        console.info(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearchPositions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPosition(e.target.value);
  };
  return (
    <PositionsUI
      handleSearchPositions={handleSearchPositions}
      searchPosition={searchPosition}
      loading={loading}
      data={positions}
    />
  );
}
