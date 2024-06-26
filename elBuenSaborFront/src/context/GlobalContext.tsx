import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { unidadDeMedida, Ingrediente, CategoriaProducto } from "./interfaces/interfaces";
import Producto from "./interfaces/Producto";

//Interface de que es lo que va a contener este contexto
export interface UnidadContextInteface{
    unidadesDeMedida: unidadDeMedida[],
    //este set va a ser un hook de react que toma unidadDeMedida como prop
    setUnidadesDeMedida: Dispatch<SetStateAction<unidadDeMedida[]>>,

    ingredientes: Ingrediente[],
    setIngredientes: Dispatch<SetStateAction<Ingrediente[]>>

    busquedaXNombre: string,
    setBusquedaXNombre: Dispatch<SetStateAction<string>>

    productos: Producto[],
    setProductos: Dispatch<SetStateAction<Producto[]>>

    categoriasProductos: CategoriaProducto[],
    setCategoriasProductos: Dispatch<SetStateAction<CategoriaProducto[]>>

    rol: string,
    setRol: Dispatch<SetStateAction<string>>

}

// const serviceBasicos = new ServiceBasicos();

export const GlobalContext = createContext<UnidadContextInteface>({
    //unidadesDeMedida: await  serviceBasicos.getAll("unidadDeMedida").then(data => {return data})
    unidadesDeMedida: [],
    setUnidadesDeMedida: () => {},
    ingredientes: [],
    setIngredientes: () => {},
    busquedaXNombre: "",
    setBusquedaXNombre: () => {},
    productos: [],
    setProductos: () => {},
    categoriasProductos: [],
    setCategoriasProductos: () => {},
    rol: "",
    setRol: () => {},
});

export const useUnidadContext = () => useContext(GlobalContext);