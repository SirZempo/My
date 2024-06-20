import { useState } from 'react';
import './App.css';
import Formulario from './components/formulario/formulario';
import Header from './components/header/header.js';
import MiOrg from "./components/MiOrg";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuerstra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario);
  }

  return (
    <div>
      {/* {Header()} */}
      {/* <Header></Header> */}
      <Header/>
      {/* Las siguientes lineas de codigo son distintas formas de declarar la condicion */}
      { mostrarFormulario === true ? <Formulario></Formulario> : <></>}
      {/* mostrarFormulario && <Formulario></Formulario>*/}
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
    </div>
  );
}

export default App;
