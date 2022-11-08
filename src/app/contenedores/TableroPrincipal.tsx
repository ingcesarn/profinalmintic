// Cascaron del dashBoard, define todas las partes del menú interno y las llama
// Archivo: src\app\contenedores\TableroPrincipal.tsx


import { MenuLateral } from "./MenuLateral";
import { MenuSuperior } from "./MenuSuperior";
import { RuteoTablero } from "../utilidades/rutas/RuteoTablero";

export const TableroPrincipal = () => {
  return (
    <div>
      <MenuSuperior />
      <MenuLateral />

      <RuteoTablero />
    </div>
  );
};
