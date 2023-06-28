import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Pokedex from './img/pokedex-logo.png'

import Cards from './components/Cards/Cards'
import Buttons from './components/Buttons/Buttons'
import Footer from './components/Footer/Footer'

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

  const next = () => {
    if (count < 1000) {
      setCount(count + limit)
    } else  {
      return false
    }
  }

  const previus = () => {
    if (count > 0) {
      setCount(count - limit)
      setApi(api.splice(0, limit))
    } else {
      return false
    }
  }

  useEffect(() => {
    getApiData();
  }, [count]);

  return (
    <div className="App">
        
        <div className="Logo">
          <img src={Pokedex} />
        </div>

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
          <Buttons function={previus} buttonName="PREVIUS" />
          <Buttons function={next} buttonName="NEXT" />
        </div>

        <Footer />
    </div>
  );
}

export default App;