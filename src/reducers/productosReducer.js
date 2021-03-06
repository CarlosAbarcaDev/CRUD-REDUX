/* eslint-disable */ 
import { 
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    LISTADO_PRODUCTO_INICIO,
    LISTADO_PRODUCTO_EXITO,
    LISTADO_PRODUCTO_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITAR_EXITO,
    PRODUCTO_EDITAR_ERROR
} from "../types";  


const initialState = {
    productos: [],
    error: false,
    loading: false,
    productoEliminar: null,
    productoEditar: null
}

export default function(state = initialState, action){
    switch(action.type){
        case AGREGAR_PRODUCTO: 
        return{
            ...state,
            loading: true
        }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading: false,
                productos: [ ...state.productos, action.payload ]
            }
        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case LISTADO_PRODUCTO_INICIO:
            return{
                ...state,
                loading: action.payload
            }
        case LISTADO_PRODUCTO_EXITO:
            return{
                ...state,
                loading: false,
                error: null,
                productos: action.payload
            }
        case LISTADO_PRODUCTO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return{
                ...state,
                productoEliminar: action.payload
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return{
                ...state,
                productos: state.productos.filter( producto => producto.id !== state.productoEliminar ),
                productoEliminar: null
            }
        case PRODUCTO_ELIMINADO_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case OBTENER_PRODUCTO_EDITAR:
            return{
                ...state,
                productoEditar: action.payload
            }
        case PRODUCTO_EDITAR_EXITO:
            return{
                ...state,
                productoEditar:null,
                productos: state.productos.map(producto => 
                    producto.id === action.payload.id ? producto = action.payload : producto    
                )
            }
            case PRODUCTO_EDITAR_ERROR:
                return{
                    ...state,
                    loading:false,
                    error: action.payload
                }
        default:
            return state;
    }
}