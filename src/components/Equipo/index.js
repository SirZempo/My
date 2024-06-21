import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {
    //Destructuracion
    const {colorPrimario, colorSecundario, titulo} = props.datos;
    const estiloTitulo = { borderBottom: `4px solid ${colorPrimario}`};
    const {colaboradores} = props;

    //Para mandar propiedades css a nuestros componentes usamos la propiedad style={{"propiedadCSS"}}
    return <>
    {   
        colaboradores.length > 0 &&
        <section className="equipo" style={{backgroundColor: colorSecundario}}>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador, index)=>{ return <Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} ></Colaborador> })
            }
        </div>
        </section>
    }
    </>
}

export default Equipo