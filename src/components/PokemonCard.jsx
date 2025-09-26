const PokemonCard = ({ name, url }) => {
    const id = url.split('/')[6].padStart(3, '0');
   return (
      <div className="card g-2 text-center">
        
        <a href={`https://pokemon.com/es/pokedex/${name}`}>
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} className="img-fluid" alt={name} />
         </a>
         <h3>{name}</h3>
      </div>
   );
};

export default PokemonCard;