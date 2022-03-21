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
       
          {
            id:16,name:"asad",city:"lhr",isChecked:false},
            {id:17,name:"asim",city:"lhr",isChecked:false},
           { id:18,name:"aslam",city:"lhr",isChecked:false},
            {id:19,name:"asad",city:"lhr",isChecked:false},
            {id:20,name:"asad",city:"lhr",isChecked:false},
           { id:21,name:"asad",city:"lhr",isChecked:false},
            {id:22,name:"asghar",city:"lhr",isChecked:false},
           { id:23,name:"asghar",city:"lhr",isChecked:false},
           { id:24,name:"asad",city:"lhr",isChecked:false},
           { id:25,name:"asad",city:"lhr",isChecked:false},
            {id:26,name:"arif",city:"lhr",isChecked:false},
            {id:27,name:"arif",city:"lhr",isChecked:false},
           { id:28,name:"asad",city:"lhr",isChecked:false},
           { id:29,name:"asad",city:"lhr",isChecked:false},
            {id:30,name:"asad",city:"lhr",isChecked:false},
 
          {
            id:31,name:"asad",city:"lhr",isChecked:false},
            {id:32,name:"asim",city:"lhr",isChecked:false},
           { id:33,name:"aslam",city:"lhr",isChecked:false},
            {id:34,name:"asad",city:"lhr",isChecked:false},
            {id:35,name:"asad",city:"lhr",isChecked:false},
           { id:36,name:"asad",city:"lhr",isChecked:false},
            {id:37,name:"asghar",city:"lhr",isChecked:false},
           { id:38,name:"asghar",city:"lhr",isChecked:false},
           { id:39,name:"asad",city:"lhr",isChecked:false},
           { id:40,name:"asad",city:"lhr",isChecked:false},
            {id:41,name:"arif",city:"lhr",isChecked:false},
            {id:42,name:"arif",city:"lhr",isChecked:false},
           { id:43,name:"asad",city:"lhr",isChecked:false},
           { id:44,name:"asad",city:"lhr",isChecked:false},
            {id:45,name:"asad",city:"lhr",isChecked:false},
           
              {id:46,name:"asim",city:"lhr",isChecked:false},
             { id:47,name:"aslam",city:"lhr",isChecked:false},
              {id:48,name:"asad",city:"lhr",isChecked:false},
              {id:49,name:"asad",city:"lhr",isChecked:false},
             { id:50,name:"asad",city:"lhr",isChecked:false},
              {id:51,name:"asghar",city:"lhr",isChecked:false},
             { id:52,name:"asghar",city:"lhr",isChecked:false},
             { id:53,name:"asad",city:"lhr",isChecked:false},
             { id:54,name:"asad",city:"lhr",isChecked:false},
              {id:55,name:"arif",city:"lhr",isChecked:false},
              {id:56,name:"arif",city:"lhr",isChecked:false},
             { id:57,name:"asad",city:"lhr",isChecked:false},
             { id:58,name:"asad",city:"lhr",isChecked:false},
              {id:59,name:"asad",city:"lhr",isChecked:false},
              {
                id:60,name:"asad",city:"lhr",isChecked:false},
 
            
       
    ])
  
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
         

            {/* <li>
              <PaginatedItems items={data} itemsPerPage={limit}
                initialPage={1}


              />
            </li> */}
             
              <PaginatedItems1 items={data} 
              
             // itemsPerPage={limit}
                initialPage={1}


              />
           
   </div>
    

  

                               
                      
          
         
         
         


            
           
        </div>
    )
}
