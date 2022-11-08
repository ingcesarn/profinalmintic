// Interfaces para simplificar código y mejorar su lectura
// src\app\modelos\MisInterfaces.tsx
// prop es el prefijo de propiedades

import MiSesion from "./MiSesion";

export interface propSesion { children: React.ReactNode; }

export type propUsuario = { autenticado: MiSesion; actualizar: (usu: MiSesion) => void; };