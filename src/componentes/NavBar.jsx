import { useState } from "react";
import "./NavBar.css";

function NavBar({ nombreTienda, carrito }) {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  return (
    <nav className="navbar">
      <h2>{nombreTienda}</h2>

      <div className="carrito-wrapper">
        <button
          onClick={() => setMostrarCarrito(!mostrarCarrito)}
          className="carrito-boton"
        >
          🛒 {carrito.lenght}
        </button>

        {mostrarCarrito && (
          <div className="carrito-desplegable">
            {carrito.lenght === 0 ? (
              <p>El carrito esta vacio</p>
            ) : (
              <ul>
                {carrito.map((producto, index) => (
                  <li key={index}>
                    {producto.nombre} - ${producto.precio}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
