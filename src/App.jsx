import "./App.css";
import NavBar from "./componentes/NavBar";
import Inicio from "./componentes/Inicio";
import Productos from "./componentes/Productos";
import Footer from "./componentes/Footer";

function App() {
  return (
    <>
      <NavBar nombreTienda="mi Ecommerce" />
      <Inicio />
      <Productos />
      <Footer anio={2026} />
    </>
  );
}

export default App;
