import React ,{useState,useEffect} from 'react'
import data from './mock-data.json'
import {nanoid}  from 'nanoid'
import './App.css'
//import {SelectAll} from './components/SelectAll'
import axios from 'axios'
import { ReadOnlyRow } from './components/ReadOnlyRow'
import { EditableRow } from './components/EditableRow'
import { ReadOnlyProduct1 } from './ReadOnlyProduct1'
import { Editproduct1 } from './Editproduct1'
import { SelectAll1 } from './SelectAll1'
import { MultipleSelect } from './components/MultipleSelect'
export const ApiList1 = () => {
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
   const [list,setList]= useState([])
   const newList=[]
   const [productId,setProductId]= useState(0)
   const [name,setName]=useState("Name")
   const [form,setForm]= useState({
    id:0,
    name:"",
  //  price:0,
    city:""
})
   const [editform,setEditForm]= useState({
     //  id:0,
   id:0,
    name:"",
   // price:0,
    city:""
})
const [searchId,setSearchId] = useState(0)
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
 
const clickEdit=(e,id,product)=>{
    e.preventDefault()
    setProductId(id)
    const editData={
       id:product.id,
        name:product.name,
      //  price:product.price,
        city: product.city,
       // image:product.image


    }
    
   // const newArray=[...data]
  //   const ind= newArray.findIndex(el=>el.id=productId)
  //   newArray[ind]= editData
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
const  handleEditFormSubmit=(e)=>{
  e.preventDefault();
  console.log(editform)

//   await axios.put(`https://fakestoreapi.com/products/${productId}`, editform)
//     .then(res => {
//       console.log(res.data)
      const newproducts = [...data]
      // console.log(contactId)

      const index = newproducts.findIndex((product) => product.id === productId)
      console.log(index)
      //newproducts[index] = res.data;
      newproducts[index]= editform
    //  const newList=[editform]
      //setList(newList)
   //   const newList=[editform]
      setData(newproducts)
      setProductId(null)
   // })
}
const handleDelete=(e,productid)=>{
  e.preventDefault()
  console.log(productid)

//   await axios.delete(`https://fakestoreapi.com/products/${productid}`)
//     .then(res => {
//       console.log(res.data)

      const newList = [...data];
      console.log(productid)
      const index = newList.findIndex((product) => product.id === productid)
      newList.splice(index, 1)
      setData(newList)

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
    // const res=await axios.post(`https://fakestoreapi.com/products/`,form)
    // console.log(res.data)
    
    let arr=[...data,form]
   // arr.push(res.data)
    setData(arr)
  
   

}


const changeImage1=(e)=>{
    try {
      setForm({ ...form, image: URL.createObjectURL(e.target.files[0]) }

      )
    }
    catch {
      return 0
    }


  }
  const changeImageEdit1 = (e) => {
    try {
      setEditForm({ ...editform, image: URL.createObjectURL(e.target.files[0]) }

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
      let tempUser = data.map(item => {
        return { ...item, isChecked: checked }
      })
      setData(tempUser)
    } else {
      let tempUser = data.map(item => item.name === name? { ...item, isChecked: checked } : item)

      setData(tempUser)




    }

  }
 
const deleteSelected = (e) => {
  e.preventDefault()

  const arrIds = []
  const newList = [...data]
 
  const a = data.filter((item) => item?.isChecked === true)
  console.log("checked array", a)

  for (let i = 0; i < a.length; i++) {
    const ind = newList.findIndex(p => p.id === a[i].id)
    console.log(ind)
    newList.splice(ind, 1)
    setData(newList)
  }



  }

const handleSearch=(e,id)=>{
    e.preventDefault()
  console.log("search clicked")
  console.log("id is", id)
  //const newList=[]
 data.map(el=>
    el.id === parseInt(id )? newList.push(el): el
    )
    setData(newList)
  }
 // console.log(newList)
  
const handleSearchByName=(e,name)=>{
  e.preventDefault();
  console.log(name)
//   const res = await axios.get(
//     `https://fakestoreapi.com/products/category/${category}`
//   )
//   console.log(res.data)
  const a = data.filter((item) => item?.name === name)
  var newList=[...data]
  for(let i=0;i<data.length;i++){
    const a = newList.filter((item) => item?.name === name)
    console.log(a)
    let newList1= a;
    console.log(newList1)
    setData(newList1)
  }
//     var newList=[...data]
//     const a = newList.filter((item) => item?.name === name)
//    console.log(a)
//   newList.replace(a)
//  console.log(newList)
//   //newList.push(...res.data)
  
//   setData(newList)
  //setData(newList1)
}
 

    return (
        <div className="container22" style={{width:"100vw"}} >
             <div style={{marginLeft:"200px"}}>
                   
                  <span>
                  
                  <button 
                  className="btn btn-lg btn-danger"
                  onClick={deleteSelected}>Multiple checked delete
                  <i class="fa fa-trash" aria-hidden="true"></i></button>
                  </span>  

                     </div>
                     <form >
                       
                       <label className="custom-control-label">Search by id</label>
                       <input type="number" 
                       className="form-control" name="searchId" onChange={(e)=>setSearchId(e.target.value)}
                       value={searchId} />
                       <button 
                       className="btn btn-md btn-warning" 
                       onClick={(e)=>handleSearch(e,searchId)}><i className="fa fa-search-plus" 
                       style={{fontSize:"20px"}}
                       aria-hidden="true"></i></button>
                       <br/>
                       <label className="custom-control-label">Search by Category</label>
                       <input type="text" 
                        className="form-control"
                       value={name} onChange={(e)=>setName(e.target.value)}/>
                       <button 
                       className="btn btn-md btn-warning"
                       onClick={(e)=>handleSearchByName(e,name)}><i className="fa fa-search-plus" 
                       style={{fontSize:"20px"}}
                       aria-hidden="true"></i></button>
                     </form>
         <form onSubmit={handleEditFormSubmit} > 
        
                     <br/>
                     <table border="10px" width="80%"style={{margibTop:"100px",marginLeft:"20px"}} 
                     cellPadding="20px"
                     >
                <tr style={{backgroundColor:"gray"}}>
                    <th style={{paddingLeft:"20px"}}>
                    {/* <SelectAll1 list={data} handleChange={handleChangeChk} /> */}
                    <SelectAll1 list={data}   handleChange={handleChangeChk} />
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
                        Change
                    </th>
                    <th style={{paddingLeft:"20px"}}>
                        Remove
                    </th>
                </tr>
                    
                
                
                    {
                       
                       data.map((product,index)=>
                           
(<>
 
{
productId === product.id?   (<Editproduct1 editform={editform}
handleEditForm={handleEditForm}
handleCancel={handleCancel}
//changeImageEdit={changeImageEdit}

/>) : 

(<ReadOnlyProduct1 product={product} index={index} clickEdit={clickEdit}
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
            
            <h2>Add new User</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <label className="custom-control-label">ID</label>
                <input type="text" 
                 className="form-control"
                name="id" required="required" value={form.id}
                onChange={handleChange}
                />
              <label className="custom-control-label">Name</label>
                <input type="text" 
                 className="form-control"
                name="name" required="required" value={form.name}
                onChange={handleChange}
                />
                <label className="custom-control-label">City</label>
                <input type="text" 
                 className="form-control"
                name="city" required="required" value={form.city}
                onChange={handleChange}
                />
                {/* <label className="custom-control-label">Price</label>
                <input type="number"
                 className="form-control"
                name="price" required="required" value={form.price}
                onChange={handleChange}
                /><br/> */}
                 {/* <div style={{position:"relative", top:"100px",left:"500px"}}>
                 <label for="file">Please select am image</label>
               </div>
                <input type="file" onChange={changeImage} name="form.image" id="file"

/>


  <div>
  
   <img src={form.image} width="200px" height="190px" style={form.image === "" ? {display: "none"} : {position:"relative",bottom:"300px",left:"300px"
   
   }}
   
   />
   
   </div> */}
                <button 
                className="btn btn-md btn-success"
                type="submit">Add
                <i class="fa fa-plus-square" aria-hidden="true"></i></button>
            </form>
           
        </div>
    )
}
