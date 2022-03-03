import React from 'react'
import '../App.css'
export const EditableRow = ({editform,handleEditForm,handleCancel}) => {
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
                    <input type="text" name="name" required="required" onChange={handleEditForm} 
                    value={editform.name}/>
                </td>
                <td >
                    <input type="text" name="address" required="required" onChange={handleEditForm}
                    value={editform.address}
                    />
                </td>
                <td>
                    <input type="text" name="city" required="required" onChange={handleEditForm}
                    value={editform.city} />
                </td>
                <td>
                    <button type="submit">Save</button>
                   
                </td>
                <td>
                    <button onClick={handleCancel}>cancel</button>
                </td>
                
            </tr>
            </tbody>
            </table>
        </div>
    )
}
