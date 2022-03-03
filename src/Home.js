import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';

const products = [
  {id: '1', name: 'Phone', price: '$399',image:"../logo192.png"},
  {id: '2', name: 'television', price: '$299',image:"../logo512.png"},
  {id: '3', name: 'REfrigrator', price: '$99888',image:""}
]

const Home = () => {
    const [form ,setForm]=useState({
        id:0,
        name:"",
        city:"",
        image:""
    })
  const history = useHistory();
  const handleClick = (data) => {
    history.push({
      pathname: '/about',
      state: data
    });
  }
  const handleClick1 = (data) => {
    history.push({
      pathname: '/about',
      state: data
    });
  }
  const handleSubmit=(e)=>{
     // e.prventDefault()
     e.preventDefault();
      console.log(form)
  }
  const changeImage=(e)=>{
    try {
    //   setImage(
    //     URL.createObjectURL(e.target.files[0])
    //  )
    setForm({...form,image:URL.createObjectURL(e.target.files[0])})
    }
    catch {
      return 0
    }
    

  }
  return (
      <>
    <ul>
      {products.map(product=>(
        <li
          key={product.id}
          onClick={()=>handleClick(product)}
        >
          {product.name}
        </li>
      ))
}
    </ul>

    <form onSubmit={handleSubmit}>
        <label>
            Id:
        </label><br/>
        <input type="number" value={form.id} onChange={(e)=>
        setForm({...form,id:e.target.value})}/><br/>
         <label>
            name:
        </label><br/>
        <input type="text" value={form.name} onChange={(e)=>
        setForm({...form,name:e.target.value})}/><br/>
        <label>
            city:
        </label><br/>
        <input type="text" value={form.city} onChange={(e)=>
        setForm({...form,city:e.target.value})}/><br/>
        
        <label for="file">Please select am image</label>
               
           
<input type="file" onChange={changeImage} name="image" id="file"/>




  
   <img src={form.image} width="200px" height="190px" style={form.image === "" ? {display: "none"} : {position:"absolute",top:"200px" ,right:"270px",
   
   }}
   
   />
   <br/>
   <br/>
   <button onClick={()=>handleClick1(form)}>SEnd form to about page</button>
        <input type="submit" value="submit data"/>

    </form>
    </>
  )
}

export default Home;