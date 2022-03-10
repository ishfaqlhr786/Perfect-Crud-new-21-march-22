import React from 'react'

export const SelectAll = ({list,handleChange}) => {
    return (
        <div>
            <h2>
<input type="checkbox" onChange={handleChange}
className="btn btn-sm btn-success"
name="Allselect"
checked={list.filter((item)=>item?.isChecked !== true ).length < 1}
/>

</h2>
        </div>
    )
}



