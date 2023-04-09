import React, { useEffect, useState, Fragment } from 'react';

// cliente de axios 
import clienteAxios from '../../config/axios';

// componentes
import Cliente from './Cliente';

function Clientes() {

  // trabajar con el state 
  // clientes = state,  guardarClientes = funcion para guardar el state, los datos que se van a guardar en el state
  const [clientes, guardarClientes] = useState([]);

  //query a la API
  const consultarAPI = async () => {
    const clientesConsulta = await clienteAxios.get('/clientes');
    
    // colocar el resultado en el state
    guardarClientes(clientesConsulta.data);
  }

  // useEffect es similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    //consultar la API
    consultarAPI();
  }, [])

  return (
    <Fragment>

      <h2>Clientes</h2>
      <ul className="listado-clientes">
        {
          clientes.map(cliente => (
            <Cliente
              key = { cliente._id }   // key es un atributo de React que no se puede cambiar
              cliente = { cliente }
            />
          ))
        }
      </ul>

    </Fragment>  
  );
}

export default Clientes;