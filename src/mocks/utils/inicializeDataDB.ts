import localforage from "localforage";

import { intializedData } from "@mocks/utils/dataMock.service";
import { MockPositions } from "@mocks/privileges/positions/Positions.mock";

export function initializeDataDB() {
  localforage.clear();

  intializedData<(typeof MockPositions)[number]>(
    "staff-positions",
    MockPositions
  );
}
