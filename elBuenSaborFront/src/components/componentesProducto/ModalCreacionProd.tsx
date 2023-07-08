import { useContext, useEffect, useState } from "react"
import "../../css/ventanaModal.css"
import { Ingrediente, unidadDeMedida } from "../../context/interfaces/interfaces";
import { Rubro } from "../compIngrediente/Rubro";
import { GlobalContext } from "../../context/GlobalContext";
import { ProductoService } from "../../services/ProductoService";
import Producto from "../../context/interfaces/Producto";
import GrupoBotones from "../genericos/GrupoBotones";

interface IngredienteFormProps {

    //De categoriaIngrABM, cambio su estado
    /*estado: boolean,
    cambiarEstado: any

    datos?: Ingrediente
    setDatos: any

    categorias: Rubro[]*/
}

const ModalCreacionProd: React.FunctionComponent<IngredienteFormProps> = (/*{ estado, cambiarEstado, datos, setDatos, categorias}*/) => {

    const productoService = new ProductoService();
    // const serviceBasicos = new ServiceBasicos("unidadmedida");
  
    const estado = true;

    let Productonuevo: Producto;
    /*const [unidadElegida, setUnidadElegida] = useState<String>();
    const [categoriaElegida, setCategoriaElegida] = useState<String>();*/

    const [productoSelect, setProductoSelect] = useState<Producto>( new Producto());
    
    /*const { unidadesDeMedida } = useContext(GlobalContext);*/

    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        Productonuevo.denominacion =(event.target.value)

        setProductoSelect({ ...productoSelect, denominacion: (event.target.value) });
    }

    /*useEffect(() => {
        if(datos !== undefined){
            setIngredienteSelect(datos!);
        }
        
    }, [datos])

    

    if (datos === undefined || categorias === undefined) {

            return (
                <>
                    {estado &&
                        <h1>LOADING!</h1>
                    }
                </>
            )
    // }else if(categorias === undefined){
    //     return(
    //         estado &&
    //         <div>
    //             <div className="overlay">
    //                 <div className="container my-5 contenedorModal" style={{borderRadius: "25px", backgroundColor: "#f99132", color: "white"}}>
    //                     <div className="" style={{textAlign: "center"}}>

    //                         <h1>¡DEBE CREAR CATEGORIAS PRIMERO!</h1>

    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    }
    else{
        Ingredientenuevo = datos;
        
    }*/

    

    return (
        <>
            {estado && productoSelect !== undefined &&
                <div className="overlay">
                    <div className="container my-5 contenedorModal" style={{borderRadius: "25px", backgroundColor: "#f99132", color: "white", maxWidth: "50%"}}>
                        <div className="" style={{textAlign: "center", alignContent: "center"}}>
                            <form onSubmit={(e) => {
                                e.preventDefault()
                               
                            }}>
                                <h3 className="mb-3">Nuevo Producto</h3>
                                
                                <div className="container" style={{display: "flex", justifyContent: "space-evenly"}}>
                                    <div className="mb-3" style={{maxWidth: "50%"}}>
                                        <label htmlFor="nombre" className="form-label">Nombre</label>
                                        <input style={{borderRadius: "25px", backgroundColor: "#FDA859", color: "white"}} type="text" className="form-control" id="nombre" name="nombre" required value={productoSelect.denominacion.toString()} onChange={
                                            handleSelectChange
                                        }  />
                                    </div>
                                    </div>
                                    <div className="container" style={{display: "flex", justifyContent: "space-evenly"}}>
                                    <div style={{display: "flex"}}>
                                        <div className="mb-3">
                                            <label htmlFor="stockActual" className="form-label">Costo Total</label>
                                            <input type="number" style={{borderRadius: "25px", backgroundColor: "#FDA859", color: "white"}} className="form-control" id="precioCompra" name="precioCompra" required value={productoSelect.costoTotal.toString()}/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="stockActual" className="form-label">Precio Total</label>
                                            <input type="number" style={{borderRadius: "25px", backgroundColor: "#FDA859", color: "white"}}  className="form-control" id="stockActual" name="stockActual" required value={productoSelect.precioTotal.toString()}/>
                                        </div>
                                    </div>
                                    </div>
                                    

                                    <div className="container" style={{display: "flex", justifyContent: "space-evenly"}}>
                                    <div className="text-center" style={{display: "flex"}}>
                                        <div className="mb-3">
                                            <label htmlFor="stockMinimo" className="form-label">Descripcion</label>
                                            <textarea style={{borderRadius: "25px", backgroundColor: "#FDA859", color: "white"}} className="form-control" id="stockMin" name="stockMin"/>
                                        </div>
                                        <div className="mb-3">
                                            {/* Poner disabled si esManufacturado false */}
                                            <label htmlFor="stockMaximo" className="form-label">Receta</label>
                                            <textarea style={{borderRadius: "25px", backgroundColor: "#FDA859", color: "white"}} className="form-control" id="stockMax" name="stockMax" />
                                        </div>
                                    </div>
                                    </div>

                                     <div className="container" style={{display: "flex", justifyContent: "space-evenly"}}>
                                    <div className="text-center" style={{display: "flex"}}>
                                        <div className="mb-3">
                                            {/* Poner disabled si esManufacturado false */}
                                            <label htmlFor="stockMinimo" className="form-label">Tiempo de Preparacion</label>
                                            <input id="settime" type="time" step="1" style={{borderRadius: "25px", backgroundColor: "#FDA859", color: "white"}} className="form-control" required value={productoSelect.tiempoCocina!.toString()}/> 
                                           </div>
                                        <div className="mb-3">
                                            <label htmlFor="stockMaximo" className="form-label">¿Es manufacturado?</label>
                                            <GrupoBotones></GrupoBotones>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="stockActual" className="form-label">Inserte Link de su Imagen</label>
                                            <input type="text" style={{borderRadius: "25px", backgroundColor: "#FDA859", color: "white"}}  className="form-control" id="precio" name="precio" required value={productoSelect.imagen.toString()}/>
                                        </div>
                                    </div>
                                    </div>
                                

                                
                                
                                
                                    {/* <div className="container" style={{display: "flex", justifyContent: "space-evenly"}}>
                                <div className="mb-4" style={{display: "flex", maxWidth: "70%", maxHeight: "40%", alignItems: "center", justifyContent: "center" }}>
                                    <label htmlFor="rubro" className="form-label">Unidad de Medida</label>
                                    <select style={{borderRadius: "25px", backgroundColor: "#FDA859", color: "white"}} className="form-select" id="unidades" name="unidades" onChange={e =>{  setUnidadElegida(e.target.value); Ingredientenuevo.unidadmedida = JSON.parse(unidadElegida!.valueOf());}}>
                                    <option selected value={JSON.stringify(datos.unidadmedida)}>{datos.unidadmedida.denominacion}</option>
                                        {unidadesDeMedida.map(unidadM => (

                                            unidadM.denominacion !== datos.unidadmedida.denominacion &&
                                            <option value={JSON.stringify(unidadM)}>{unidadM.denominacion}</option>
                                        ))}
                                    </select>

                                </div> 
                                </div> */}





                                {/* <button className="btn btn-danger mx-3" onClick={() => cambiarEstado(!estado)}><i className="material-icons" style={{fontSize: "30px", cursor:"pointer"}}>highlight_off</i></button>

                                <button type="submit" className="btn" style={{backgroundColor: "#864e1b", color: "white"}} onClick={() => {


                                   if((categoriaElegida !== undefined || unidadElegida !== undefined) || (Ingredientenuevo.categoriaIngrediente.id !== 0 || Ingredientenuevo.unidadmedida.id !== 0)){

                                        if(categoriaElegida !== undefined){
                                            Ingredientenuevo.categoriaIngrediente = JSON.parse(categoriaElegida!.valueOf());
                                        }
                                        if(unidadElegida !== undefined){
                                            Ingredientenuevo.unidadmedida = JSON.parse(unidadElegida!.valueOf());
                                        }
                                    
                                    

                                        if(Ingredientenuevo.id !== 0){

                                            //pasar los datos guardados al metodo de update
                                            ingredientesService.updateEntity(Ingredientenuevo);
                                            cambiarEstado(!estado);

                                        }else{
                                            ingredientesService.createEntity(Ingredientenuevo);
                                            cambiarEstado(!estado);
                                            window.location.reload();
                                            
                                        }
 
                                }
                                }}> <i className="material-icons" style={{fontSize: "30px", cursor:"pointer"}}>check</i></button> */}
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>

    );
}

export default ModalCreacionProd;