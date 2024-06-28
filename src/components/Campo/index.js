import { useState } from "react";
import "./Campo.css";

const Campo = (props) =>{
    //Referencia
    //const [valor, actualizarValor] = useState("");

    //console.log(props);
    const placeholderModificado = `${props.placeholder}...`
    
    //Destructuración 
    const {type = "text"} = props;

    const manejarCambio = e =>{
        //console.log("Cambio", e.target.value);
        props.actualizarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo.toUpperCase()}</label>
        <input placeholder={placeholderModificado} required={props.required} value={props.valor} onChange={manejarCambio} type={type}></input>
    </div>;
}

export default Campo;