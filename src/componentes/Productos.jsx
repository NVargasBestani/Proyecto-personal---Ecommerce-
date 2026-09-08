import "./Productos.css";
import productos from "../data/productos";
import ProductoCard from "./productoCard";

function Productos({ agregarAlCarrito }) {
  return (
    <section>
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
    </section>
  );
}

export default Productos;
