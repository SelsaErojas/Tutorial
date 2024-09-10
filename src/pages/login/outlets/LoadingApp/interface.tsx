import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Spinner } from "@inubekit/spinner";

import { basic } from "@design/tokens";

function LoadingAppUI() {
  return (
    <Stack gap={basic.spacing.s16} direction="column">
      <Stack direction="column">
        <Text type="title" textAlign="center">
          Cargando la aplicación
        </Text>
        <Text type="title" size="small" textAlign="center">
          Espere un momento, por favor.
        </Text>
      </Stack>
      <Stack alignItems="center" direction="column">
        <Spinner size="large" appearance={"success"} transparent={false} />
      </Stack>
    </Stack>
  );
}

export { LoadingAppUI };
