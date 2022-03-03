import React,{useState} from 'react'

export const Users = () => {
    const users=[
        {id:1,name:"asad",city:"lahore"},
        {id:2,name:"asim",city:"multan"},
        {id:3,name:"asghar",city:"karachi"}
    ]
    const handleEdit1=(index)=>{
console.log(index)
    }
    const handleClickEditRow=(index)=>{
        console.log(index)
        
    }
    
    return (
        <div>
            <table border="5">
                <caption>Users data</caption>
                <tr>
                    <td>
                        Id:
                    </td>
                    <td>
                        Name:
                    </td>
                    <td>
                        City:
                    </td>
                </tr>
            {
                users.map((user,index)=>{
                    const {id,name,city}=user
                    return(<>
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{city}</td>
                       
                            <td>
                            
    <button onClick={() => handleClickEditRow(index)}>Edit</button>

                            </td>
                    </tr>
                    </>)
                })
            }
            </table>
        </div>
    )
}
