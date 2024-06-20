import "./listaOpciones.css" 

const ListaOpciones = (props) =>{
    const equipos = [
        "Programación",
        "Front-End",
        "Data Science",
        "UX y Diseño",
        "Devops",
        "Movil",
        "Innocvacion y Gestion"
    ];

    const manejarCambio = e =>{
        console.log("Evento: ", e.target.value);
        props.actualizarEquipo(e.target.value);
    }

    //Metodo Map -> arreglo.map( (equipo, index)=> { return <option></option>});

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            {/* <option value="">Programación</option>
            <option value="">Front-End</option>
            <option value="">Data Science</option>
            <option value="">UX y Diseño</option>
            <option value="">Devops</option>
            <option value="">Movil</option>
            <option value="">Innocvacion y Gestion</option> */}
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {
                equipos.map((equipo, index)=> <option key={index} value={equipo}>{equipo}</option>)
            }
        </select>
    </div>;
}

export default ListaOpciones;