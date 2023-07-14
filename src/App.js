import logo from './logo.svg';
import './App.css';
import C01componente from './component/C01componente';
import C02contador from './component/C02contador';

function App() {
  return (
    <div>
      <h1>Componente 1</h1>
      <C01componente/>
      <h2>Componente 2</h2>
      <C02contador/>
    </div>
  );
}

export default App;
