import React from "react";

function PlantCard({name, image, price, data, deletePlant, editPrice}) {
  const [inStock, setInStock] = React.useState(true)
  function isInStock() {
    setInStock(!inStock)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={e => editPrice(data)}>Edit Price</button>
      <button className="delete" onClick={e => deletePlant(data)}>delete</button>
      {inStock ? (
        <button className="primary" onClick={isInStock}>In Stock</button>
      ) : (
        <button onClick={isInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
