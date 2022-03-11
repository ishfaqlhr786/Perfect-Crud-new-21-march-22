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
      let tempUser = list.map(item =>item.title === name? { ...item, isChecked: checked } : item)
    
      setList(tempUser)
      

      
     
    }

  }
  const DeleteAll=async()=>{
    const arrIds=[]
    list.map(d=>{
      if(d.isChecked){
        arrIds.push(d.id)
        
        axios.delete(`https://fakestoreapi.com/products/${d.id}`).then(data=>{
      console.log(data)
      console.log(arrIds)
  setList([])
  
 

    })
    
      }
     
    })
   
  
}
const deleteSelected = () => {
 
  const arrIds=[]
  const newList=[...list]
  //for(let i=0;i<newList.length;i++){
  list.map(d=>{
    if(d.isChecked){
      arrIds.push(d.id)
      axios.delete(`https://fakestoreapi.com/products/${d.id}`).then(data=>{
    console.log(data)
  //  const index= newList.findIndex(p=>p.id ===d.id)
  //  console.log(index)
  //  newList.splice(index,1)
  //  setList(newList)
 // fetchData();
      })
     
    }
  //for(let i=0;i<arrIds.length;i++){
   
  //}

    })
  const a=  list.filter((item)=>item?.isChecked === true )
    console.log("checked array", a)
  
 for(let i=0;i<a.length;i++){
   const ind= newList.findIndex(p=>p.id === a[i].id)
   console.log(ind)
   newList.splice(ind,1)
   setList(newList)
 }
  


  }

 
// const removerItem=(ids)=>{

     
// }
    return (
        <div className="container-fluid" >
             <div style={{marginLeft:"200px"}}>
                   
                  <span><button 
                  className="btn btn-lg btn-danger"
                  onClick={DeleteAll}>DeleteAll/</button>
                  
                  <button 
                  className="btn btn-lg btn-danger"
                  onClick={deleteSelected}>Multiple checked delete</button>
                  </span>  

                     </div>
         <form onSubmit={handleEditFormSubmit} > 
        
                     <br/>
                     <table border="10px" width="80%"style={{margibTop:"100px",marginLeft:"20px"}} 
                     cellPadding="20px"
                     >
                <tr style={{backgroundColor:"gray"}}>
                    <th style={{paddingLeft:"20px"}}>
                    <SelectAll list={list} handleChange={handleChangeChk} />
                    </th>
                    <th style={{paddingLeft:"20px"}}>
                        id
                    </th>
                    <th style={{paddingLeft:"20px"}}>
                        title
                    </th>
                    <th style={{paddingLeft:"20px"}}>
                        category
                    </th>
                    <th style={{paddingLeft:"20px"}}>
                        price
                    </th>
                    <th style={{paddingLeft:"20px"}}>
                        picture
                    </th >
                    <th style={{paddingLeft:"20px"}}>
                        Change
                    </th>
                    <th style={{paddingLeft:"20px"}}>
                        Remove
                    </th>
                </tr>
                    
                
                
                    {
                       
                       list.map((product,index)=>
                           
(<>

{
productId === product.id?   (<Editproduct editform={editform}
handleEditForm={handleEditForm}
handleCancel={handleCancel}
changeImageEdit={changeImageEdit}

/>) : (<ReadOnlyProduct product={product} index={index} clickEdit={clickEdit}
handleDelete={handleDelete}
deleteSelected={deleteSelected}
handleChange={handleChangeChk}
/>)
}

    </>)
)
}
                               
                      
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


  <div>
  
   <img src={form.image} width="200px" height="190px" style={form.image === "" ? {display: "none"} : {position:"relative",bottom:"300px",left:"300px"
   
   }}
   
   />
   
   </div>
                <button type="submit">Add</button>
            </form>
           
        </div>
    )
}
