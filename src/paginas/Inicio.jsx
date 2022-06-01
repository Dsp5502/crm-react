import { useEffect, useState } from 'react';

const Inicio = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const url = 'http://localhost:4000/clientes';
        const respuesta = await fetch(url);
        const clientes = await respuesta.json();
        setClientes(clientes);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerClientesAPI();
  }, []);
  return <div>Inicio</div>;
};

export default Inicio;
