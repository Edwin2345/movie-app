import MovieCard from "./MovieCard";

function MovieList({data, isTrending}){
     // No Results
    if(data.length === 0){
      //Fill in with 404 Error
      return;
    }
    
    //filter entries that are not 'movie' or tv
    const copyData = [...data];
    let cleanData =  copyData.filter((movie)=>{
      return (movie.media_type === 'movie' || movie.media_type === 'tv')
    })
    if(cleanData.length === 0){
      //Fill in with 404 Error
      return;
    }

    //map to components
    const movieComp = cleanData.map((movie)=>{
      return <MovieCard movie={movie} key={movie.id}/>
    })

    //divide into rows of 5 max
    let movieList = [];
    let rowCount = 0;
    const maxRow = isTrending ? 2 : 3;
    while(movieComp.length!==0 && rowCount !== maxRow){

      let movieRow = [];
      let col = Math.min(4, movieComp.length);
      
      for(let i=0; i<col; ++i){
        movieRow.push(movieComp[i]);
      }

      movieList.push(movieRow);
      ++rowCount;

      for(let i=0; i<col; ++i){
        movieComp.shift();
      }

    }
  
    const movieFinal = movieList.map((row,index)=>{
        return(
            <div className= "flex flex-col lg:flex-row mx-[5%]" key={index}>{row}</div>   
        )
    })

    return(
       <>
         {movieFinal}
       </>
    )
}


export default MovieList