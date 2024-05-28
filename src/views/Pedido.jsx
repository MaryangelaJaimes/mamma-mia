import { PizzasContext } from "../context/PizzasContext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Pedido = () => {
  const { carrito, incrementar, decrementar } = useContext(PizzasContext);
  const total = carrito.reduce(
    (acumulador, valorActual) =>
      acumulador + valorActual.price * valorActual.count,
    0
  );

  return (
    <>
      <div className="container pt-5">
        <h3>Detalle Pedido:</h3>
        <div className="shadow-lg p-4 mb-5 bg-body-tertiary rounded">
          {carrito.map((product, index) => (
            <div key={product.id} className="flexbox px-5 mb-5">
              <div className="flexbox">
                <img src={product.img} alt="{product.name}" width={150} />
                <p>{product.name}</p>
              </div>
              <div className="flexbox">
                <p>${product.price}</p>
                <button
                  className="btn btn-success"
                  onClick={() => incrementar(index)}
                >
                  +
                </button>
                <p>{product.count}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => decrementar(index)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        <h3 className="mb-3">Total: ${total}</h3>
        <Link to="/">
          <button className="btn btn-primary">Regresar</button>
        </Link>
      </div>
    </>
  );
};

export default Pedido;
