// Modelo para el inicio de sesión
// src\app\modelos\MiSesion.tsx
// Es una clase básica, recordar que en el back se llaman entidades
//Poder sacar la info del jsonWebToken



class MiSesion {
  public codUsuario: string;
  public correo: string;
  public perfil: string;

  constructor(cod: string, cor: string, per: string) {
    this.codUsuario = cod;
    this.correo = cor;
    this.perfil = per;
  }
}

export default MiSesion;
