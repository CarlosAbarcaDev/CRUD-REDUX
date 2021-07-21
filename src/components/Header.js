import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link className='text-light text-decoration-none' to={'/'}>CRUD - Gestion de alimentos</Link>
        </h1>
      </div>
      <Link
        className="btn btn-danger nuevo-post d-block d-mi-inline-block"
        to={"/productos/nuevo"}
      >
        Agregar Producto &#43;
      </Link>
    </nav>
  );
};

export default Header;
