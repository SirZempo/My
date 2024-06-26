import { useState } from 'react';
import './App.css';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import Formulario from './components/formulario/formulario';
import Header from './components/header/header.js';
import MiOrg from "./components/MiOrg";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Programación",
    foto: "https://github.com/Kimberlyssb.png",
    nombre: "Kimberly Soto",
    puesto: "Programadora"
  },
  {
    equipo: "Front-End",
    foto: "https://github.com/SirZempo.png",
    nombre: "Uriel Jimenez Zempoalteca",
    puesto: "Ingeniero en Computación"
  },
  {
    equipo: "Devops",
    foto: "https://github.com/SrCuarzo.png",
    nombre: "Fernando Paredes Carvajal",
    puesto: "Computologo"
  }
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]);

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuerstra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario);
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador", colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //Eliminar colaborador
  const eliminarColaborador = () =>{
    console.log("Eliminar colaborador");
  }

  //Actualizar color de equipo
  const actualizarColor = (color, titulo) =>{
    console.log("Color Acxtualizado", color, titulo);
    const equiposActualizados = equipos.map( equipo =>{
      if(equipo.titulo === titulo){
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  }

  //Lista de equipos
  /*const equipos = ;*/

  return (
    <div>
      {/* {Header()} */}
      {/* <Header></Header> */}
      <Header/>
      {/* Las siguientes lineas de codigo son distintas formas de declarar la condicion */}
      { mostrarFormulario === true ? <Formulario equipos={equipos.map(equipo => equipo.titulo)} registrarColaborador={registrarColaborador}></Formulario> : <></>}
      {/* mostrarFormulario && <Formulario></Formulario>*/}
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
      {
        equipos.map((equipo)=>{
          return <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor}></Equipo>
        })
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
