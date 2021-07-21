import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from "../types";  
import clienteAxios from "../config/axios";
import Swal from "sweetalert2";
export function crearProducto(producto){
    return async (dispatch) => {
       dispatch(agregarProducto());

       try {
           await clienteAxios.post('/productos', producto)

           //actualiza el state
           dispatch(agregarProductoExito(producto))

           //alerta de exito
           Swal.fire(
               'Correcto',
               'El producto se agrego correctamente',
               'success'
           )
       } catch (error) {
           dispatch(agregarProductoError(true))

           Swal.fire({
               icon: 'error',
               title:'Hubo un error',
               text:'Error inesperado intentelo nuevamente'
           })
       }
    }
}

const agregarProducto = () =>({
    type: AGREGAR_PRODUCTO,

})

const agregarProductoExito = producto =>({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = estado =>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

