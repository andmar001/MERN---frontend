import React, { useEffect } from 'react';

// cliente de axios 
import clienteAxios from '../../config/axios';

function Clientes() {

  //query a la API
  const consultarAPI = async () => {
    const clientesConsulta = await clienteAxios.get('/clientes');
  }

  // useEffect es similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    //consultar la API
    consultarAPI();
  })

  return (
    <h1>
      Clientes
    </h1>
  );
}

export default Clientes;