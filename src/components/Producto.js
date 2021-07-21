import React from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { borrarProductoAction } from "../actions/eliminarProductoActions";
import { obtenerProductoEditar } from "../actions/editarProductoActions";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();
  const history = useHistory();

  const confirmarEliminar = (id) => {
    Swal.fire({
      title: "Eliminar producto",
      text: `Esta seguro de eliminar ${nombre}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(borrarProductoAction(id));
      }
    });
  };

  const redireccionarEditar = producto =>{
    
    dispatch(obtenerProductoEditar(producto));
    history.push(`/productos/${producto.id}`);

  }
  return (
    <tr>
      <td>{nombre}</td>
      <td>
        {" "}
        <span className="font-weight-bold"> $ {precio} </span>{" "}
      </td>
      <td className="acciones">
        <button 
        type='button'
        onClick={() => redireccionarEditar(producto)}
        className="btn btn-primary mr-2">
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmarEliminar(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
