import "./Productos.css";
import productos from "../data/productos";
import ProductoCard from "./productoCard";

function Productos({ agregarAlCarrito }) {
  return (
    <section className="seccion-productos">
      <div className="contenedor">
        <h2>Productos</h2>
        <ul className="lista-productos">
          {productos.map((producto) => (
            <ProductoCard
              key={producto.id}
              producto={producto}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Productos;
