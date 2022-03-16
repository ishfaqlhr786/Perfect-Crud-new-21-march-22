


// import TooLtip from '@material-ui/core/TooLtip';
// //import Paper from '@material-ui/core/Paper';//
// //import Grid from '@material-ui/core/Grid';
// import IconButton from '@material-ui/core/IconButton';

// import EditIcon from '@material-ui/icons/Edit';

// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useTable,usePagination,useRowSelect,ReactTableDefaults } from "react-table";
//import Pagination from "./pagination";
import './App.css';

function Table({ columns, data }) {
 // const [initialState] = useState(5);
 //const columnDefaults = {...ReactTableDefaults.columns, headerClassName: 'text-left-classname'}
  const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   page,
   pageOptions,
   state,
   setPageSize
   ,
   
   nextPage,
   previousPage,
   canNextPage,
   canPreviousPage,
   prepareRow,
   selectedFlatRows
 } = useTable(
  {
   columns,
   data,
   
initialState :{pageSize : 5}
   

 },
 


 usePagination,useRowSelect
 
 )
 const {pageIndex,pageSize} = state;
 /*
 const columns = [
    ...
    {
       Header: '',
       Cell: row => (
           <div>
               <button onClick={() => handleEdit(row.original)}>Edit</button>
               <button onClick={() => handleDelete(row.original)}>Delete</button>
           </div>
       )
    }
]*/
 return (
   <>
<center>
   <table {...getTableProps()}  style={{color:"red",border:"2px solid green",width:"600px"}}>
     <thead>
       {headerGroups.map(headerGroup => (
         <tr {...headerGroup.getHeaderGroupProps()}>
           {headerGroup.headers.map(column => (
             <th {...column.getHeaderProps()}>{column.render('Header')}</th>
           ))}
         </tr>
       ))}
     </thead>
     <tbody {...getTableBodyProps()}>
       {page.map((row, i) => {
         prepareRow(row)
         return (
           <tr {...row.getRowProps()}  >
             {row.cells.map(cell => {
               return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
             })}
           </tr>
         )
       })}
     </tbody>
    
   </table>
  
   

   <div>
       <span>
           Page{' '}
           <strong>
           {pageIndex + 1} of {pageOptions.length}
           </strong>{' '}
       </span>
       <select Value={pageSize} onChange={e=>{setPageSize(e.target.value)}}>
{
    [5,10,15].map(pageSize=>(
        <option key={pageSize} value={pageSize}>
            show {pageSize}
        </option>
    ))
}
       </select>
   {/* <TooLtip title="Previous page">
        <IconButton aria-label="Previous" color="secondary" onClick={()=>previousPage()} disabled={!canPreviousPage}>
     <ArrowBackIosIcon/>
        </IconButton>
      </TooLtip>
   <TooLtip title="Next page">
        <IconButton aria-label="Next" color="secondary" onClick={()=>nextPage()} disabled={!canNextPage}>
     <ArrowForwardIosIcon/>
        </IconButton>
      </TooLtip> */}
      {
          <>
          <button color="secondary" onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button  color="secondary" onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
    </>
    }
     
   
   </div>
   </center>
   </>
 )
}
 
function ReactPage() {
// const [data, setData] = useState([]);
 const data=[{
     id:1,name:"asad",city:"lhr"},
     {id:2,name:"asad",city:"lhr"},
    { id:3,name:"asad",city:"lhr"},
     {id:4,name:"asad",city:"lhr"},
     {id:5,name:"asad",city:"lhr"},
    { id:6,name:"asad",city:"lhr"},
     {id:7,name:"asad",city:"lhr"},
    { id:8,name:"asad",city:"lhr"},
    { id:9,name:"asad",city:"lhr"},
    { id:10,name:"asad",city:"lhr"},
     {id:11,name:"asad",city:"lhr"},
     {id:12,name:"asad",city:"lhr"},
    { id:13,name:"asad",city:"lhr"},
    { id:14,name:"asad",city:"lhr"},
     {id:15,name:"asad",city:"lhr"},
 ]
 
//  useEffect(() => {
//  //  axios("http://api.tvmaze.com/search/shows?q=girls")
//    axios("https://restcountries.eu/rest/v2/all")
//      .then((res) => {
//        setData(res.data);
//      })
//      .catch((err) => console.log(err))
//  }, []);
 
 const columns = useMemo(
   () => [
     {
       Header: "Countries list",
       columns: [
         {
           Header: "ID",
           accessor: "id"
         },
         {
            Header: "Name",
            accessor: "name"
          },
        //  {
        //     Header: "Nmae",
        //     accessor: "name",
        //     Cell: tableProps => (
        //       <img
        //         src={tableProps.row.original.flag}
        //         width={60}
        //         alt='Player'
        //       />
        //     )
           
           
            
        //     // render:
        //     // item => <img src='item.flag' alt="" border="3"
        //     //  height="100" width="100" />

        //    // Cell: row =>   <img src={{flag}} alt="pk"/>
        // },
          {
            Header: "City",
           // Header: () => <div style={{ textAlign: "right" }}>Capital</div>,
            accessor: "city",
          
           // Cell: row =>   <img src={{flag}} alt="pk"/>
          },
       
       /*
         {
           Header: "Type",
           accessor: "show.type"
         },
         {
           Header: "Language",
           accessor: "show.language"
         },
         {
           Header: "Official Site",
           accessor: "show.officialSite",
           Cell: ({ cell: { value } }) => value ? <a href={value}>{value}</a> : "-"
         },
         {
           Header: "Rating",
           accessor: "show.rating.average",
           Cell: ({ cell: { value } }) => value || "-"
         },
         {
           Header: "Status",
           accessor: "show.status",
         },
         {
           Header: "Premiered",
           accessor: "show.premiered",
           Cell: ({ cell: { value } }) => value || "-"
         },
         {
           Header: "Time",
           accessor: "show.schedule.time",
           Cell: ({ cell: { value } }) => value || "-"
         },*/
         {
            Header: 'action',
            Cell: row => (
                <div>
                    {/* <TooLtip title="Edit Row">
        <IconButton aria-label="Edit" color="secondary" >
     <EditIcon/>
        </IconButton>
      </TooLtip>
      <TooLtip title="Delete Row">
        <IconButton aria-label="Delete" color="secondary" >
     <DeleteIcon/>
        </IconButton>
      </TooLtip> */}
                  
                </div>
            )
         }
       ]
     }
   ]
 )
 
 return (
   <div className="App">
     <h1><center>Countries List</center></h1>
     
     <Table columns={columns} data={data} />
     
   </div>
 );
}
 



export default ReactPage