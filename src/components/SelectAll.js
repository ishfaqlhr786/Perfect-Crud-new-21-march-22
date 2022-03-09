import React from 'react'

export const SelectAll = ({list,handleChange}) => {
    return (
        <div>
            <h2>
<input type="checkbox" onChange={handleChange}
name="Allselect"
checked={list.filter((item)=>item?.isChecked !== true ).length < 1}
/>
<label>Select all</label>
</h2>
        </div>
    )
}



