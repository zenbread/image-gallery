import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const UNSPLASH_API = "https://api.unsplash.com/"

function App() {
  const [word, setWord] = useState('');
  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(word);
    fetch(`${UNSPLASH_API}photos/random?query=${word}&client_id=${UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
     <Header title="Images Gallery"/>
     <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
