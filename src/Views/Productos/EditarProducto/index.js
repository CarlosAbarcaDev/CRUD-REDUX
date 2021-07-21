import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAction } from '../../../actions/editarProductoActions';
import { useHistory } from 'react-router';
const EditarProducto = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [productoInicial, setProductoInicial] = useState({
    nombre:'',
    precio:''
  })

  const producto = useSelector(state => state.productos.productoEditar);
  

  //llenado del state local
  useEffect(() =>{
    setProductoInicial(producto)
  }, [producto])
  
  const onChangeForm = e =>{
    setProductoInicial({
      ...productoInicial,
      [e.target.name] : e.target.value
    })
  }

  const submitEditar = e => {
    e.preventDefault();

    dispatch(editarProductoAction(productoInicial))

    history.push('/')
  }


    return ( 
        <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Editar Producto
              </h2>
              <form
                onSubmit={submitEditar}
              >
                <div className="form-group">
                  <label>Nombre Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre Producto"
                    name="nombre"
                    value={ productoInicial?.nombre ? productoInicial.nombre : ''}
                    onChange={ e => onChangeForm(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Precio Producto</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Precio Producto"
                    name="precio"
                    value={ productoInicial?.precio ? productoInicial.precio : ''}
                    onChange={ e => onChangeForm(e)}
                  />
                </div>
                <button type='submit' className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-5">
                  Guardar Cambios
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default EditarProducto;