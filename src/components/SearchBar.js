import {useState} from "react";
import SearchIcon from "./search.svg"

function SearchBar(props){
    const [searchTerm, setSearchTerm] = useState();
    const {searchMovies} = props

    return(
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
    )
}

export default SearchBar