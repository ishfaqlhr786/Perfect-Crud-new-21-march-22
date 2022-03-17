import React,{useMemo,useState,useEffect} from 'react'
import { useTable,usePagination,useRowSelect,ReactTableDefaults } from "react-table";
import PaginatedItems  from './PaginatedItems'

export const ReadOnlyProduct2 = ({list,product,clickEdit,handleDelete,handleChange,deleteSelected}) => {
    const {id,name,city}= product
   // console.log("indexes",index)
   const [data,setData  ]=useState([{
    id:1,name:"asad",city:"lhr",isChecked:false},
    {id:2,name:"asim",city:"lhr",isChecked:false},
   { id:3,name:"aslam",city:"lhr",isChecked:false},
    {id:4,name:"asad",city:"lhr",isChecked:false},
    {id:5,name:"asad",city:"lhr",isChecked:false},
   { id:6,name:"asad",city:"lhr",isChecked:false},
    {id:7,name:"asghar",city:"lhr",isChecked:false},
   { id:8,name:"asghar",city:"lhr",isChecked:false},
   { id:9,name:"asad",city:"lhr",isChecked:false},
   { id:10,name:"asad",city:"lhr",isChecked:false},
    {id:11,name:"arif",city:"lhr",isChecked:false},
    {id:12,name:"arif",city:"lhr",isChecked:false},
   { id:13,name:"asad",city:"lhr",isChecked:false},
   { id:14,name:"asad",city:"lhr",isChecked:false},
    {id:15,name:"asad",city:"lhr",isChecked:false},
])


   
  
   
    return (
        <>
            
         <tr>
                <td style={{paddingLeft:"20px"}}>
                <input type="checkbox" 
              className="  custom-control-input"
                name={product.name}
                    checked={product?.isChecked || false}
                    onChange={handleChange} 
                    />
                </td>
    <td style={{paddingLeft:"20px"}}>
        {id}
    </td>
    <td>
        {name}
    </td>
    <td>
        {city}
    </td>
   
    <td>
        <button 
        className="btn btn-lg btn-warning"
        onClick={(e)=>clickEdit(e,product.id,product)}> <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
    </td>
    <td>
        <button 
        className="btn btn-lg btn-danger"
        onClick={(e)=>handleDelete(e,product.id)}> <i class="fa fa-trash" aria-hidden="true"></i></button>
    </td>

<div>

</div>
</tr> 

    

        </>
    )
}
