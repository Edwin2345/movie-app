

function MovieCard({movie}){

   const {release_date, first_air_date} = movie;


   let year =  (release_date) ? `${release_date}`.slice(0,4) : `${first_air_date}`.slice(0,4);
   let genre = (movie.media_type === 'movie') ? 'Movie' : 'TV Series';

   const subtitle = `${genre} (${year})`;

   return(
    <div className="mx-5 mb-[4rem] border-4 border-amber-200 rounded-md bg-slate-600 hover:bg-gradient-to-r from-yellow-400 to-pink-600 cursor-pointer">
       <div>
        <div className="p-2">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title}`}/>
            </div>
            <div className="text-[1.5rem] font-[600] text-white mx-2">{movie.title || movie.name}</div>
            <div className="text-[1.2rem] font-thin text-white my-1.5">{subtitle}</div>
       </div>
       
    </div>
   )
}


export default MovieCard;