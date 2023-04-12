import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import results from './tempdata2';
import MovieList from "../components/MovieList";
import { NavLink } from "react-router-dom";
import {AiOutlineFileSearch} from 'react-icons/ai'
import {BiTable} from 'react-icons/bi'
import ResultsHeader from "../components/ResultsHeader";

function ResultsPage(){
  const location = useLocation();
  const searchTermVal = location.state.searchTerm;
  const [searchResults, setSearchResults] = useState(results);
    
  //make search request
  async function fetchSearch(searchTerm){
    const MY_KEY = process.env.REACT_APP_MY_KEY; 
    
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${MY_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`)
    const responseFinal = await response.json();

    console.log(responseFinal.results);

    setSearchResults(responseFinal.results);

  }

  // useEffect(()=>{
  //    fetchSearch(searchTermVal);
  // }, [])

    return(
    <>
      {/* Header For Results */}
      <ResultsHeader searchTerm={searchTermVal}/>
      {/* Results */}
      <div className="text-center bg-slate-900 min-h-[100vh] mx-[10%] lg:mx-[4%] xl:mx-[7.5%] flex items-start justify-center">
        <div className="mt-11">
            <MovieList data={searchResults} isTrending={false}/>
        </div>
      </div>
      {/*Navbar  */}
      <div className="w-full bg-black fixed bottom-0">
        <nav className="flex flex-row justify-between mx-[20%] lg:mx-[35%]">
          <div className="flex flex-col items-center lg:text-[1.2rem] mr-[4rem] text-slate-200 mt-2">
            <NavLink to="/" end>
              <div className="text-[3rem] flex flex-col items-center">
                <AiOutlineFileSearch/>
                <div className="text-[1rem]">
                  Search
                 </div>
              </div>
            </NavLink>
          </div>
          <div className="flex flex-col items-center justify-center lg:text-[1.2rem] text-slate-200 mt-2">
            <NavLink to="/table" state={{'searchResults': searchResults, 'searchTerm': searchTermVal}} end>   
              <div className="text-[3rem]  flex flex-col items-center">
                <BiTable/>
                <div className="text-[1rem]">
                  Table
                </div>
              </div>
            </NavLink> 
          </div>
        </nav>
       </div>
    </>
    )
}

export default ResultsPage;