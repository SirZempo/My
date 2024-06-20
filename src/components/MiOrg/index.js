import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) =>{
    
    //Estado - hooks 
    //useState
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(valorInicial);
    //const [nombre, actualizarNombre] = useState("Harland");
    /*const [mostrar, actualizarMostrar] = useState(true);

    const manejarClick = () =>{
        console.log("Hola el estado de mostrar es:", mostrar);
        actualizarMostrar(!mostrar);
    }*/

    return <section className="orgSection">
        <h3 className="title"> Mi organización</h3>
        <img src="./img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg;