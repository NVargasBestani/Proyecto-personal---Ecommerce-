import "./NavBar.css";

function NavBar({ nombreTienda }) {
  return (
    <nav className="navbar">
      <h2>{nombreTienda}</h2>
    </nav>
  );
}

export default NavBar;
