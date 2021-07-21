import {
    OBTENER_PRODUCTO_EDITAR,
    INICIAR_EDICION_PRODUCTO,
    PRODUCTO_EDITAR_EXITO,
    PRODUCTO_EDITAR_ERROR
} from '../types';
import clienteAxios from '../config/axios';

export function obtenerProductoEditar(producto){
    return(dispatch) =>{
        dispatch(obtenerProductoAction(producto))
    }
}

const obtenerProductoAction = producto =>({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

export function editarProductoAction(producto){
    return async (dispatch) =>{
        dispatch(editarProducto(producto))
        try {
        await clienteAxios.put(`/productos/${producto.id}`, producto)

        dispatch(editarProductoExito(producto))
        } catch (error) {
            
        }
    }
}

const editarProducto = () => ({
    type: INICIAR_EDICION_PRODUCTO
})

const editarProductoExito = producto =>({
    type: PRODUCTO_EDITAR_EXITO,
    payload: producto
})
