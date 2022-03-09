import React ,{useState,useEffect} from 'react'
import data from './mock-data.json'
import {nanoid}  from 'nanoid'
import './App.css'
//import {SelectAll} from './components/SelectAll'
import axios from 'axios'
import { ReadOnlyRow } from './components/ReadOnlyRow'
import { EditableRow } from './components/EditableRow'
import { ReadOnlyProduct } from './components/ReadOnlyProduct'
import { Editproduct } from './components/Editproduct'
import { SelectAll } from './components/SelectAll'
import { MultipleSelect } from './components/MultipleSelect'
export const ApiList = () => {
   const [list,setList]= useState([])
   const [productId,setProductId]= useState(null)
   const [form,setForm]= useState({
    title:"",
    category:"",
    price:0,
    image:""
})
   const [editform,setEditForm]= useState({
     //  id:0,
    title:"",
    category:"",
    price:0,
    image:""
})

    const fetchData=async()=>{
        // const res= await axios.get(``)
         const res = await axios.get(
             `https://fakestoreapi.com/products`
           )
           console.log(res.data)
          setList(res.data)
          // console.log(list.data)
          // return res.data;
 
     }
     useEffect(()=>{
fetchData()
     },[])
   console.log(list)
 
const clickEdit=(e,product)=>{
    e.preventDefault()
    setProductId(product.id)
    const editData={
        id:product.id,
        title:product.title,
        price:product.price,
        category: product.category,
        image:product.image


    }
    setEditForm(editData)
    //console.log(productId)
   
}
const handleCancel=()=>{
    setProductId(null)
}
const handleEditForm=(event)=>{
    event.preventDefault()
    
    setEditForm({...editform,[event.target.name]: event.target.value})


}
const  handleEditFormSubmit=async(e)=>{
    e.preventDefault();
    console.log(editform)
    // const EditContact={
    //     id:productId,
    //     title:editform.title,
    //     category:editform.category,
    //     price: editform.price,
    //     image:editform.image
    // }
    await   axios.put(`https://fakestoreapi.com/products/${productId}`,editform)
   .then(res => {
       console.log(res.data)
    
   
    //const newItem={
    // const EditContact={
    //     id:productId,
    //     title:editform.title,
    //     category:editform.category,
    //     price: editform.price,
    //     image:editform.image
    // }
    const newproducts=[...list]
   // console.log(contactId)
    
    const index=newproducts.findIndex((product)=> product.id === productId)
    console.log(index)
  newproducts[index]=  res.data;
 //newproducts[index]= editform
  //const newList=[...list,res.data]
  //setList(newList)
setList(newproducts)
setProductId(null)
})
}
const handleDelete=async(productid)=>{
    console.log(productid)

    await   axios.delete(`https://fakestoreapi.com/products/${productid}`)
    .then(res => {
        console.log(res.data)
     
//     const rows=[...data2]
//     console.log(rows)
//     rows.splice(index,1)
//   setData2([...rows])
//  //dispatch(DeleteProduct(id))
//  console.log(data2)



    const newList=[...list]
    console.log(productid)
    const index=newList.findIndex((product)=> product.id === productid)
    newList.splice(index,1)
    setList(newList)
})
}
//alert(productId)
console.log(productId)
const handleChange=(e)=>{
    e.preventDefault()
    setForm({...form,[e.target.name]:e.target.value})
}
const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log("form data is=",form)
    const res=await axios.post(`https://fakestoreapi.com/products/`,form)
    console.log(res.data)
    
    let arr=[...list,res.data]
   // arr.push(res.data)
    setList(arr)
  
   

}


const changeImage=(e)=>{
    try {
      setForm({...form,image:URL.createObjectURL(e.target.files[0])}
        
     )
    }
    catch {
      return 0
    }
    

  }
  const changeImageEdit=(e)=>{
    try {
      setEditForm({...editform,image:URL.createObjectURL(e.target.files[0])}
        
     )
    }
    catch {
      return 0
    }
    

  }
  const handleChangeChk = (e) => {
    const { name, checked } = e.target;
    console.log(name)
    console.log(checked)
    if (name === "Allselect") {
      let tempUser = list.map(item => {
        return { ...item, isChecked: checked }
      })
      setList(tempUser)
    } else {
      let tempUser = list.map(item => item.title === name? { ...item, isChecked: checked } : item)
      setList(tempUser)
    }

  }
  const DeleteAll=async()=>{

    await   axios.delete(`https://fakestoreapi.com/products`)
    .then(res => {
        console.log(res.data)
     
//     const rows=[...data2]
//     console.log(rows)
//     rows.splice(index,1)
//   setData2([...rows])
//  //dispatch(DeleteProduct(id))
//  console.log(data2)



    // const newList=[...list]
    // console.log(productid)
    // const index=newList.findIndex((product)=> product.id === productid)
    // newList.splice(index,1)
    // setList(newList)
   
    
  })
}
    return (
        <div className="container1">
            
         <form onSubmit={handleEditFormSubmit}> 
            
            <table cellSpacing="5px" cellPadding="20px" width="500px">
                <thead>
                    <tr >
                     <th>
                     <SelectAll list={list} handleChange={handleChangeChk} />
                     </th>
                        <th>Title</th>
                        <th>category</th>
                        <th>price</th>
                        <th>pic</th>
                       
                    </tr>
                    </thead>
                    <tbody>
                
                
                    {
                       
                       list.map(product=>
                            // const { id,name,address,city}=user;
   
//const {id,title, category,price,image}= product
(<>
{/* <MultipleSelect product={product} handleChange={handleChangeChk} /> */}
{
productId === product.id?   (<Editproduct editform={editform}
handleEditForm={handleEditForm}
handleCancel={handleCancel}
changeImageEdit={changeImageEdit}

/>) : (<ReadOnlyProduct product={product} clickEdit={clickEdit}
handleDelete={handleDelete}

handleChange={handleChangeChk}
/>)
}

    </>)
)
}
                               
                      
            
              </tbody>
            </table>
            </form>
            
            <h2>Add new Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" required="required" value={form.title}
                onChange={handleChange}
                />
                <input type="text" name="category" required="required" value={form.category}
                onChange={handleChange}
                />
                <input type="number" name="price" required="required" value={form.price}
                onChange={handleChange}
                /><br/>
                 <div style={{position:"relative", top:"100px",left:"500px"}}>
                 <label for="file">Please select am image</label>
               </div>
                <input type="file" onChange={changeImage} name="form.image" id="file"

/>


  
   <img src={form.image} width="200px" height="190px" style={form.image === "" ? {display: "none"} : {position:"absolute",bottom:"100px" ,right:"600px",
   
   }}
   
   />
                <button type="submit">Add</button>
            </form>
            <button onClick={()=>DeleteAll}>Delete All</button>
        </div>
    )
}
