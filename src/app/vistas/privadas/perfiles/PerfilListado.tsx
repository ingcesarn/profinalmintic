// Componente para listar Perfiles
// Archivo: src\app\vistas\privadas\perfiles\PerfilListado.tsx


// Los import
import { useState, useEffect } from "react";

import Perfil from "../../../modelos/Perfil";
import ApiBack from "../../../utilidades/dominios/ApiBack";
import ServicioPrivado from "../../../servicios/ServicioPrivado";



////###############****************////////////////
export const PerfilListado = ()=> {
    // Las variables siempre deben ir dentro de la funcion flecha pero antes del return
  // Variables
  const [arregloPerfiles, setArregloPerfiles] = useState<Perfil[]>([]);
  // *************************************
  // Función para obtener perfiles
  const obtenerPerfiles = async () => {
    const resultado = await ServicioPrivado.peticionGET( ApiBack.PERFILES_OBTENER );
    setArregloPerfiles(resultado);
    return resultado;
  };

  //******************************************
  
// Un nuevo concepto: useEffect

      //****************************/
//useEffect:
      useEffect(()=>{
        obtenerPerfiles();
      },[]);
	  
// *******************************************
    return(
        <main id="main" className="main">
      {/* Navegación estilo breadcrumb: Inicio */}
      <div className="pagetitle">
        <h1>Perfiles</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Inicio</a>
            </li>
            <li className="breadcrumb-item active">Listado de perfiles</li>
          </ol>
        </nav>
      </div>
      {/* Navegación estilo breadcrumb: Fin */}

  {/* Ejemplo de una tabla para presentación de datos: Inicio */}
  <div className="col-lg-12">
	<div className="card">
	  <div className="card-body">
		<table className="table table-striped">
		  <thead>
			<tr>
			  <th style={{ width: "20%" }}>Orden</th>
			  <th style={{ width: "65%" }}>Nombre perfil</th>
			  <th style={{ width: "15%" }}>Estado</th>
			</tr>
		  </thead>
		  <tbody>
        {arregloPerfiles.map((perfilin, indice)=>(
          <tr key={indice}>
            <td>{indice +1}</td>
            <td>{perfilin.nombrePerfil}</td>
            <td>{perfilin.estadoPerfil===1? "Activo":"Inactivo"}</td>
          </tr>
        ))}
		  </tbody>
		</table>
	  </div>
	</div>
  </div>
  {/* Ejemplo de una tabla para presentación de datos: Fin */}


        </main>
    );
};
