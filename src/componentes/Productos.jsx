import "./Productos.css";

const Items = ["Remera", "Ventilador", "Lampara"];

function Productos() {
  function agregarAlCarrito(producto) {
    console.log(`Agregaste: ${producto}`);
  }

  return (
    <section>
      <h2>Productos</h2>
      <ul className="lista-productos">
        {Items.map((producto, index) => (
          <li className="producto-item" key={index}>
            {producto}
            <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Productos;
