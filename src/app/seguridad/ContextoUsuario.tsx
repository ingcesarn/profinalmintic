// Contexto es como la variable global o de sesión en react
// src\app\seguridad\ContextoUsuario.tsx


import { createContext } from "react";
import { propUsuario } from "../modelos/MisInterfaces";

export const ContextoUsuario = createContext<propUsuario | null>(null);