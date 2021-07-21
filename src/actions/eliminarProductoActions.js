import {
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR
} from '../types';
import Swal from 'sweetalert2';
import clienteAxios from '../config/axios';


export function borrarProductoAction(id){
    return async(dispatch) =>{
        dispatch(obtenerProductoEliminar(id))

        try {
            await clienteAxios.delete(`/productos/${id}`)
            dispatch(eliminarProductoExito())
            
        Swal.fire("Eliminado!", "El producto ha sido eliminado con exito.", "success");
        } catch (error) {
            dispatch(eliminarProductoError())
        }
    }
}

const obtenerProductoEliminar = id =>({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExito = () =>({
    type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () =>({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})