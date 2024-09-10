import { MdOutlineBusinessCenter  } from "react-icons/md";


const privilegeOptionsConfig = [
  {
    id: 1,
    icon: <MdOutlineBusinessCenter />,
    label: "Cargos",
    description: "Gestionar todo lo relacionado con los permisos para los usuarios de la Plataforma INUBE",
    url: "/privileges/positions",
    domain: "privileges",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/privileges",
        label: "Privilegios",
        id: "/privileges",
        isActive: false,
      },
      {
        path: "/privileges/positions",
        label: "Cargos",
        id: "/privileges/positions",
        isActive: true,
      },
    ],
  },
];

export { privilegeOptionsConfig };
