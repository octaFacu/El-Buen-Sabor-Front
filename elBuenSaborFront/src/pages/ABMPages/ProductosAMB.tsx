import { useEffect, useState } from "react";
import { CategoriaProducto} from "../../context/interfaces/interfaces";
import { ProductoService } from "../../services/ProductoService";
import { CategoriaProductoService } from "../../services/CategoriaProductoService";
import ProductoCard from "../../components/componentesProducto/ProductoCard";
import { ListaCartasABM } from "../../components/genericos/ListaCartasABM";
import { Producto } from "../../context/interfaces/Producto";
import ModalVistaDetalleProd from "../../components/componentesProducto/ModalVistaDetalleProd";
import ModalCreacionProd from "../../components/componentesProducto/ModalCreacionProd";
import { useUnidadContext } from "../../context/GlobalContext";
import PageLoader from "../../components/pageLoader/PageLoader";
import ModalCompra from "../../components/componentesProducto/ModalCompra";

export const ProductosABM = () => {

    //AGREGAR ESTO A FORM
    //const { unidadesDeMedida, ingredientes } = useUnidadContext();
    const categoriaProductoService = new CategoriaProductoService();
    const productoService = new ProductoService();

    const { rol } = useUnidadContext();


    //Para la ventana modal del formulario
    const [estadoModal, setEstadoModal] = useState(false);
    const [estadoModalVista, setEstadoModalVista] = useState(false);
    const [categorias, setCategorias] = useState<CategoriaProducto[]>([]);
    const [productos, setProductos] = useState<Producto[]>([new Producto()]);
    const [datos, setDatos] = useState<Producto>(new Producto());
    const [cambiosProd, setCambiosProd] = useState<boolean>(false);
    const [estadoModalCompra, setEstadoModalCompra] = useState(false);

    useEffect(() => {
       
        categoriaProductoService.getAllBasic(rol)
            .then(data => {
                setCategorias(data)
            })

            productoService.getAllBasic(rol)
            .then(data => {
                setProductos(data)
            })
        
    }, [])



    function resetDatos() {
        setDatos(new Producto())//resetear los datos
    }

    function sendDatos(producto: Producto){
        setDatos(producto);
    }
    
   useEffect(() => {
        if(cambiosProd == true){
            productoService.getAllBasic(rol)
            .then(data => {
                console.log("CARGANDO PRODUCTOS "+ data);
                setProductos(data)
            })
            setCambiosProd(false);
        }
    }, [cambiosProd])
    
    if(categorias == null || rol == null){
        return <div style={{textAlign: "center"}}>
            <PageLoader></PageLoader>
        </div>
    }

    
 


    return (
        <div>
        
        <ListaCartasABM
        titulo="Productos"
        estado={estadoModal}
        setEstadoModal={setEstadoModal}
        recetDatos={resetDatos}
        >
            
            <div className="row my-3">

                <div className="">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nombre</th>
                                <th>Categoria</th>
                                <th></th>
                                <th>Acciones</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map(prd => (
                                
                                <ProductoCard
                                    key={Math.random() * 100}
                                    producto={prd}

                                    // rubros={rubros}
                                    // setRubros={setRubros}

                                    estado={estadoModal}
                                    cambiarEstado={setEstadoModal}
                                    estadoVista={estadoModalVista}
                                    cambiarEstadoVista={setEstadoModalVista}     
                                    estadoCompra={estadoModalCompra}
                                    cambiarEstadoCompra={setEstadoModalCompra}
                         

                                    datos={datos}
                                    setearDatos={sendDatos}

                                
                                />
                               
                                
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
            </ListaCartasABM>
            <ModalCreacionProd
                estado={estadoModal}
                cambiarEstado={setEstadoModal}

                datos={datos}
                categorias={categorias}
                cambio={cambiosProd}
                setCambios={setCambiosProd}
            />
            <ModalVistaDetalleProd producto= {datos} estadoVista={estadoModalVista} cambiarEstadoVista={setEstadoModalVista}/> 
            <ModalCompra producto={datos} estadoCompra={estadoModalCompra} cambiarEstadoCompra={setEstadoModalCompra} />
            <br></br>
            </div >
        
    )
}