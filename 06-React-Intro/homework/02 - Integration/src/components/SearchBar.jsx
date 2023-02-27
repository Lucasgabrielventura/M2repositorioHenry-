export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
      <button onClick={() => props.onSearch('ID de personaje')}>Agregar</button>
      </div>
   );
}

//props:
//  onSearch={(characterID) => window.alert(characterID)}