import Table from "./Table"
import useSort from "../hooks/useSort";
import { GoArrowSmallDown, GoArrowSmallUp} from "react-icons/go";


function SortableTable(props){
   const {columnConfig, data} = props;

   const {sortBy, sortOrder, changeSortColumn, sortedData} = useSort(data, columnConfig);

   const sortedConfig = columnConfig.map((column)=>{
      if(!column.sortValue){
        return column;
      }

      return {
      ...column, 
      header: () => (
        <th className="cursor-pointer hover:bg-gray-100" onClick={()=>changeSortColumn(column.label)}>
           <div className="flex items-center p-2">
              {/*render icons*/}
             {getIcons(column.label, sortBy, sortOrder)}
              {column.label}
            </div>
        </th>
      )
      };
   })

   return(
     <div className="w-full flex justify-center items-center">
        <Table {...props} data={sortedData} columnConfig={sortedConfig}/>
     </div>
   )
}

function getIcons(label, sortBy, sortOrder){
    
    //NOT sorting by columns
    if( label !== sortBy ){
      return <div>
         <GoArrowSmallUp/>
         <GoArrowSmallDown/>
      </div>;
    }
    //unsorted
    if( sortOrder === null){
        return  <div>
        <GoArrowSmallUp/>
        <GoArrowSmallDown/>
     </div>;
    }
    //asc
    else if(sortOrder === 'asc'){
        return  <div>
        <GoArrowSmallUp/>
       </div>;
    }
    //desc
    else if(sortOrder === 'desc'){
        return  <div>
        <GoArrowSmallDown/>
       </div>;
    }
    

}

export default SortableTable