


import React, { useEffect, useState ,useCallback} from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { SelectAll2 } from './SelectAll2'
import {Editproduct2}  from './Editproduct2'
import {nanoid} from 'nanoid'
import './App.css'
// Example items, to simulate fetching from another resources.
//const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems ,handleChange,items,handleDelete,deleteSelected
,handleEditFormSubmit,handleEditForm,clickEdit,productId,handleCancel,editform,handleSearch,handleSearchByName
}) {
  const [data,setData]= useState([...items])
  const [name,setName]=useState("Name")
   
 const [searchId,setSearchId] = useState(0)
  console.log(data)
 
    console.log(productId)
    const [pid,setpId]  = useState(0)
  return (
    <>
    <div className='container-fluid' style={{textAlign:"center",backgroundColor:"#C4E538"}}>
    <form >
                       <table>
                         <tr><td>
                       <label className="custom-control-label">Search by id</label></td>
                       <td>
                       <input type="number" 
                       className="form-control1" name="searchId" onChange={(e)=>setSearchId(e.target.value)}
                       value={searchId} /></td>
                       <td>
                       <button 
                       className="btn btn-md btn-warning" 
                       onClick={(e)=>handleSearch(e,searchId)}><i className="fa fa-search-plus" 
                       style={{fontSize:"20px"}}
                       aria-hidden="true"></i></button>
                       </td>
                       </tr>
                       <tr>
                         <td>
                       <label className="custom-control-label">Search by Name</label></td>
                       <td>
                       <input type="text" 
                        className="form-control1"
                       value={name} onChange={(e)=>setName(e.target.value)}/></td>
                       <td>
                       <button 
                       className="btn btn-md btn-warning"
                       onClick={(e)=>handleSearchByName(e,name)}><i className="fa fa-search-plus" 
                       style={{fontSize:"20px"}}
                       aria-hidden="true"></i></button></td>
                       </tr>
                       </table>
                     </form>
    <span>
                  
                  <button 
                  className="btn btn-lg btn-danger"
                  onClick={(e)=>deleteSelected(e)}>Delete selected rows
                  <i class="fa fa-trash" aria-hidden="true"></i></button>
                  </span>  
                  <form onSubmit={handleEditFormSubmit} >
       <table width="700px" border="10" style={{marginLeft:"400px",borderRadius:"20%"}} 
       cellSpacing={6} cellPadding={6}>
               <tr style={{backgroundColor:"grey"}}>
                   <th style={{paddingLeft:"20px"}}>
                   <SelectAll2 list={currentItems}   handleChange={handleChange} />
                   </th>
                   <th>
                       id
                   </th>
                   <th>
                       Name
                   </th>
                   <th>
                       City
                   </th>
                   <th>Edit</th>
                   <th>Remove</th>
               </tr>
      { currentItems &&
        currentItems?.map((item) => (
          <>
        {
productId === item.id?   (<Editproduct2 
  editform={editform}
handleEditForm={handleEditForm}
handleCancel={handleCancel}
//changeImageEdit={changeImageEdit}

/>) : 
          
          
               <tr style={{backgroundColor:"lightgray",border:"solid grey 5px"}}>
                    <td style={{paddingLeft:"20px"}}>
                <input type="checkbox" 
              className="  custom-control-input"
                name={item.id}
                    checked={item?.isChecked || false}
                    onChange={handleChange} 
                    />
                </td>
                   <td >
                       {item.id}
                   </td>
                   <td>
                       {item.name}
                   </td>
                   <td>
                       {item.city}
                   </td>
                 
   <td>
        <button 
        className="btn btn-lg btn-warning"
        onClick={(e)=>clickEdit(e,item.id,item)}> <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
    </td>
    <td>
        <button 
        className="btn btn-lg btn-danger"
        onClick={(e)=>handleDelete(e,item.id)}> <i class="fa fa-trash" aria-hidden="true"></i></button>
    </td>
             
               </tr>
              
               
               
          
          
        }
        
        </>
        ))
      }
     
         </table>
         </form>
         </div>
         
    </>
  );
        
  
  
}

function PaginatedItems1({ items}) {
   console.log(items)
   const [items1,setItems]=useState(items)
   const [name,setName]=useState("Name")
   const [form,setForm]= useState({
   id:0,
    name:"",
  //  price:0,
    city:""
})
const [productId,setProductId]= useState(0)
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([...items]);
  const [pageCount, setPageCount] = useState(1);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  //const [ placeholder,setPlaceHoler]= useState("select rows per page")
  //var [startPage,setstartPage]=  useState(0)  //console.log(startPage)
  const [initialSelected,setSelected]= useState(null)
  const [forcePage,setForcePage]= useState(0)
  const [data,setData]= useState([...items])
  console.log(data)
  const [list,setList]= useState([])
  const [editform,setEditForm]= useState({
    //  id:0,
  id:0,
   name:"",
  // price:0,
   city:""
})
const [limit,setLimit]=useState(5)
//const [itemsPerPage,setItemsPerPage]  = useState(limit)
let itemsPerPage= limit;
  


  useEffect(() => {
    // Fetch items from another resources.
  
    const endOffset =parseInt( itemOffset) +parseInt (itemsPerPage);
    console.log(endOffset)
    console.log(endOffset)
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const current=items
    console.log(current)
    //setCurrenttPage(0)
   // console.log(data.slice(itemOffset, endOffset));
   setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  const handleChangeChk = (e) => {
      const { name, checked } = e.target;
    console.log(name)
    console.log(checked)
    if (name === "Allselect") {
      let tempUser = currentItems.map(item => {
        return { ...item, isChecked: checked }
      })
      setCurrentItems(tempUser)
    } else {
      let tempUser = currentItems.map(item => item.id    === parseInt(name)? { ...item, isChecked: checked } : item)
console.log(tempUser)
      setCurrentItems(tempUser)




    }

  }
  const handleDelete=(e,id)=>{
    e.preventDefault()
   var a=window.confirm("Are you sure to Delete current recod?");
    if(a){
        const newList = [...currentItems];
      //  console.log(productid)
        const index = newList.findIndex((product) => product.id === id)
        newList.splice(index, 1)
        setCurrentItems(newList)
    }
    
  
  }
  const deleteSelected = (e) => {
    e.preventDefault()
    var a=window.confirm("Are you sure to Delete Selected recods?");
    if(a){
    const arrIds = []
    const newList = [...currentItems]
   
    const a = currentItems.filter((item) => item?.isChecked === true)
    console.log("checked array", a)
  
    for (let i = 0; i < a.length; i++) {
      const ind = newList.findIndex(p => p.id === a[i].id)
      console.log(ind)
      newList.splice(ind, 1)
      //setData(newList)
      setCurrentItems(newList)
    }
    }
  
  
    }
    const handleChange=(e)=>{
      e.preventDefault()
      setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
      e.preventDefault()
      console.log("form data is=",form)
      // const res=await axios.post(`https://fakestoreapi.com/products/`,form)
      // console.log(res.data)
      
     // let arr=[...currentItems]
      const newContact={
       // id:nanoid(),
       id: parseInt( form.id),
        name:form.name,
       // address: form.address,
        city: form.city
    }
    const newContacts=[...currentItems,newContact]
    setCurrentItems(newContacts)
    // arr.push(form)
     // setCurrentItems(arr)
     

    alert("New User is Created successfully")
     
  
  }
  const clickEdit=(e,id,item)=>{
    e.preventDefault()
    console.log("edit called")
    setProductId(id)
    console.log(productId)
    const editData={
       id:item.id,
        name:item.name,
      //  price:product.price,
        city: item.city,
       // image:product.image


    }
    setEditForm(editData)
    //console.log(editData)
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
    const newproducts = [...currentItems]
    // console.log(contactId)

    const index = newproducts.findIndex((product) => product.id === productId)
    console.log(index)
    //newproducts[index] = res.data;
    newproducts[index]= editform
  //  const newList=[editform]
    //setList(newList)
 //   const newList=[editform]
    //setData(newproducts)
    setCurrentItems(newproducts)
    setProductId(null)
    alert("Record is updated successfully")
 // })
}
const handleCancel=()=>{
  setProductId(null)
}
  
  const handlePageClick = (event) => {
   let selected = event&& event.selected;

   console.log(selected)
  

    setForcePage( event.selected)
    console.log("force page is",forcePage)
    
    const newOffset=(selected * limit)
   

   console.log("newOffset", newOffset)
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  
    
  }

const handleSearch=(e,id)=>{
  e.preventDefault()
console.log("search clicked")
console.log("id is", id)
const newList=[]
currentItems.map(el=>
  
  el.id === parseInt(id )? newList.push(el): el
  )
  //setData(newList)
  setCurrentItems(newList)
}
// console.log(newList)

const handleSearchByName=(e,name)=>{
e.preventDefault();
console.log(name)
//   const res = await axios.get(
//     `https://fakestoreapi.com/products/category/${category}`
//   )
//   console.log(res.data)
const a = currentItems.filter((item) => item?.name === name)
var newList=[...currentItems]
for(let i=0;i<data.length;i++){
  const a = newList.filter((item) => item?.name === name)
  console.log(a)
  let newList1= a;
  console.log(newList1)
  //setData(newList1)
  setCurrentItems(newList1)
}

}
const handleLimit=(e)=>{
  e.preventDefault()
  setLimit(e.target.value)
  setItemOffset(0)
  
    setForcePage(0);
 
}
  
  return (
    
    <>
    <div className='container-fluid' style={{textAlign:"center",backgroundColor:"#C4E538"}}
    
    
    
    >
      <Items currentItems={currentItems} 
      items={items} handleDelete={handleDelete} deleteSelected={deleteSelected}
      handleEditFormSubmit={handleEditFormSubmit}
      handleEditForm={handleEditForm}
      handleChange={handleChangeChk}
      clickEdit={clickEdit}
      productId={productId}
      handleCancel={handleCancel}
      editform={editform}
      handleSearch={handleSearch}
      handleSearchByName={handleSearchByName}
      
      />
      <div>
       

     
      <ul style={{ display: "flex", listStyleType: "none" ,marginLeft:"400px"}}>
            <li style={{ position: "relative", top: "20px",left:"40px" }}>
              <select
              //  value={limit}
                name="limit"
              //  placeholder={placeholder}
                onChange={e=>handleLimit(e)}
                
              >
                <option value="select Limit">Select Rows on one page</option>
                <option value="5">5</option>
                <option value="10">
                  10
                  </option>
                <option value="15">15</option>
              </select>
            </li>
            <li>
      <ReactPaginate 
      
       pageClassName="page-item"
       pageLinkClassName="page-link"
       previousClassName="page-item"
       previousLinkClassName="page-link"
       nextClassName="page-item"
       nextLinkClassName="page-link"
      breakClassName="page-item"
        breakLabel="..."
        nextLabel="next >"
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageClick}
       

        pageRangeDisplayed={5}
        
        renderOnZeroPageCount={null}

      
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
       // initialPage={initialPage}
       forcePage={forcePage}
     
     / >
       </li>
       </ul>
       
       

   
          
        
      
       
      </div>
 <h2>Add new User</h2>
            <form onSubmit={handleSubmit}>
            <label className="custom-control-label">ID:</label>
                <input type="number" 
                 className="form-control1"
                name="id" required="required" value={form.id}
                onChange={handleChange}
                />
            
              <label className="custom-control-label">Name</label>
                <input type="text" 
                 className="form-control1"
                name="name" required="required" value={form.name}
                onChange={handleChange}
                />
                <label className="custom-control-label">City</label>
                <input type="text" 
                 className="form-control1"
                name="city" required="required" value={form.city}
                onChange={handleChange}
                />
               



  
                <button 
                className="btn btn-md btn-success"
                type="submit">Add
                <i class="fa fa-plus-square" aria-hidden="true"></i></button>
            </form>   
            </div>
    </>
  );
}
export default PaginatedItems1;