import MovieCard from "./MovieCard";

function MovieList({data, isTrending}){
    
    const movieList= [];

    const copyData = [...data];

    if( isTrending ){
       for(let j=0; j<2; ++j){
         let movieRow = [];


         for(let i=0; i<4; ++i){
            while(copyData[i].media_type === 'person'){
             copyData.splice(i,1);
            }
           movieRow.push(<MovieCard movie={copyData[i]} key={copyData[i].id}/>)
         }

         movieList.push(movieRow);

         for(let i=0; i<4; ++i){
          copyData.shift();
         }
       }
    }

    const movieFinal = movieList.map((row,index)=>{
        return(
            <div className= "flex flex-col lg:flex-row" key={index}>{row}</div>   
        )
    })

    return(
       <>
         {movieFinal}
       </>
    )
}


export default MovieList