import { useLocation } from "react-router-dom";
import ResultsHeader from "../components/ResultsHeader";
import { NavLink } from "react-router-dom";
import {AiOutlineFileSearch} from 'react-icons/ai';
import {BiMovie} from 'react-icons/bi';
import NoResults from "./NoResults";
import SortableTable from "../components/SortableTable";


function TablePage(){
   const {state} = useLocation();
   const searchTermVal = state.searchTerm;
   window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

   //display only movies or tv
   const searchData = state.searchResults.filter((movie)=>{
      return (movie.media_type === 'movie' || movie.media_type === 'tv');
   });

   //Reformat All Obj
   const finalData = searchData.map((movie)=>{
      let movieObj;

      //Title
      if(movie.title){
        movieObj = {...movie};
      }
      else if(movie.name){
         movieObj = {...movie, title: movie.name};
      }
      else{
         movieObj = {...movie, title: "No Title"};
      }
   
      //Genre
      (movie.media_type === 'movie') ? movieObj = {...movieObj, media_type: 'Movie'} :  movieObj = {...movieObj, media_type: 'TV'};


      //Release Date
      if(movie.release_date){
         movieObj = {...movieObj};
       }
      else if(movie.first_air_date){
          movieObj = {...movieObj, release_date: movie.first_air_date};
       }
       else{
          movieObj = {...movieObj, release_date: "0001-01-01"};
       }

       //score
       try {
         const score = (movieObj.vote_average).toFixed(1);
         movieObj = {...movieObj, score: score};
      } catch (error) {
         movieObj = {...movieObj, score: (0.0).toFixed(1)};
      }

      return movieObj;
   })

   const columnConfig =[
   {label: 'Title', 
   render: (movie) => movie.title,
   sortValue: (movie) => movie.title
   },
   {label: 'Type', 
   render: (movie) => movie.media_type,
   sortValue: (movie) => movie.media_type,
   },
   {label: 'Date', 
   render: (movie) => movie.release_date,
   sortValue: (movie) => movie.release_date,
   },
   {label: 'Score', 
   render: (movie) => movie.score,
   sortValue: (movie) => movie.score,
   },
  ]

  const keyFn = (movie) => {
   return movie.id;
  }


return(
      <div>
         <ResultsHeader searchTerm={state.searchTerm} />
         {/* conditionally render table */}
         {searchData.length === 0 ?  (<div className="mt-[8rem]"><NoResults/></div>) :  <div><SortableTable data={finalData} columnConfig={columnConfig} keyFn={keyFn}/></div>}
         {/*Navbar  */}
         <div className="w-full h-[15%] lg:h-[8%] bg-black fixed bottom-0">
         <nav className="flex flex-row justify-between mx-[20%] lg:mx-[35%]">
            <div className="flex flex-col items-center lg:text-[1.2rem] mr-[4rem] text-slate-200 mt-2 mb-[1rem]">
               <NavLink to="/" end>
               <div className="text-[3rem] flex flex-col items-center">
                  <AiOutlineFileSearch/>
                  <div className="text-[1rem]">
                     Search
                  </div>
               </div>
               </NavLink>
            </div>
            <div className="flex flex-col items-center justify-center lg:text-[1.2rem] text-slate-200 mt-2 mb-[1rem]">
               <NavLink to="/results" state={{searchTerm: searchTermVal, searchData: state.searchResults}}end>   
               <div className="text-[3rem]  flex flex-col items-center">
                  <BiMovie/>
                  <div className="text-[1rem]">
                     Results
                  </div>
               </div>
               </NavLink> 
            </div>
         </nav>
         </div>
      </div>
   )
}

export default TablePage;