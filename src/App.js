import {useEffect, useState} from "react"
import './App.css';
import SearchIcon from "./search.svg"
import MovieCard from "./components/MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=f36ce219";

function App() {

  const [movies, setMovies] = useState()
  const [searchTerm, setSearchTerm] = useState()
  

  //Fetch movies 
  const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`)
      const data = await response.json()

      setMovies(data.Search)
  }

   //Initial search display
   useEffect( () => {
     searchMovies("superhero")
   },[])

  return (
    <div className="app">
      {/*Title*/}
       <h1>MovieLand</h1>

       {/*Search Bar */}
       <div className="search">
         <input 
            placeholder="Search for movies" 
            value={searchTerm} 
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
        <img
         src={SearchIcon}
         alt="search"
         onClick={() => searchMovies(searchTerm)}
        />
       </div>

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
