/*Creación del archivo para conexion con los endpoints */
/*Tenemos aqui en endpoint del backend  linea 7*/
/* una constante que contiene un json */
/*Tenemos url del backend linea 6 */
const ApiBack = {
  URL: "http://localhost:3123",
  CREAR_USUARIO: "/api/usuario/crear",
  INICIAR_SESION: "/api/usuario/iniciar",

  PERFILES_OBTENER: "/api/perfil/todos",
  PERFILES_CREAR: "/api/perfil/crear",
  PERFILES_ELIMINAR: "/api/perfil/eliminar",
  PERFILES_OBTENER_UNO: "/api/perfil/uno",
  PERFILES_ACTUALIZAR: "/api/perfil/actualizar"
};

export default ApiBack;