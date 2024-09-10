import { AppMenuCard } from "@components/cards/AppMenuCard/index";
import { Grid } from "@inubekit/grid";
import { useMediaQuery } from "@inubekit/hooks";
import { isMobile580 } from "@config/environment";
import { AppMenuCardProps } from "@components/cards/AppMenuCard";
import { basic } from "@design/tokens";

interface AppMenuGridProps {
  appOptions: AppMenuCardProps[];
}

function AppMenuGrid(props: AppMenuGridProps) {
  const { appOptions } = props;

  const screenMovil = useMediaQuery(isMobile580);

  return (
    <Grid
      templateColumns={
        screenMovil ? "1fr" : "repeat(auto-fill,minmax(auto, 205px))"
      }
      autoRows="auto"
      gap={basic.spacing.s24}
    >
      {appOptions.map((item) => (
        <AppMenuCard
          id={item.id}
          key={item.id}
          icon={item.icon}
          label={item.label}
          description={item.description}
          url={item.url}
          domain={item.domain}
        />
      ))}
    </Grid>
  );
}

export { AppMenuGrid };
export type { AppMenuGridProps };
