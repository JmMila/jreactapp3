import React, {useState, Fragment} from 'react';

const C07MatrizOperaciones = () => {

	const [lista, setLista] = useState([1,2,3,4,5]);
	const [dias, setDias] = useState(["Lunes","Martes","Miercoles","Jueves"]);
	const uniendoArray = [...lista, ...dias];

	const [numero, setNumero] = useState(6);
	const agregarNumero = () => {
	setNumero(numero + 1);
	setLista([...lista, numero]);
}

const [texto, setTexto] = useState(["Viernes","Sabado","Domingo"]);
const agregarTexto = () => {
	setDias([...dias, ...texto]);
}	
return (
	<Fragment>
		<h1>Lectura de la union de matrices</h1>
		{
			uniendoArray.map((item, index) =>
				<p key={index} >
					{item} - {index}
				</p>
			)
		}
		<br/>

		<h1>Agregar un valor a un array</h1>
		<button onclick={agregarNumero}>Agregar numero</button>
		{
			lista.map((item, index) =>
				<p key={index}>
					{item}-{index}
				</p>
			)
		}
		<br/>

		<h1>Agregar un texto a un array</h1>
		<button onClick={agregarTexto}>Agregar texto</button>
		{
			dias.map((item, index)=>
				<p key={index}>
					{item}-{index}
				</p>
			)
		}
		<br/>
	</Fragment>
);
}
export default C07MatrizOperaciones;
