import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PizzasContext } from "../context/PizzasContext";
import pizzaImage from "../assets/pizza.png";

const Detalle = () => {
  const { id } = useParams();
  const { pizzas, agregarProducto } = useContext(PizzasContext);
  const [pizzaDetail, setPizzaDetail] = useState({});

  const getData = () => {
    const informacion = pizzas.find((pizza) => pizza.id === id);
    setPizzaDetail(informacion);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {pizzaDetail && (
        <div className="container pt-5">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <img src={pizzaDetail.img} alt="" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h4 className="card-title">{pizzaDetail.name}</h4>
                  <p className="card-text">{pizzaDetail.desc}</p>
                  <h5 className="card-text ">Ingredientes</h5>
                  <ul>
                    {pizzaDetail.ingredients &&
                      pizzaDetail.ingredients.map((ingredient, index) => (
                        <li className="text-capitalize" key={index}>
                          {" "}
                          <img
                            src={pizzaImage}
                            alt="Pizza icon"
                            style={{
                              width: "20px",
                              height: "20px",
                              marginRight: "8px",
                            }}
                          />{" "}
                          {ingredient}
                        </li>
                      ))}
                  </ul>
                  <p className="card-text fw-bold">
                    Precio: ${pizzaDetail.price}
                  </p>
                  <div className="container">
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn custom-add-button me-3"
                        onClick={() => agregarProducto(pizzaDetail)}
                      >
                        Agregar <i className="fa-solid fa-cart-shopping" />
                      </button>
                      <Link to="/">
                        <button className="btn custom-back-button">
                          Regresar
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detalle;
