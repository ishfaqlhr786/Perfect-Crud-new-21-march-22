import React from 'react'

export const MultipleSelect = ({product,handleChange}) => {
    return (
        <div>
            <li >
                    <input type="checkbox"  name={product.title}
                    checked={product?.isChecked || false}
                    onChange={handleChange}
                    />
                    
                    </li>
        </div>
    )
}
