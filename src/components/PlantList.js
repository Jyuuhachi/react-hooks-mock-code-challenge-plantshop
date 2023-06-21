import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, deletePlant, editPrice}) {
  return (
    <ul className="cards">{plants.map(plant => <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price} data={plant} editPrice={editPrice} deletePlant={deletePlant}/>)}</ul>
  );
}

export default PlantList;
