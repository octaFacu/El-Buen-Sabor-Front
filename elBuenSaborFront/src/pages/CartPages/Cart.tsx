import React, { useEffect, useState } from 'react'
import GenericContainer from '../../components/cart/genericContainer/GenericContainer'
import ReturnButton from '../../components/cart/returnButton/ReturnButton'
import { ProductoParaPedido } from '../../context/interfaces/interfaces';
import CartListCard from '../../components/cart/cartListCard/CartListCard';

export const Cart = () => {

    const [valorTotal, setValorTotal] = useState<number>(0);
    const [localStorageValues, setLocalStorageValues] = useState<ProductoParaPedido[]>([]);

    //Actualiza las cantidades de un producto en las cartas
    const actualizarCantidad = (indice: number, nuevaCantidad: number) => {
        setLocalStorageValues((prevProductos) => {
            const nuevosProductos = [...prevProductos];
            nuevosProductos[indice].cantidad = nuevaCantidad;
            return nuevosProductos;
        });
    };

    //Elimina un produco del carrito
    const eliminarProducto = (indice: number) => {
        // setLocalStorageValues((prevProductos) => {

        //SEGUIR ACAAAAAAAAAAAAAAA

        // });
    };

    //Funsion para confirmar el pedido
    const handlerConfirmOrder = () => {
        console.log("Confirmar pedido");
    }

    useEffect(() => {
        const storedCartItems = localStorage.getItem('carritoArreglo');
        if (storedCartItems) {
            setLocalStorageValues(JSON.parse(storedCartItems));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('carritoArreglo', JSON.stringify(localStorageValues));
    }, [localStorageValues])


    return (
        <>

            <ReturnButton />

            <GenericContainer
                title='Mi carrito'
            >

                <CartListCard
                    localStorageValues={localStorageValues}
                    actualizarCantidad={actualizarCantidad}
                />

                <div className="my-4 d-flex justify-content-evenly align-items-center">
                    <div className="mx-5"></div>

                    <button className="px-4 btn btn-add-order d-flex" onClick={handlerConfirmOrder}>
                        Confirmar pedido
                    </button>

                    <div className="container-valor-total">
                        <span className="txt-Total">Total: </span>
                        <span className="txt-valorTotal">${valorTotal}</span>
                    </div>

                </div>

            </GenericContainer>

            <div className='mb-5'></div>

        </>
    )

}
