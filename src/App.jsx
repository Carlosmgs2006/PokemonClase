import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonCard from './components/PokemonCard';


const App = () => {
   const [pokemons, setPokemons] = useState([]);
   useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon-species?limit=1025')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPokemons(data.results);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);


  return (
   
   <div className="container">
      <div className="row row-cols-1 row-cols-md-3 ">
      {pokemons.map((pokemon) => {
         return (
            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url}></PokemonCard>
         );
      })}
   </div>
</div>
   );
};
export default App;



