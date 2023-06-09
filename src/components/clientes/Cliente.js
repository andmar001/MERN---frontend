import React from 'react';

function Cliente({ cliente }) {

  // extraer los valores - destructuring
  const { _id, nombre, apellido, empresa, email, telefono } = cliente;

  return (
    <li className="cliente">
      <div className="info-cliente">
        <p className="nombre">{ nombre }{ apellido }</p>
        <p className="empresa">{ empresa }</p>
        <p>{ email }</p>
        <p>Tel: { telefono }</p>
      </div>
      <div className="acciones">
        <a href='h' className="btn btn-azul">
          <i className="fas fa-pen-alt"></i>
          Editar Cliente
        </a>
        <button type="button" className="btn btn-rojo btn-eliminar">
          <i className="fas fa-times"></i>
          Eliminar Cliente
        </button>
      </div>
    </li>
  );
}

export default Cliente;