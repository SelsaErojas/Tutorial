import { MdOutlineBusinessCenter, MdVpnKey  } from "react-icons/md";

const rulesOptionsConfig = [
  {
    id: 1,
    icon: <MdOutlineBusinessCenter />,
    label: "Creditos",
    description: "Reglas de negocios para la gestión de créditos",
    url: "/rules/creditos",
    domain: "rules",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/rules",
        label: "Privilegios",
        id: "/rules",
        isActive: false,
      },
      {
        path: "/rules/positions",
        label: "Cargos",
        id: "/rules/positions",
        isActive: true,
      },
    ],
  },
];

const appsConfig = [
  {
    id: 1,
    label: "Reglas de Negocios",
    description: "Gestionar de reglas de negocios",
    icon: <MdVpnKey />,
    crumbs: [
      {
        id: "/",
        isActive: false,
        label: "Inicio",
        path: "/",
      },
      {
        id: "/rules",
        isActive: true,
        label: "Reglas de Negocios",
        path: "/rules/options",
      },
    ],
    url: "/rules",
  },  
];

export { rulesOptionsConfig, appsConfig };
