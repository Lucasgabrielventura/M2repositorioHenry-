/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';



export default function Zoo() {
   const [zoo, setZoo] = React.useState({
      zooName: "",
      animals: [],
      species: [],
      allAnimals: [],
   })
   const handleInputChange = (evento) => { 
      setZoo({
         ...zoo,
         zooName: evento.target.value,
      })
   
   }
   const handleSpecies = (evento) => {
      const specie = evento.target.value
   setZoo({
      ...zoo,
      animals: zoo.allAnimals.filter(animal => animal.specie === specie)
   })
   }
   const handleAllSpecies = () => {
   setZoo({
      ...zoo,
      animals: zoo.allAnimals
   })
   }
   React.useEffect(()=>{
      fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((json) =>
         setZoo({
            ...zoo,
            animals: json.animals,
            species: json.species,
            allAnimals: json.animals,
         })
      )
      .catch((error) => console.log(error));
   }, [])
   return (
      <div>
         <label>Zoo Name:</label>
         <input value={zoo.zooName} onChange={handleInputChange}></input>
         <h1>{zoo.zooName}</h1>
         <Species 
         species={zoo.species} 
         handleSpecies={handleSpecies} 
         handleAllSpecies={handleAllSpecies}
         />
         <Animals animals={zoo.animals} />
      </div>
   );
}



