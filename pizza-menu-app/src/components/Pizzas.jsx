import pizzaData from "../data";
import Pizza from "./Pizza";

const Pizzas = () => {
  return (
    <ul className="pizzas">
      {pizzaData.length <= 0 ? (
        <p>No Pizza Available</p>
      ) : (
        pizzaData.map((pizza) => {
          return <Pizza pizza={pizza} />;
        })
      )}
    </ul>
  );
};

export default Pizzas;
