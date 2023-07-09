import React from 'react'

interface ModalProps {
    cerrarModal: () => void,
    modo: string;
  }

const ModalEdicionDireccion: React.FC<ModalProps> = ({cerrarModal, modo})=> {
  return (
     <div className="modal" style={{ display: "block" }}>
      <div className="modal-dialog d-flex align-items-center justify-content-center modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h3
              className="modal-title text-center text-white bold"
              style={{ textAlign: "center", margin: "0 auto" }}
            >
              {modo === "agregar" ? "Agregar dirección" : "Editar dirección"}
            </h3>
          </div>
          <div className="modal-body">
            <p className="text-white parrafo bold text-center">Nombre:</p>
            <input
              type="text"
              className="form-control text-center text-white"
              placeholder="Nombre"
            />
            <p className="text-white parrafo bold text-center">Apellido:</p>
            <input
              type="text"
              className="form-control text-center text-white"
              placeholder="Apellido"
            />
            <p className="text-white parrafo bold text-center">Número de Teléfono:</p>
            <input
              type="text"
              className="form-control text-center text-white"
              placeholder="Número de Teléfono"
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
            <button type="button" className="btn modal-usuario text-white altura mx-5">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalEdicionDireccion