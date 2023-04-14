function ResultsHeader({searchTerm}){
   return(
    <div className="text-left min-h-[40%]  w-full flex items-center justify-center text-white mt-[6%] mb-[3vw]">
            <h1 className="font-thin  text-[1.2rem] xs:text-[1.34rem]  sd:text-[1.5rem] md:text-[2.1rem] lg:text-[2.5rem] text-white-500 max-w-[90%] truncate ...">
                  {`Showing Results for:\u00A0\u00A0`}<span className="font-bold">{searchTerm}</span>
            </h1>
    </div>
   )

}

export default ResultsHeader;