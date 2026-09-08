import "./NavBar.css";

function NavBar({ nombreTienda, cantidadCarrito }) {
  return (
    <nav className="navbar">
      <h2>{nombreTienda}</h2>
      <p>🛒 {cantidadCarrito}</p>
    </nav>
  );
}

export default NavBar;
