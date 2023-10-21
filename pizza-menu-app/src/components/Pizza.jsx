const Pizza = ({ pizza }) => {
  return (
    <li key={pizza.id} className={`pizza ${pizza.soldOut && "sold-out"}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <span>{pizza.soldOut ? "SOLD OUT" : `$${pizza.price}`}</span>
        <p>{pizza.ingredients}</p>
      </div>
    </li>
  );
};

export default Pizza;
