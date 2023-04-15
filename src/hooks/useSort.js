import {useState} from 'react';


function useSort(data, columnConfig){

    //CREATE STATE
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
 
 
    //HANDLE CLICK TO SET SORT STATE
    const changeSortColumn = (label) => {
      //click on diff column  -> go to asc afetr settign column RIGHT AWAY
      if(sortBy && label !== sortBy){
         setSortBy(label);  
         setSortOrder('asc');
         return;
      }
       setSortOrder((currSO)=>{
         if(currSO === null){
           setSortBy(label);  
           return 'desc';
         }
         else if(currSO === 'desc'){
             setSortBy(label);  
             return 'asc';
         }
         else if(currSO === 'asc'){ 
             setSortBy(null);
             return null;
         }
       })
     }

   ///SORT DATA
   let sortedData = data;
   if( (sortBy !== null) && (sortOrder !== null)){
        //find correct sort function
        const {sortValue} = columnConfig.find((column)=> column.label === sortBy)

        sortedData = [...data].sort((a,b)=>{
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;
             
            //string
            if( typeof valueA === 'string'){
                return valueA.localeCompare(valueB) * reverseOrder;
            }
            //numerical
            else{
               return (valueA - valueB)*reverseOrder; 
            }
        })
   }
 
     return {sortBy, sortOrder, changeSortColumn, sortedData}
 }


 export default useSort;
 