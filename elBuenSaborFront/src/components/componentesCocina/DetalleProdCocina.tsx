import { useEffect, useState } from "react";
import Producto from "../../context/models/Producto"
import IngredienteDeProducto from "../../context/models/IngredienteDeProducto";
import { ProductoService } from "../../services/ProductoService";

import "./CocinaComponentesStyle.css";
import IngredientesDetComponent from "./IngredientesDetComponent";

interface ProdFormProps {

    producto: Producto,
    estado: boolean,
    changeEstado: any


}
const DetalleProdCocina: React.FC<ProdFormProps> = ({ producto, estado, changeEstado }) => {

    const prodService = new ProductoService();
    const [ingredientes, setIngredientes] = useState<IngredienteDeProducto[]>([]); 
    const [loading, setLoading] = useState(true);
    
    const getIngredientes = async() => {
        try {
            await prodService.getIngredientes(producto.id!).then((data) => {
                console.log("Id del producto: "+producto.id)
                setIngredientes(data);
                setLoading(false);
                ingredientes.map((ing, index) => ("ing: "+console.log(ing)));
            })
        } catch (error) {
            console.log("Ingredientes no pudieron ser traidos");
        }
    }

   


    useEffect(() => {

        if(!(producto.id === null || producto.id === 0)){
            getIngredientes();
            console.log("Han cambiado los ingredientes...");
        }
            

        
    }, [producto, estado]);



    if(!loading){
        console.log("ENTRANDO"+ ingredientes.length)


    return (

        <>
            {estado &&
                <div className="overlay" onClick={() => changeEstado(!estado)}>
                    <div className="container productoContainer my-5 mt-4 mb-4 contenedorModal modaloverflow" onClick={e => e.stopPropagation()} style={{ borderRadius: "25px", backgroundColor: "#f99132", color: "white", maxWidth: "50%" }}>
                        <h2 className="mt-3 productoTitle pt-2 pb-2">{producto.denominacion}</h2>
                        <p className="mt-3 productoTitle pt-2 pb-2"></p>
                        
                        <h3 className="text-decoration-underline">Receta</h3>
                        <p className="ms-2 me-2">{producto.receta}</p>

                        <h3 className="text-decoration-underline">Ingredientes</h3>
                        <ul>
                        {ingredientes.map((ing, index) => (
                            <>
                            <h1>{ing.idIngrediente}</h1>
                            <IngredientesDetComponent ingredienteProd={ing} cantidad={ing.cantidad} productoId={producto.id!}></IngredientesDetComponent>
                        </>
                        ))}
                        </ul>
                        <div className="productoContainer tiempoProducto">
                            <h4>{producto.tiempoCocina}</h4>
                        </div>
                        <div>
                            <img className="imagen-pedido border border-white rounded border-4 me-2 ms-4 mt-2 mb-3" src={producto.imagen}></img>
                        </div>
                    </div>
                </div>
            }
        </>
    )}else{
        return(
            <>
            {estado &&
                <div className="overlay" onClick={() => changeEstado(!estado)}>
                    <div className="container productoContainer my-5 mt-4 mb-4 contenedorModal modaloverflow" onClick={e => e.stopPropagation()} style={{ borderRadius: "25px", backgroundColor: "#f99132", color: "white", maxWidth: "50%" }}>
                        Cargando...
                    </div>
                </div>}
            </>
        )
    }
}
export default DetalleProdCocina;