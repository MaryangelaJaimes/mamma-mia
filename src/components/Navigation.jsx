import { Link } from "react-router-dom";
import { PizzasContext } from "../context/PizzasContext";
import { useContext } from "react";

const Menu = () => {
  const { carrito } = useContext(PizzasContext);
  const total = carrito.reduce(
    (acumulador, valorActual) =>
      acumulador + valorActual.price * valorActual.count,
    0
  );

  return (
    <>
      <nav className="navbar custom-navbar">
        <div className="container-fluid">
          <Link className="nav-item nav-link" to="/">
            <h4 className="pizza-font">Pizza</h4>
          </Link>
          <Link className="nav-item nav-link" to="/carrito">
            <h4>
              <i className="fa-solid fa-cart-shopping" /> ${total}
            </h4>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Menu;
