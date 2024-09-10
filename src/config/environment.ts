const IS_PRODUCTION = import.meta.env.PROD;
const AUTH_REDIRECT_URI = import.meta.env.VITE_AUTH0_REDIRECT_URI;

const environment = {
  CLIENT_ID: import.meta.env.VITE_AUTH0_CLIENT_ID,
  CLIENT_SECRET: import.meta.env.VITE_AUTH0_CLIENT_SECRET,
  REALM: import.meta.env.VITE_AUTH_REALM,
  PROVIDER: import.meta.env.VITE_AUTH_PROVIDER,
  REDIRECT_URI: IS_PRODUCTION ? window.location.origin : AUTH_REDIRECT_URI,
  ICLIENT_API_URL_QUERY: import.meta.env.VITE_ICLIENT_API_URL_QUERY,
  ICLIENT_API_URL_QUERY_PROCESS: import.meta.env
    .VITE_IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_QUERY_PROCESS,
  ICLIENT_API_URL_PERSISTENCE_POST: import.meta.env
    .VITE_IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_PERSISTENCE_PROCESS,
  TEMP_BUSINESS_UNIT: "LINIX",
  ICLIENT_API_URL_QUERY_USERS_PROCESS: import.meta.env
    .VITE_IPRIVILEGES_LINIX_API_URL_QUERY_DATA_SERVICE,
  AUTH0_DOMAIN: import.meta.env.VITE_AUTH0_DOMAIN,
};

const isMobile580 = "(max-width: 580px)";
const isMobile743 = "(max-width: 743px)";
const isMobile849 = "(max-width: 849px)";
const isMobile970 = "(max-width: 970px)";

export { environment, isMobile580, isMobile743, isMobile849, isMobile970 };
