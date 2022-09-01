import {useEffect, useState} from "react"
import './App.css';
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";

const API_URL = "http://www.omdbapi.com?apikey=f36ce219";

function App() {

  const [movies, setMovies] = useState()
  

  //Fetch movies 
  const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`)
      const data = await response.json()
      setMovies(data.Search)
  }

   //Initial search display
   useEffect( () => {
     searchMovies("marvel")
   },[])

  return (
    <div className="app">
      {/*Title*/}
       <h1>MovieLand</h1>

       {/*Search Bar */}
       <SearchBar searchMovies={searchMovies} />

       {/*Movie Display*/}
       {
         (movies?.length>0)
          ? (
          <div className="container">
           {
            movies.map( (movie)=>{
              return <MovieCard movie={movie}/>
            })
           }
          </div>
          ) : (
           <div className="empty">
                { <h2>No Movies found</h2>}
           </div>
          )

       }

    </div>
  );
}

export default App;
