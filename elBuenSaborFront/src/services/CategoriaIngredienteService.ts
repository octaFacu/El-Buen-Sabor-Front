import { Rubro } from "../components/compIngrediente/Rubro"
import { ServiceBasicos } from "./ServiceBasicos"

export class CategoriaIngredienteService extends ServiceBasicos{
    
    url = "http://localhost:8080/categoriaIngrediente"

    //Trae todas categorias de ingrediente que no tengan padre
    async getAllPadres() {

        try {

            let res = await fetch(this.url + "/padres")

            if (!res.ok) {
                throw { status: res.status, statusText: res.statusText }
            }

            let jsonRes = await res.json()
            return jsonRes

        } catch (err: any) {
            console.log(`Error ${err.status}: ${err.statusText}`);
        }
    }


}