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
    setApi(api.splice(0, limit))
  }

  useEffect(() => {
    getApiData();
  }, [count]);


  

  return (
    <div className="App">
        <h1> POKEDEX V2</h1>
        <div className="Cards">
          {api.map((item, index) => (
            <Cards 
              name={item.name}
              img={item.sprites.versions['generation-v']['black-white'].animated.front_default 
              ? item.sprites.versions['generation-v']['black-white'].animated.front_default 
              : item.sprites.front_default}
              id={item.id}
              type={item.types}
              key={index}
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