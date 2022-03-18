import React ,{useState,useEffect,useMemo} from 'react'
import data from './mock-data.json'
import {nanoid}  from 'nanoid'
import './App.css'
//import {SelectAll} from './components/SelectAll'
import axios from 'axios'
import { ReadOnlyRow } from './components/ReadOnlyRow'
import { EditableRow } from './components/EditableRow'
import { ReadOnlyProduct2 } from './ReadOnlyProduct2'
import { Editproduct2 } from './Editproduct2'
import { SelectAll2 } from './SelectAll2'
import { MultipleSelect } from './components/MultipleSelect'
import { useTable,usePagination,useRowSelect,ReactTableDefaults } from "react-table";
import PaginatedItems from './PaginatedItems'
import PaginatedItems1 from './PaginatedItems1'


export const ApiList2 = () => {
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
  //   const [data,setData  ]=useState([{
  //     name:"asad",city:"lhr",isChecked:false},
  //     {name:"asim",city:"lhr",isChecked:false},
  //    { name:"aslam",city:"lhr",isChecked:false},
  //     {name:"asad",city:"lhr",isChecked:false},
  //     {name:"asad",city:"lhr",isChecked:false},
  //    { name:"asad",city:"lhr",isChecked:false},
  //     {name:"asghar",city:"lhr",isChecked:false},
  //    { name:"asghar",city:"lhr",isChecked:false},
  //    { name:"asad",city:"lhr",isChecked:false},
  //    { name:"asad",city:"lhr",isChecked:false},
  //     {name:"arif",city:"lhr",isChecked:false},
  //     {name:"arif",city:"lhr",isChecked:false},
  //    { name:"asad",city:"lhr",isChecked:false},
  //    { name:"asad",city:"lhr",isChecked:false},
  //     {name:"asad",city:"lhr",isChecked:false},
  // ])
   // const [list,setList]= useState([])
    const [limit,setLimit]=useState(5)
   
   
   
//     const fetchData=async()=>{
//         // const res= await axios.get(``)
//       const res = await axios.get(
//         `https://fakestoreapi.com/products`
//       )
//       console.log(res.data)
//       setList(res.data)
//           // console.log(list.data)
//           // return res.data;
 
//      }
//      useEffect(()=>{
//        fetchData()
//      },[])
//    console.log(list)
 

    
  
  


//alert(productId)




// const changeImage1=(e)=>{
//     try {
//       setForm({ ...form, image: URL.createObjectURL(e.target.files[0]) }

//       )
//     }
//     catch {
//       return 0
//     }


//   }
//   const changeImageEdit1 = (e) => {
//     try {
//       setEditForm({ ...editform, image: URL.createObjectURL(e.target.files[0]) }

//       )
//     }
//     catch {
//       return 0
//     }


//   }
  
 



 

    return (
        <div className="container22" style={{width:"100vw"}} >
        <div style={{ marginLeft: "200px" }}>



        </div>



        <br />


                
                
                    
 <div >
          <ul style={{ display: "flex", listStyleType: "none" }}>
            <li style={{ position: "relative", top: "350px" }}>
              <select
                value={limit}
                name="limit"
                
                onChange={(e) => {
                  setLimit(e.target.value)
                }}
              >
                <option value="select Limit">Select Limit</option>
                <option value="5">5</option>
                <option value="10">
                  10
                  </option>
                <option value="15">15</option>
              </select>
            </li>

            {/* <li>
              <PaginatedItems items={data} itemsPerPage={limit}
                initialPage={1}


              />
            </li> */}
             <li>
              <PaginatedItems1 items={data} 
              
              itemsPerPage={limit}
                initialPage={1}


              />
            </li>

          </ul>
   </div>
    

  

                               
                      
          
         
         
         


            
           
        </div>
    )
}
