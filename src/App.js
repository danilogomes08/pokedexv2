import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'

import Cards from './components/Cards/Cards'

function App() {

  const [api, setApi] = useState([]);
  const [count, setCount] = useState(0)
  const limit = 20;

  const getApiData = async () => {
      const pokeIds = [];
      for (var i = count + 1; i <= limit + count; i++) {
        pokeIds.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      await Promise.all(pokeIds.map((pokeId) => fetch(pokeId)))
        .then((res) => Promise.all(res.map(async r => r.json())))
        .then((res) => {
          setApi([...api, ...res]);
        });
    }

  const more = () => {
    setCount(count + limit)
  }

  const previus = () => {
    setCount(count - limit)
    setApi(api.splice(0, 20))
  }

  useEffect(() => {
    getApiData();
  }, [count]);

    const typePokemon = () => {
      if (api.type === "fairy") return "Fairy"
      if (api.type === "steel") return "Steel"
      if (api.type === "dark") return "Dark"
      if (api.type === "dragon") return "Dragon"
      if (api.type === "ghost") return "Ghost"
      if (api.type === "rock") return "Rock"
      if (api.type === "bug") return "Bug"
      if (api.type === "psychic") return "Psychic"
      if (api.type === "ground") return "Ground"
      if (api.type === "poison") return "Poison"
      if (api.type === "fighting") return "Fighting"
      if (api.type === "ice") return "Ice"
      if (api.type === "grass") return "Grass"
      if (api.type === "electric") return "Electric"
      if (api.type === "normal") return "Normal"
      if (api.type === "water") return "Water"
      if (api.type === "fire") return "Fire"
  
      return ""
    }
  

  return (
    <div className="App">
        <h1> POKEDEX V2</h1>
        <div className="Cards">
          {api.map((item) => (
            <Cards 
              name={item.name}
              img={item.sprites.versions['generation-v']['black-white'].animated.front_default 
              ? item.sprites.versions['generation-v']['black-white'].animated.front_default 
              : item.sprites.front_default}
              id={item.id}
              type={item.types}
              typePokemon={typePokemon()}
            />
          ))}
        </div>
        <div className="Button">
            <button onClick={() => previus()}> PREVIUS </button>
            <button onClick={() => more()}> MORE </button>
        </div>
    </div>
  );
}

export default App;
