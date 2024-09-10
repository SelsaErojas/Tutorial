import { IPosition } from "@pages/privileges/outlets/positions/add-position/types";

const MockPositions: IPosition[] = [
  {
    public_code: "001",
    abbreviated_name: "Administrador Funcional",
    n_roles: [
      "Análista Financiero ",
      "Especialista en Riesgos Financieros ",
      "Planificación Financiera ",
      "Cumplimiento Normativo ",
    ],
  },

  {
    public_code: "ADM",
    abbreviated_name: "Administracion tecnica",
    n_roles: [""],
  },
  {
    public_code: "ADW",
    abbreviated_name: "ADMINISTRADOR DEL WORKFLOW",
    n_roles: [""],
  },
  { public_code: "AUX", abbreviated_name: "Auxilios", n_roles: [""] },
  { public_code: "CAL", abbreviated_name: "Calidad", n_roles: [""] },
  { public_code: "CAP", abbreviated_name: "Captaciones", n_roles: [""] },
  { public_code: "CAR", abbreviated_name: "Cartera", n_roles: [""] },
  { public_code: "CIN", abbreviated_name: "Control Interno", n_roles: [""] },
  { public_code: "COM", abbreviated_name: "Comunicaciones", n_roles: [""] },
  { public_code: "COT", abbreviated_name: "Contabilidad", n_roles: [""] },
  { public_code: "CON", abbreviated_name: "Consulta", n_roles: [""] },
  { public_code: "CRE", abbreviated_name: "Créditos", n_roles: [""] },
  { public_code: "EVE", abbreviated_name: "Eventos", n_roles: [""] },
  { public_code: "FIN", abbreviated_name: "Financiero", n_roles: [""] },
  { public_code: "GER", abbreviated_name: "Gerencia", n_roles: [""] },
  { public_code: "JUR", abbreviated_name: "Juridico", n_roles: [""] },
  { public_code: "002", abbreviated_name: "Administrador web", n_roles: [""] },
  {
    public_code: "NOC",
    abbreviated_name: "Configuracion nomina",
    n_roles: [""],
  },
  { public_code: "MER", abbreviated_name: "Mercadeo", n_roles: [""] },
  {
    public_code: "NOE",
    abbreviated_name: "Nomina de empleados",
    n_roles: [""],
  },
  { public_code: "NOO", abbreviated_name: "Operacion nomina", n_roles: [""] },
  { public_code: "SIS", abbreviated_name: "Sistemas", n_roles: [""] },
  { public_code: "TES", abbreviated_name: "Tesorería", n_roles: [""] },
  { public_code: "TAH", abbreviated_name: "Talento humano", n_roles: [""] },
  {
    public_code: "003",
    abbreviated_name: "Administrador créditos",
    n_roles: [""],
  },
  {
    public_code: "004",
    abbreviated_name: "Administrador cartera",
    n_roles: [""],
  },
  {
    public_code: "005",
    abbreviated_name: "Administrador contabilidad",
    n_roles: [""],
  },
];

export { MockPositions };
