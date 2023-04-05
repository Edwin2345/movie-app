import '../styles/SearchPage.css'

function SearchPage(){

    return(
     <div className="text-center bg-slate-900 min-h-screen flex items-start justify-center">
        <div className="mt-[5rem]">
            <h1 className="font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 mb-[5rem]">
                MovieLand
            </h1>
            <div>
             <form> 
               <div className="relative">
               <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-6 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
           <input type="search" id="default-search" class="block w-full p-4 pl-10 text-[1.2rem] text-gray-900 border border-gray-300 rounded-[15px] bg-gray-50 focus:border-black-500 font-bold" placeholder="Search Movies, TV Shows..." required />
           <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[1.2rem] px-4 py-2">Search</button>
        </div>
                  
               </div>
               
             </form>
            </div>
        </div>
     </div>
    )
}

export default SearchPage;