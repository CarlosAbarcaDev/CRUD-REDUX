import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductosAction } from "../../actions/listaProductosActions";
import Producto from "../../components/Producto";

const Productos = () => {
  
  const dispatch = useDispatch();

  //llamado a la api
  useEffect(() =>{
    const cargarProductos = () => dispatch( obtenerProductosAction() )
    cargarProductos();
  }, []);

  //obtener state global
  const productos = useSelector( state => state.productos.productos )
  const error = useSelector( state => state.productos.error )
  const cargando = useSelector( state => state.productos.loading )
  
  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>
      {error ? <p className='font-weight-bold alert alert-danger text-center mt-4'> Hubo un error </p> : null}
      {cargando ? <p className='text-center'>Cargando....</p> : null}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          { productos.length === 0 ? 'No hay productos' : (
            productos.map(producto =>(
              <Producto 
                key={producto.id}
                producto={producto}
              />
            ))
          ) }
        </tbody>
      </table>
    </>
  );
};

export default Productos;
