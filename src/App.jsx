import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Home, Detalle, Pedido } from "./views/index";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<Detalle />} />
        <Route path="/carrito" element={<Pedido />} />
      </Routes>
    </>
  );
};

export default App;
