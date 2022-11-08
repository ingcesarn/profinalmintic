// Modelo para manejar los perfiles en la plataforma
// src\app\modelos\Perfil.tsx
// Es el simil de la entidad perfil en el back


class Perfil {
  public _id: string;
  public nombrePerfil: string;
  public estadoPerfil: number;

  constructor(id: string, nom: string, est: number) {
    this._id = id;
    this.nombrePerfil = nom;
    this.estadoPerfil = est;
  }
}

export default Perfil;
