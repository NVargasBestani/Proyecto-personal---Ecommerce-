function ProductoCard({ producto, agregarAlCarrito }) {
  return (
    <li className="producto-item">
      <img src={producto.img} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p>{producto.desc}</p>
      <p className="precio">$ {producto.precio}</p>
      <button onClick={() => agregarAlCarrito(producto)}>
        Agregar al carrito
      </button>
    </li>
  );
}

export default ProductoCard;
