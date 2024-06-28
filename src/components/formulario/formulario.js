import { useState } from "react";
import "./formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) =>{

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    //Destructuración
    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (evento) =>{
        evento.preventDefault();
        console.log("Manejar el envio", evento);

        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosEnviar);
    }

    const manejarNuevoEquipo = evento =>{
        evento.preventDefault();
        console.log(titulo, color);

        //Cualquiera de las dos formas de declarar el objeto y su valor es correcta siempre y cuadno la porpiedad y el valor se llamen igual
        crearEquipo({titulo, colorPrimario: color});
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Completa el formulario para crear el colaborador</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingrese el nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            ></Campo>
            <Campo 
                titulo="Puesto" 
                placeholder="Ingrese el puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            ></Campo>
            <Campo 
                titulo="Foto" 
                placeholder="Ingrese enlace de foto"
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            ></Campo>
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            ></ListaOpciones>
            <Boton> Crear colaborador </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear un equipo</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingrese el titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            ></Campo>
            <Campo 
                titulo="Color" 
                placeholder="Ingrese el color en Hexadecimal" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            ></Campo>
             <Boton> Registrar Equipo </Boton>
        </form>
    </section>;
}

export default Formulario;