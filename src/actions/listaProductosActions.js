import {
    LISTADO_PRODUCTO_INICIO,
    LISTADO_PRODUCTO_EXITO,
    LISTADO_PRODUCTO_ERROR 
} from '../types'

import clienteAxios from "../config/axios";


export function obtenerProductosAction(){
    return async (dispatch) =>{
        dispatch( descargarProductos())

        try {
            const respuesta = await clienteAxios.get('/productos')
            dispatch( descargaExitosa(respuesta.data));
        } catch (error) {
            dispatch( descargaError() )
        }
    }
}

const descargarProductos = () =>({
    type: LISTADO_PRODUCTO_INICIO,
    payload: true
})

const descargaExitosa = productos =>({
    type: LISTADO_PRODUCTO_EXITO,
    payload: productos
})

const descargaError = () =>({
    type: LISTADO_PRODUCTO_ERROR,
    payload: true 
})