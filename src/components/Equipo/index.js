import "./Equipo.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
    //Destructuracion
    const {colorPrimario, colorSecundario, titulo} = props.datos;
    const estiloTitulo = { borderBottom: `4px solid ${colorPrimario}`};
    const {colaboradores, eliminarColaborador, actualizarColor} = props;

    //Para mandar propiedades css a nuestros componentes usamos la propiedad style={{"propiedadCSS"}}
    return <>
    {   
        colaboradores.length > 0 &&
        <section className="equipo" style={{backgroundColor: hexToRgba(colorPrimario, 0.4)}}>
            <input 
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={(evento)=>{actualizarColor(evento.target.value, titulo)}}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index)=>{ return <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador}></Colaborador> })
                }
            </div>
        </section>
    }
    </>
}

export default Equipo