import { useState } from "react";
import "./campoTexto.css";

const CampoTexto = (props) =>{
    //Referencia
    //const [valor, actualizarValor] = useState("");

    //console.log(props);
    const placeholderModificado = `${props.placeholder}...`
    
    const manejarCambio = e =>{
        //console.log("Cambio", e.target.value);
        props.actualizarValor(e.target.value);
    }

    return <div className="campo-texto">
        <label>{props.titulo.toUpperCase()}</label>
        <input placeholder={placeholderModificado} required={props.required} value={props.valor} onChange={manejarCambio}></input>
    </div>;
}

export default CampoTexto;