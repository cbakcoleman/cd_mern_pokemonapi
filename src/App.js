import {useState} from 'react';
import './App.css';

function App() {
  // CREATE STATE VARIABLE
  const [pokemons, setPokemons] = useState([])

  // FUNCTION FOR ONCLICK EVENT, FETCH API?
  const catchEmAll = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(result => {
        return result.json();
      })
      .then(jsonResult => {
        console.log(jsonResult)
        setPokemons(jsonResult)
      })
      .catch( error => console.log(error))
  }

  return (
    <div className="App">
        <h4>Catch Pokemon</h4>
        <button onClick={catchEmAll}>Throw the Pokeballs!</button>
        <hr/>
        {JSON.stringify(pokemons)}
        <hr/>
        <ul>
          <li></li>
        </ul>
    </div>
  );
}

export default App;
