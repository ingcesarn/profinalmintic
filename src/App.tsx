import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Suspense} from "react";
import { RuteoCompleto } from './app/utilidades/rutas/RuteoCompleto';

const teTocaEsperar = (
  <button className="btn btn-primary" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Cargando...
</button>
);

function App() {
  return (
    <div>
<BrowserRouter>
    <Suspense fallback={teTocaEsperar}>
        <RuteoCompleto/>
    </Suspense>

</BrowserRouter>
    </div>
  );
}

export default App;
