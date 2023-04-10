import {useState} from "react";
import errorImage from './error.png'

function Modal({closeModal, title, movie, year, score, genre}) {
  //set image and default
  const urlImg = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const [imgSrc, setImgSrc] = useState(urlImg);


  //full date
  let date = 'No Date'
  if(movie.first_air_date){
    date = movie.first_air_date;
  }
  else if(movie.release_date){
    date = movie.release_date;
  }
  
  return (
    <>
          <div
            className="justify-center my-3 items-center overflow-x-hidden  fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[70%] md:w-[60%] lg:w-[40%] mx-auto max-h-[95%] my-6 overflow-y-auto">
              {/*content*/}
              <div className="text-white bg-slate-600 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center py-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-[1.3rem] md:text-[1.6rem] lg:text-[1.9rem] text-center font-semibold">
                    {`${title} (${year})`}
                  </h3>
                </div>
                {/* image */}
                <div className="flex items-center justify-center p-5  border-b border-solid border-slate-200 rounded-t">
                <img src={imgSrc}  onError={() => {
                   setImgSrc(errorImage)
                 }}
                 alt={`${movie.title}`}
               />
                </div>
                {/*Summary*/}
                <div className="relative px-6 py-0 flex-auto">
                  <p className="my-2 text-white text-[0.7rem] md:text-[0.9rem] lg:text-[0.95rem] text-justify leading-relaxed">
                    {movie.overview}
                  </p>
                  {/* Info */}
                  <div className="flex flex-col text-left text-[0.75rem] md:text-[0.95rem] lg:text-[1.2rem] text-yellow-500 pb-2 rounded-t">
                    <p>
                      {`Released:\u00A0\u00A0\u00A0${date}`}
                    </p>
                    <p>
                      {`Rating:\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${score}`}
                    </p>
                    <p>
                      {`Genre:\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${genre}`}
                    </p>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center py-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="lg:text-[1.2rem] bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => closeModal()}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  );
}

export default Modal;