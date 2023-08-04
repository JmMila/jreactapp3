import logo from './logo.svg';
import React from 'react';
import C05operadorternario from './component/C05operadorternario';
import C03contador from './component/C03contador';
import C01componente from './component/C01componente';
import C07MatrizOperaciones from './component/C07matrizoperciones';


function App() {
  return (
    <div className='App'>

      <h1>C07MatrizOperaciones</h1>
      <C07MatrizOperaciones></C07MatrizOperaciones>

      <h1>Componente 5</h1>
      <C05operadorternario></C05operadorternario>

      <h1>Componente 3</h1>
      <C03contador></C03contador>

      <h1>Componente 1</h1>
      <C01componente></C01componente>

    </div>
  );
}

export default App;
