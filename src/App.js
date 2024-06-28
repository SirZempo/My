import { useState } from 'react';
import { IoFemaleSharp } from 'react-icons/io5';
import {v4 as uuidv4} from 'uuid';
import './App.css';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import Formulario from './components/formulario/formulario';
import Header from './components/header/header.js';
import MiOrg from "./components/MiOrg";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuidv4(),
    equipo: "Programación",
    foto: "https://github.com/Kimberlyssb.png",
    nombre: "Kimberly Soto",
    puesto: "Programadora",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Front-End",
    foto: "https://github.com/SirZempo.png",
    nombre: "Uriel Jimenez Zempoalteca",
    puesto: "Ingeniero en Computación",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Devops",
    foto: "https://github.com/SrCuarzo.png",
    nombre: "Fernando Paredes Carvajal",
    puesto: "Computologo",
    fav: false
  }
  ]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo: "Front-End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuidv4(),
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
  const eliminarColaborador = (id) =>{
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    /*const nuevosColaboradores = colaboradores.filter((colaborador) => {
        return colaborador.id !== id
    });*/
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) =>{
    console.log("Color Acxtualizado", color, id);
    const equiposActualizados = equipos.map( equipo =>{
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    actualizarEquipos(equiposActualizados);
  }

  //Crear euipo

  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4}])
  }

  const like = (id) =>{
    console.log("Like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav;
      }
      return colaborador
    });
    actualizarColaboradores(colaboradoresActualizados);
  }

  //Lista de equipos
  /*const equipos = ;*/

  return (
    <div>
      {/* {Header()} */}
      {/* <Header></Header> */}
      <Header/>
      {/* Las siguientes lineas de codigo son distintas formas de declarar la condicion */}
      { mostrarFormulario === true ? <Formulario equipos={equipos.map(equipo => equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo}></Formulario> : <></>}
      {/* mostrarFormulario && <Formulario></Formulario>*/}
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
      {
        equipos.map((equipo)=>{
          return <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor} like={like}></Equipo>
        })
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
