
async function reqTrending(){
   const MY_KEY = process.env.REACT_APP_MY_KEY; 

   const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${MY_KEY}`)
   const  {results} = await response.json();
   console.log(results);
   
   return results;
}


export default reqTrending;