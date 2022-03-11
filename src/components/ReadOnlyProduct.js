import React from 'react'

export const ReadOnlyProduct = ({product,clickEdit,handleDelete,handleChange,deleteSelected}) => {
    const {id,title,category,price,image}= product
   // console.log("indexes",index)
    return (
        <>
            
            <tr>
                <td style={{paddingLeft:"20px"}}>
                <input type="checkbox"  name={product.title}
                    checked={product?.isChecked || false}
                    onChange={handleChange} 
                    />
                </td>
    <td style={{paddingLeft:"20px"}}>
        {id}
    </td>
    <td>
        {title}
    </td>
    <td>
        {category}
    </td>
    <td>
        {price}
    </td>
    <td>
        <img src={image} alt="ll" width="200px" height="200px"/>
    </td>
    <td>
        <button 
        className="btn btn-lg btn-warning"
        onClick={(e)=>clickEdit(e,product)}> EDit</button>
    </td>
    <td>
        <button 
        className="btn btn-lg btn-danger"
        onClick={()=>handleDelete(product.id)}> Delete</button>
    </td>

<div>

</div>
</tr>

        </>
    )
}
