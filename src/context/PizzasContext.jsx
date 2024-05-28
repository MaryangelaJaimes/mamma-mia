import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const getData = async () => {
    const response = await fetch("/pizzas.json");
    const pizzas = await response.json();
    setPizzas(pizzas);
  };

  const agregarProducto = ({ id, price, name, img, desc }) => {
    const productExiste = carrito.find((product) => product.id === id);
    const product = { id, price, name, img, desc, count: 1 };
    if (productExiste !== undefined) {
      carrito[carrito.findIndex((producto) => producto.id === product.id)]
        .count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, product]);
    }
  };

  const incrementar = (index) => {
    carrito[index].count++;
    setCarrito([...carrito]);
  };

  const decrementar = (index) => {
    const { count } = carrito[index];
    if (count > 1) {
      carrito[index].count--;
      setCarrito([...carrito]);
    } else {
      carrito.splice(index, 1);
      setCarrito([...carrito]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PizzasContext.Provider
      value={{ pizzas, agregarProducto, carrito, incrementar, decrementar }}
    >
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;
