import logo from './logo.svg';
import React from 'react';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';
import C04variable from './component/C04variable';
import C03contador from './component/C03contador';
import C05operadorternario from './component/C05operadorternario';
import C06matriz from './component/C06matriz';

function App() {
  return (
    <div className='App'>
      <h1>Componente 1</h1>
      <C01componente></C01componente>

      <h2>Componente 2</h2>
      <C02contador></C02contador>

      <h3>Componente 3</h3>
      <C03contador></C03contador>

      <h4>Componete 4</h4>
      <C04variable></C04variable>

      <h5>Componente 5</h5>
      <C05operadorternario></C05operadorternario>

      <h6>Componente 5</h6>
      <C06matriz></C06matriz>
    </div>
  );
}

export default App;
