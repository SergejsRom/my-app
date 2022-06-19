import {useEffect, useState} from "react";
function PokemonData2(
){
const [pokemons, setPokemons] = useState([]);
    useEffect(()=> {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(data => {
                setPokemons(data.results);
                console.log(data);
            })
    }, []    )
    
  return   pokemons.map((pokemon , k)=><div key={k}><h3>{pokemon.name}</h3><a href= {pokemon.url}> {pokemon.url}</a></div>)
}
export default PokemonData2;