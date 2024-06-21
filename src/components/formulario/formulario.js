import { useState } from "react";
import "./formulario.css"
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) =>{

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const manejarEnvio = (evento) =>{
        evento.preventDefault();
        console.log("Manejar el envio", evento);

        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Completa el formulario para crear el colaborador</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingrese el nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            ></CampoTexto>
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingrese el puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            ></CampoTexto>
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingrese enlace de foto"
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            ></CampoTexto>
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            ></ListaOpciones>
            <Boton> Crear colaborador </Boton>
        </form>
    </section>;
}

export default Formulario;