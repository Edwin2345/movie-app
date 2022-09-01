import {useEffect} from "react"
import './App.css';
import SearchIcon from "./search.svg"

const API_URL = "http://www.omdbapi.com?apikey=f36ce219";

function App() {

  //Fetch movies 
  const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`)
      const data = await response.json()

      console.log(data.Search)
  }

  useEffect( () => {
     searchMovies('Spiderman')
  }, [])

  return (
    <div className="app">
      {/*Title*/}
       <h1>MovieLand</h1>

       {/*Search Bar */}
       <div className="search">
         <input 
            placeholder="Search for movies" 
            value="Superman" 
            onChange={() => {}}
          />
        <img
         src={SearchIcon}
         alt="search"
         onClick={() => {}}
        />
       </div>

    </div>
  );
}

export default App;
