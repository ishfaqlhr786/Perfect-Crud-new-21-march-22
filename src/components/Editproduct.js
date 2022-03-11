import React from 'react'
import '../App.css'
export const Editproduct = ({editform,handleEditForm,handleCancel,changeImageEdit}) => {
    return (
        <>
            
                
            <tr style={{width:"100%"}}>
            <td >
                    <input type="number" name="id"  
                    value={editform.id}/>
                </td>
                <td >
                    <input type="text" name="title" required="required"  
                    value={editform.title} onChange={handleEditForm}/>
                </td>
                <td >
                    <input type="text" name="category" required="required" 
                    value={editform.category} onChange={handleEditForm}
                    />
                </td>
                <td>
                    <input type="number" name="price" required="required" onChange={handleEditForm}
                    value={editform.price} />
                </td>
                
                <td>
                    <button 
                    className="btn btn-md btn-success"
                    type="submit">Save<i class="fa fa-plus-square" aria-hidden="true"></i></button>
                   
                </td>
                <td>
                    <button onClick={handleCancel}>cancel</button>
                </td>
                <td>
                
               
               <input type="file" onChange={changeImageEdit} name="editform.image" className="editImage"

/>

</td>

<td>

 
  <img src={editform.image} width="200px" height="190px" style={editform.image === "" ? {display: "none"} : {display:"block"
  
  }}
  
  />
  
                </td>
                
            </tr>
            
            
          
                
        </>
    )
}
