import "./Colaborador.css";
import { IoCloseCircle, IoHeartOutline, IoHeartSharp} from "react-icons/io5";


const Colaborador = (props) =>{
    const {nombre, puesto, foto, equipo, id, fav} = props.datos;
    const {colorPrimario, eliminarColaborador, like} = props;

    //Condicion ? verdader : falso

    return <div className="colaborador">
        <IoCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className="informacion">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <IoHeartSharp color="#ff5353" className="click" onClick={()=> like(id)}></IoHeartSharp> : <IoHeartOutline className="click" onClick={()=> like(id)}></IoHeartOutline>}
        </div>
    </div>;
}

export default Colaborador;