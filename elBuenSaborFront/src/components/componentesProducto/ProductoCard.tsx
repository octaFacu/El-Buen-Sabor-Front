import { useState } from "react"
import { ProductoService } from "../../services/ProductoService"
import { Producto } from "../../context/interfaces/Producto"
import { useUnidadContext } from "../../context/GlobalContext"
import "./ModalCreationProdStyles.css"
interface ProductoCardProps {

    //De categoriaIngrABM, cambio su estado
    estado: boolean,
    cambiarEstado: any

    estadoVista: boolean,
    cambiarEstadoVista: any,

    estadoCompra:boolean,
    cambiarEstadoCompra: any,

    producto: Producto

    datos: Producto
    setearDatos: any


}

const ProductoCard: React.FunctionComponent<ProductoCardProps> = ({ producto, cambiarEstado, estado, cambiarEstadoVista, estadoVista, setearDatos, datos, cambiarEstadoCompra, estadoCompra }) => {

    const [botonActivo, setbotonActivo] = useState<Boolean>(producto.activo)
    const { rol } = useUnidadContext();

    const productoService = new ProductoService();


    return (

        <tr className="mb-5" style={botonActivo ? { backgroundColor: '#659355', borderRadius: "25px" } : { backgroundColor: '#C34942', borderRadius: "25px" }}  >
            <td></td>
            <td>{producto.denominacion}</td>
            <td>{producto.categoriaProducto.denominacion}</td>
            <td></td>
            <td>
                <button className="btn mx-2 btn-sm" style={{ backgroundColor: "#864e1b" }}
                    onClick={
                        () => {

                            setearDatos(producto)
                            cambiarEstadoVista(!estado)
                        }} >
                    <i className="material-icons" style={{ fontSize: "30px", cursor: "pointer", color: "white" }}>remove_red_eye</i></button>
                <button className="btn mx-2 btn-sm" style={{ backgroundColor: "#864e1b" }}
                    onClick={
                        () => {
                            setearDatos(producto);
                            cambiarEstado(!estado);


                        }}
                ><i className="material-icons" style={{ fontSize: "30px", cursor: "pointer", color: "white" }}>create</i></button>

                {/* <button className={`btn btn-sm ${botonActivo ? "btn-danger" : "btn-success"}`} onClick={async() => { */}
                <button className="btn btn-sm" style={{ backgroundColor: "#864e1b", color: "white" }}
                    onClick={async () => {
                        setbotonActivo(!botonActivo)

                        let productoNuevo: Producto = producto;
                        productoNuevo.activo = !(producto.activo);

                        await productoService.actualizarEntityActivo(productoNuevo, rol);

                    }}
                >{botonActivo
                    ? <i className="material-icons" style={{ fontSize: "30px", cursor: "pointer" }}>not_interested</i>
                    : <i className="material-icons" style={{ fontSize: "30px", cursor: "pointer" }}>check</i>}</button>


            </td>
            <td>
                { !producto.esManufacturado &&
            <button className="btn mx-2 btn-sm" style={{backgroundColor: "#864e1b"}} 
                onClick={
                     () => {
                     setearDatos(producto)
                     cambiarEstadoCompra(!estadoCompra)}}
                ><i className="material-icons" style={{fontSize: "30px", cursor:"pointer", color: "white"}}>add_shopping_cart</i></button>}</td>
                     
            <td><img src={producto.imagen} className="imagen-style" /></td>

        </tr>

    );
}

export default ProductoCard;