import {MdSearchOff} from 'react-icons/md'

function NoResults(){
  return(
    <div className='flex flex-col items-center justify-center mt-12'>
        <div className='text-[4rem] text-white'><MdSearchOff/></div>
        <h1 className='text-white font-bold text-[2.5rem]'>No Results Found</h1>
    </div>
  )
}


export default NoResults;