import { useLocation } from "react-router-dom";
import ResultsHeader from "../components/ResultsHeader";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineFileSearch} from 'react-icons/ai';
import {BiMovie} from 'react-icons/bi';


function TablePage(){
   const {state} = useLocation();
   const searchTermVal = state.searchTerm;

   useEffect(()=>{
      console.log(state.searchResults);
   },[])

   return(
      <>
         {/* Header For Results */}
         <ResultsHeader searchTerm={state.searchTerm} />


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
               <NavLink to="/results" state={{searchTerm: searchTermVal}}end>   
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
      </>
   )
}

export default TablePage;