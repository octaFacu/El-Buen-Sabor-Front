import React, { useEffect, useState } from "react";
import { ServiceBasicos } from "../../../services/ServiceBasicos";
import { DireccionService } from "../../../services/DireccionService";
import { Direccion, ExcepcionesVerificaUsuario } from "../../../context/interfaces/interfaces";
import "./modal.css";
import { useUnidadContext } from "../../../context/GlobalContext";

interface ModalProps {
  cerrarModal: () => void;
  modo: string;
  direccion: Direccion;
}

const ModalEdicionDireccion: React.FC<ModalProps> = ({
  cerrarModal,
  modo,
  direccion,
}) => {
  const [direc, setDirec] = useState<Direccion>(direccion);
  const { rol } = useUnidadContext();


  const handleSubmit = async () => {

    if(direc.calle.trim() != '' && direc.nroCasa != null) {
    const servicioDireccion = new DireccionService();
    const usuarioId = direc.usuario.id;
    try {
      if (modo === "editar") {
        await servicioDireccion.updateDireccion(usuarioId, direc,rol);
        cerrarModal();
      } else {
        await servicioDireccion.verificarYCrearDireccion(usuarioId, direc,rol);
        cerrarModal();
      }
    } catch (error: any) {
      console.log(error);
      if (isExcepcionesVerificaUsuario(error)) {
        // Es un error de tipo ExcepcionesVerificaUsuario y es por eso que podemos utilizar la interfaz para mostrar el mensaje
        alert(error.msj);
      }
    }
  }
  };

  useEffect(() => {
    setDirec(direccion);
  }, [direccion]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    
    const soloNumerosYLetrasConEspacios = /^[a-zA-Z0-9\s]*$/;
  
    if (soloNumerosYLetrasConEspacios.test(value)) {
      setDirec((prevDireccion) => ({ ...prevDireccion, [id]: value }));
    }
  };
  
  // Función para comprobar que el error es del tipo ExcepcionesVerificaUsuario
  function isExcepcionesVerificaUsuario(error: any): error is ExcepcionesVerificaUsuario {
    // aca retornamos el mensaje
    return error.msj;
  }

  return (
    <div className="modal " style={{ display: "block" }}>
      <div className="modal-dialog d-flex align-items-center justify-content-center modal-dialog-centered modal-lg ">
        <div className="modal-content card-modalPedido ">
          <div className="modal-header text-center">
            <h3
              className="modal-title text-center text-white bold"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              {modo === "agregar" ? "Agregar dirección" : "Editar dirección"}
            </h3>
            <button type="button" className="close" onClick={cerrarModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="text-white parrafo bold text-center">Calle:</p>
            <input
              type="text"
              className="form-control text-center text-white"
              id="calle"
              value={direc.calle}
              placeholder="Calle"
              onChange={handleChange}
              required
            />
            <p className="text-white parrafo bold text-center">
              Número de casa:
            </p>
            <input
              type="text"
              className="form-control text-center text-white"
              id="nroCasa"
              placeholder="Número de casa"
              value={direc.nroCasa}
              onChange={handleChange}
            />
            <p className="text-white parrafo bold text-center">Piso/Depto:</p>
            <input
              type="text"
              className="form-control text-center text-white"
              id="pisoDpto"
              placeholder="Piso/Depto"
              value={direc.pisoDpto}
              onChange={handleChange}
            />
          </div>
          <div className="modal-footer justify-content-center text-center">
            <button
              type="button"
              className="btn modal-usuario text-white altura mx-5"
              onClick={cerrarModal}
            >
              Cerrar
            </button>
            <button
              type="button"
              className="btn modal-usuario text-white altura mx-5"
              onClick={handleSubmit}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdicionDireccion;
