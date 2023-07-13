import React from "react";
import "./modal.css";

interface ModalConfirmacionProps {
  mostrarModal: boolean;
  cerrarModal: () => void;
  confirmar: () => Promise<void>;
}

const ModalConfirmacion: React.FC<ModalConfirmacionProps> = ({ mostrarModal, cerrarModal, confirmar }) => {
  const handleConfirmar = () => {
    confirmar();
    cerrarModal();
  };

  const handleCancelar = () => {
    cerrarModal();
  };

  if (!mostrarModal) {
    return null;
  }

  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-dialog d-flex align-items-center justify-content-center modal-dialog-centered modal-sm">
        <div className="modal-content">
          <div className="modal-body text-center text-white">
            <p>¿Estás seguro de que deseas guardar los cambios?</p>
          </div>
          <div className="modal-footer justify-content-center text-center">
            <button type="button" className="btn eliminar text-white" onClick={handleCancelar}>
              Cancelar
            </button>
            <button type="button" className="btn eliminar text-white" onClick={handleConfirmar}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacion;
