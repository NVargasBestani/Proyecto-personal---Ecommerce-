import { useState } from "react";
import "./NavBar.css";

function NavBar({ nombreTienda, carrito, quitarDelCarrito }) {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const total = carrito.reduce(
    (acumulado, producto) => acumulado + producto.precio,
    0,
  );

  return (
    <nav className="navbar">
      <h2>{nombreTienda}</h2>

      <div className="carrito-wrapper">
        <button
          className="carrito-boton"
          onClick={() => setMostrarCarrito(!mostrarCarrito)}
        >
          🛒 {carrito.length}
        </button>

        {mostrarCarrito && (
          <div className="carrito-desplegable">
            {carrito.length === 0 ? (
              <p>El carrito está vacío</p>
            ) : (
              <>
                <ul>
                  {carrito.map((producto, index) => (
                    <li key={index}>
                      {producto.nombre} - ${producto.precio}
                      <button
                        className="quitar-boton"
                        onClick={() => quitarDelCarrito(index)}
                      >
                        Quitar Producto
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="carrito-total">Total: ${total}</p>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
