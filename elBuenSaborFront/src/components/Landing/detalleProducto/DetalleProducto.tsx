import { FC, useState } from "react";
import Producto from '../../../context/interfaces/Producto';
import "./DetalleProducto.css";
import leftArrow from "../../../assets/left-arrow.png";
import heart from "../../../assets/heart.png";
import filledHeart from "../../../assets/filledHeart.png";

interface DetalleProductoProps {
    modalDetalleProducto: boolean
    setModalDetalleProducto: (modal: boolean) => void;

    producto: Producto | undefined;
}

const DetalleProducto: FC<DetalleProductoProps> = ({ producto, modalDetalleProducto, setModalDetalleProducto }) => {

    const [cantidad, setCantidad] = useState<number>(1)

    //AGREGAR FUNCION PARA AÑADIR AL CARRITO
    const handleAddToCart = () => {
        console.log("Agrego al carrito");

    }

    //AGREGAR FUNCION PARA AGREGAR A FAVORITOS
    const handleAddToFavorites = () => {
        console.log("Agrego a favoritos");

    }


    if (producto === undefined) {
        return (
            <>
                {/* Ventana modal */}
                {modalDetalleProducto && (
                    <div className="overlayModalProduct">
                        <div className="contenedorModalProduct">
                            <div>
                                <h1>CARGANDO...</h1>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }

    return (
        <>
            {/* Ventana modal */}
            {modalDetalleProducto && (
                <div className="overlayModalProduct">
                    <div className="contenedorModalProduct">

                        <div className="d-flex mb-2 ">

                            <div className="btn-container">
                                <button className="btn rounded-circle btn-go-back" onClick={() => setModalDetalleProducto(!modalDetalleProducto)}>
                                    <img src={leftArrow} alt="Flecha" width="20" height="30" />
                                </button>
                            </div>

                            <div className="product-name">
                                <h2>{producto.denominacion}</h2>
                            </div>

                            <div className="btn-container"></div>

                        </div>

                        <div className="d-flex align-items-center justify-content-center position-relative">
                            <img src={producto.imagen} alt={producto.denominacion} className="img-fluid mb-3 imgModalProduct" />
                            <button className="position-absolute top-0 end-0 btn-fav" onClick={handleAddToFavorites}>
                                {/* AGREGA LOGICA PARA SABER SI EL PRODUCTO ESTA EN FAVORITOS O NO Y AGREGAR IMAGENDE CORAZON */}
                                <img className="btn-fav-icon" src={filledHeart} alt="." />
                            </button>
                        </div>

                        <p>{producto.descripcion}</p>

                        <div className="d-flex justify-content-between">
                            {/* Lado Izquierdo: Ingredientes */}
                            <div>
                                {/* <p>Ingredientes: {producto.ingredientes.join(", ")}</p> */}
                                <p>Ingredientes:</p>
                                <ul>
                                    <li>Queso</li>
                                    <li>Harina</li>
                                    <li>Salsa de tomate</li>
                                    <li>No seeeeeeeeeeeeeeeeee</li>
                                </ul>
                            </div>
                            {/* Lado Derecho: Precio */}
                            <div>
                                <p className="productPrice">Precio: ${producto.precioTotal}</p>
                            </div>

                        </div>

                        {/* <div className="d-flex justify-content-center"> */}
                        <div className="d-flex justify-content-evenly ">
                            <div className="bg-cant">
                                <button className="btn bg-cant-btn " disabled={cantidad === 1} onClick={() => setCantidad(cantidad - 1)}>-</button>
                                <span className="px-3">{cantidad}</span>
                                <button className="btn bg-cant-btn" onClick={() => setCantidad(cantidad + 1)}>+</button>
                            </div>
                            <button className="btn btn-add-cart d-flex" onClick={handleAddToCart}>
                                Agregar al<i className="material-icons cart-icon" style={{ fontSize: "23px", cursor: "pointer" }}> shopping_cart</i>
                            </button>
                        </div>
                    </div>
                </div >
            )}
        </>
    );
}

export default DetalleProducto;