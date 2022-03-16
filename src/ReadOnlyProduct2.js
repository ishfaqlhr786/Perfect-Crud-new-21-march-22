import React from 'react'

export const ReadOnlyProduct2 = ({product,clickEdit,handleDelete,handleChange,deleteSelected}) => {
    const {id,name,city}= product
   // console.log("indexes",index)
    return (
        <>
            
            <tr>
                <td style={{paddingLeft:"20px"}}>
                <input type="checkbox" 
              className="  custom-control-input"
                name={product.name}
                    checked={product?.isChecked || false}
                    onChange={handleChange} 
                    />
                </td>
    <td style={{paddingLeft:"20px"}}>
        {id}
    </td>
    <td>
        {name}
    </td>
    <td>
        {city}
    </td>
   
    <td>
        <button 
        className="btn btn-lg btn-warning"
        onClick={(e)=>clickEdit(e,product.id,product)}> <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
    </td>
    <td>
        <button 
        className="btn btn-lg btn-danger"
        onClick={(e)=>handleDelete(e,product.id)}> <i class="fa fa-trash" aria-hidden="true"></i></button>
    </td>

<div>

</div>
</tr>

        </>
    )
}
