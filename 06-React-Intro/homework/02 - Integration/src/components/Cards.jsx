import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div>
      {characters.map((elem) => (
      <Card 
      name={elem.name}
      species={elem.species}
      gender={elem.gender}
      image={elem.image}
      onClose={() => window.alert('Emulamos que se cierra la card')}
      />))}
   </div>
   )
}

/*
props
const characters = [
  {
    id: 2,
    name: "Morty Smith",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    id: 3,
    name: "Summer Smith",
    species: "Human",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
  */