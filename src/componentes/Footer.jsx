import "./Footer.css";

function Footer({ anio }) {
  return (
    <footer className="footer">
      <div className="contenedor">
        <p>© {anio} Mi Ecommerce</p>
      </div>
    </footer>
  );
}

export default Footer;
