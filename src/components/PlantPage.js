import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({filter, plants, filterPlants, addPlant, deletePlant, editPrice}) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search filter={filter} filterPlants={filterPlants}/>
      <PlantList plants={plants} deletePlant={deletePlant} editPrice={editPrice}/>
    </main>
  );
}

export default PlantPage;
