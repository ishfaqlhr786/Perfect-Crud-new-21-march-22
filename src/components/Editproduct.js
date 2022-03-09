import React from 'react'
import '../App.css'
export const Editproduct = ({editform,handleEditForm,handleCancel,changeImageEdit}) => {
    return (
        <div className="container">
            <table width="100%" border="10" cellSpacing="5">
                {/* <thead>
                    <tr>
                     
                        <th>Nmae</th>
                        <th>Address</th>
                        <th>City</th>
                    </tr>
                </thead> */}
                <tbody>
            <tr>
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
                    <button type="submit">Save</button>
                   
                </td>
                <td>
                    <button onClick={handleCancel}>cancel</button>
                </td>
                <td>
                <div style={{position:"relative", top:"100px",left:"500px"}}>
                 <label for="file">Please select am image</label>
               </div>
                <input type="file" onChange={changeImageEdit} name="editform.image" id="file"

/>


  
   <img src={editform.image} width="200px" height="190px" style={editform.image === "" ? {display: "none"} : {position:"absolute",top:"200px" ,right:"270px",
   
   }}
   
   />
                </td>
            </tr>
            </tbody>
            </table>
            
        </div>
    )
}
