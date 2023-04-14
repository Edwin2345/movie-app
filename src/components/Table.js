import { Fragment } from "react";

function Table({data, columnConfig, keyFn}){

    const rows = data.map((entry)=>{

        const rowData = columnConfig.map((config, index)=>{
          let bold = (index === 0) ? 'font-[600] text-[1.09rem]' : ''
          return (
          <td className={`p-[1.2rem] border-r-2 min-w-[10%] text-center ${bold}`} key={`${config.render(entry)}`}>
            {config.render(entry)}
          </td>
          )
        })

        return(
            <tr className='border-b border-x-2 font-thin text-[0.8rem] bg-slate-700 xs:text-[1.0rem]' key={keyFn(entry)}>
               {rowData}
            </tr>
        )
    })

    const headers = columnConfig.map((column)=>{
        if(column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }
        return <th key={column.label}>{column.label}</th>
    })


    return (
       <table className="table-auto border-spacing-2 max-w-fit lg:min-w-[70%] text-white">
           <thead>
              <tr className="border-b-2 font-extrabold text-[0.8rem] xs:text-[1.3rem]">
                {headers}
              </tr>
           </thead>
           <tbody>
                {rows}
           </tbody>
       </table>
    )
}

export default Table;