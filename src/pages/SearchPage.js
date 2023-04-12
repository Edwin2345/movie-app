import {useState, useEffect} from 'react';
import results from './tempdata';
import MovieList from '../components/MovieList';
import {useNavigate} from 'react-router-dom';

function SearchPage(){
     
  const [searchTerm, setSearchTerm] = useState('');
  const [trendingResults, setTrendingResults] = useState(results);

  const navigate = useNavigate()


  // make inital request to get trending
  async function fetchTrending(){
    const MY_KEY = process.env.REACT_APP_MY_KEY; 

    const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${MY_KEY}`)
    const responseFinal = await response.json();
    console.log(responseFinal.results);

    setTrendingResults(responseFinal.results)
 }

  //REMOVE IF WANT TO TEST LOCAL
  useEffect(()=>{
    //   fetchTrending();
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [])


  //Naviagte to Resutls Page
  const submitHandler = (event)=>{
    event.preventDefault();
    
    navigate("/results",{state: {searchTerm: searchTerm}});
  }

  //input control
  const changeHandler = (event)=>{
    setSearchTerm(event.target.value)
 }

  return(
  <>
    {/* Header + search */}
    <div className="text-center bg-slate-900 min-h-[40%]  w-fit md:w-full flex items-start justify-center">
      <div className="mt-[5rem]">
          <h1 className="font-extrabold text-transparent ts:ml-3 ts:text-[17vw] text-[18vw] md:text-9xl bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 mb-[4.5rem]">
              MovieLand
          </h1>
          <div>
            <form onSubmit={submitHandler}> 
              <div className="relative flex items-center ts:ml-3">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-6 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                  <input value={searchTerm} onChange={changeHandler} type="search" id="default-search" class="block w-full p-4 pl-10 md:text-[1.1rem] ts:text-[0.7rem] xs:text-[0.8rem] text-gray-900 border border-gray-300 rounded-[15px] bg-gray-50 focus:border-black-500 font-bold" placeholder="Search Movies, TV Shows..." required />
                  <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg md:text-[1.2rem] ts:text-[0.7rem] xs:text-[0.85rem]  px-4 py-2">Search</button> 
            </div>
            </form>
          </div>
          <h2 className="font-thin text-white mt-10 ts:text-[2.5rem]  text-[3rem] md:text-[3rem] w-full">Trending Now</h2>
      </div>
    </div>
    {/* Results list */}
    <div className="text-center bg-slate-900 min-h-[100vh] mx-[8%] lg:mx-[4%] xl:mx-[10%] flex items-start justify-center">
       <div className="mt-11">
            <MovieList data={trendingResults} isTrending={true}/>
        </div>
    </div>
  </>
  )
}

export default SearchPage;