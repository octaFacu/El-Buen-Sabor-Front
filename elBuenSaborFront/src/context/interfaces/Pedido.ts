import { Cliente } from "./Cliente";
import { Direccion, Usuario } from "./interfaces";


export class Pedido {
  id?: number = 0;
  precioTotal: number = 0;
  estado: string = "";
  activo: boolean = true;
  numeroPedidoDia: number = 0;
  esEnvio: boolean = false;
  horaEstimada: string = "";
  fechaPedido: string = "";
  cliente: Cliente = new Cliente();
  direccion?: Direccion = {
    idDireccion: 0,
    calle: '',
    nroCasa: 0,
    pisoDpto: '',
    usuario: {
      id: '',
      nombre: '',
      apellido: '',
      telefono: '',
      activo: true,
      email: '',
    },
    activo: true
  };
  delivery?: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    telefono: '',
    activo: true,
    email: '',
  };
}

export default Pedido;

export enum EstadoPedido {
  AConfirmar,
  EnCocina,
  Listo,
  EnDelivery,
  Entregado
}