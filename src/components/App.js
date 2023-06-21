import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
const targetURL = "http://localhost:6001/plants"

function App() {
  const [filter, setFilter] = React.useState("")
  const [plants, setPlants] = React.useState([])
  const [display, setDisplay] = React.useState([])

  function addNewPlant (e) {
    e.preventDefault()
    const newPlant = {name:e.target.name.value, image:e.target.image.value, price:e.target.price.value}
    fetch(targetURL, {method: "POST",
    headers:{"Content-Type":"application/json",
              "Accept":"application/json"},
    body: JSON.stringify(newPlant)
  })
  .then(response=>response.json())
  .then(data => {
    const updatedList = [...plants, data]
    setPlants(updatedList)
    changedPlants(updatedList)
  }
  )
  e.target.reset()
  }

  function filterPlants (e) {
    const tempDisplay = plants.filter(plant => {
      let caseCheck = plant.name.toLowerCase()
      let caseCompare = e.target.value.toLowerCase()
      if (caseCheck.includes(caseCompare)) {
        return true
      }
      else {
        return false
      }
    })
    setFilter(e.target.value)
    setDisplay(tempDisplay)
  }

  React.useEffect (() => {fetch(targetURL)
    .then(response => response.json())
    .then(data => {
      setPlants(data)
      setDisplay(data)
    })
    }
    ,[])

  function deletePlant (plant) {
    fetch(`${targetURL}/${plant.id}`, {method: "DELETE"})
    .then(response=>response.json())
    const updatedList = plants.filter(item => {
      if (plant.id === item.id) {
        return false
      }
      else {
        return true
      }
    })
    setPlants(updatedList)
    changedPlants(updatedList)
  }

  function changedPlants(updatedList) {
    const tempDisplay = updatedList.filter(plant => {
      let caseCheck = plant.name.toLowerCase()
      if (caseCheck.includes(filter)) {
        return true
      }
      else {
        return false
      }
    })
    setDisplay(tempDisplay)
  }

  function editPrice(plant) {
    let editedPosition
    let i = 0
    let newPrice = window.prompt("Enter new price")
    if (newPrice !== null) {
      fetch(`${targetURL}/${plant.id}`, {method: "PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({price:newPrice})
    })
    .then(response=>response.json())
    .then(updatedPlant => {
      let newPlantList = plants
      newPlantList.forEach(item => {
        if (item.id === updatedPlant.id) {
          editedPosition = i
          i++
        }
        else {
          i++
        }
      })
      newPlantList[editedPosition] = updatedPlant
      setPlants(newPlantList)
      changedPlants(newPlantList)
    })
    }

  }

  return (
    <div className="app">
      <Header />
      <PlantPage filter={filter} filterPlants={filterPlants} plants={display} addPlant={addNewPlant} deletePlant={deletePlant} editPrice={editPrice}/>
    </div>
  );
}

export default App;
