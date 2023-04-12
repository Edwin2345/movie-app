import { useState } from "react";
import Modal from "./Modal";
import errorImage from './error.png'

function MovieCard({movie}){
   const {release_date, first_air_date, vote_average} = movie;

   const [showModal, setShowModal] = useState(false);

  //set image and default
   const urlImg = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
   const [imgSrc, setImgSrc] = useState(urlImg);

   // calc stats
   let genre = (movie.media_type === 'movie') ? 'Movie' : 'TV Series';
   let score;
   try {
      score = (vote_average).toFixed(1);
   } catch (error) {
      score = (0.0).toFixed(1)
   }

   //calc year
   let year = 'No Date';
   if(release_date){
      year = `${release_date}`.slice(0,4);
   }
   else if(first_air_date){
      year = `${first_air_date}`.slice(0,4);
   }

   //generate Name
   let title = 'No Title';
   if(movie.title){
      title = movie.title;
   }
   else if(movie.name){
      title = movie.name;
   }


   const subtitle = `${genre} (${year}) `;

   const handleClose = () => {
       setShowModal(false);
   }

   return(
    <div className="mx-5 mb-[4rem] border-4 border-amber-200 rounded-md bg-slate-600 hover:bg-gradient-to-r from-yellow-400 to-pink-600 cursor-pointer w-fit lg:max-w-[22.5%]" >
      <>
         {showModal ? (
         <Modal closeModal={handleClose} movie={movie} title={title} year={year} genre={genre} score={score}/>
         ) : null}
      </>
       <div className="relative h-[5%]" onClick={()=>setShowModal((show)=>{return !show})}  >
            <div className=" p-2 w-full">
                <img src={imgSrc}  onError={() => {
                   setImgSrc(errorImage)
                 }}
                 alt={`${movie.title}`}
               />
            </div>
            <div className="text-[1.4rem] lg:text-[1.2rem] xl:text-[1.5rem] font-[600] text-white mx-2">{movie.title || movie.name}</div>
            <div className="text-[1.2rem] lg:text-[0.8rem] xl:text-[1.2rem] font-thin text-white my-1.5">{subtitle}</div>
            <div className="absolute top-0 right-0 h-8 w-16 text-[1.5rem] lg:h-6 lg:w-10 lg:text-[1.1rem] font-bold text-white bg-blue-500 mt-1 mr-1 pb-9 lg:pb-0 ">{score}</div>
       </div>
    </div>
   )
}


export default MovieCard;