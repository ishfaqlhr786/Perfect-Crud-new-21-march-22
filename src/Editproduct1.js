import React from 'react'
import './App.css'
export const Editproduct1 = ({editform,handleEditForm,handleCancel}) => {
    return (
        <>
            
                
            <tr style={{width:"100%"}}>
            <td >
                    <input type="number" name="id"  
                    value={editform.id}/>
                </td>
                <td >
                    <input type="text" name="name" required="required"  
                    value={editform.name} onChange={handleEditForm}/>
                </td>
                <td >
                    <input type="text" name="city" required="required" 
                    value={editform.city} onChange={handleEditForm}
                    />
                </td>
               
                
                <td>
                    <button 
                    className="btn btn-md btn-success"
                    type="submit">Save<i class="fa fa-plus-square" aria-hidden="true"></i></button>
                   
                </td>
                <td>
                    <button onClick={handleCancel}>cancel</button>
                </td>
              
                
            </tr>
            
            
          
                
        </>
    )
}
