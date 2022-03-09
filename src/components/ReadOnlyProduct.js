import React from 'react'

export const ReadOnlyProduct = ({product,clickEdit,handleDelete,handleChange}) => {
    const {id,title,category,price,image}= product
    return (
        <div>
            
            <tr>
                <td>
                <input type="checkbox"  name={product.title}
                    checked={product?.isChecked || false}
                    onChange={handleChange}
                    />
                </td>
    <td>
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
        <button onClick={(e)=>clickEdit(e,product)}> EDit</button>
    </td>
    <td>
        <button onClick={()=>handleDelete(product.id)}> Delete</button>
    </td>
</tr>
<div>

</div>
        </div>
    )
}
