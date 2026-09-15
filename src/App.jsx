import "./App.css";
import NavBar from "./componentes/NavBar";
import Inicio from "./componentes/Inicio";
import Productos from "./componentes/Productos";
import Footer from "./componentes/Footer";
import { useState } from "react";

function App() {
  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(producto) {
    setCarrito([...carrito, producto]);
  }

  function quitarDelCarrito(index) {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
  }

  return (
    <>
      <NavBar
        nombreTienda="mi Ecommerce"
        carrito={carrito}
        quitarDelCarrito={quitarDelCarrito}
      />
      <Inicio />
      <Productos agregarAlCarrito={agregarAlCarrito} />
      <Footer anio={2026} />
    </>
  );
}

export default App;
