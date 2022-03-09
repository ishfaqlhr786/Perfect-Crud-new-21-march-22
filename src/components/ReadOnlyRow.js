import React from 'react'
import '../App.css'
export const ReadOnlyRow = ({user,handleEditClick,handleDelete}) => {
    const {id,name,address,city}= user;
    return (
        <div className="container">
         
       
      
            <tr key={id} style={{position:"relative",width:"50%"}}>
                <td>{name}</td><td>{address}</td>
                <td >{city}</td>
                <td >
                    <button onClick={(event)=>handleEditClick(event,user)}>Edit</button>
                    {/* <button onClick={handleDelete}>Delete</button> */}
                </td>
                <td>
                    <button onClick={()=>handleDelete(id)}>Delete</button>
                </td>
               

            </tr>
            
        </div>
    )
}
