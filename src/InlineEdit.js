import React ,{useState} from 'react'
import data from './mock-data.json'
import {nanoid}  from 'nanoid'
import './App.css'
import { ReadOnlyRow } from './components/ReadOnlyRow'
import { EditableRow } from './components/EditableRow'
export const InlineEdit = () => {
    const [contacts,setContacts]= useState(data)
    console.log(contacts)
    const [form,setForm]= useState({
        name:"",
        address:"",
        city:""
    })
    const [editform,setEditForm]= useState({
        name:"",
        address:"",
        city:""
    })
    const [contactId,setContactId]=useState(null)
    const handleChange=(e)=>{
        e.preventDefault()
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleEditForm=(event)=>{
        event.preventDefault()
        // const FieldName= event.target.getAttribute('name');
        // const FieldValue= event.target.value;
        // const newFormData= {...editform}
        // newFormData[FieldName]= FieldValue;
        // setEditForm(newFormData)
        setEditForm({...editform,[event.target.name]: event.target.value})


    }
    const handleCancel=()=>{
        setContactId(null)
    }
    const handleDelete=(userid)=>{
        const newContacts=[...contacts]
        console.log(userid)
        const index=newContacts.findIndex((contact)=> contact.id === userid)
        newContacts.splice(index,1)
        setContacts(newContacts)
    }
    const handleEditFormSubmit=(e)=>{
        e.preventDefault();
        console.log(editform)
        const EditContact={
            id:contactId,
            name:editform.name,
            address:editform.address,
            city: editform.city
        }
        const newcontacts=[...contacts]
        console.log(contactId)
        
        const index=newcontacts.findIndex((contact)=> contact.id === contactId)
        console.log(index)
        newcontacts[index]=  EditContact;
setContacts(newcontacts)
setContactId(null)

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("form data is=",form)
        const newContact={
            id:nanoid(),
            name:form.name,
            address: form.address,
            city: form.city
        }
        const newContacts=[...contacts,newContact]
        setContacts(newContacts)

    }
    const handleEditClick=(e,contact)=>{
        e.preventDefault()
        setContactId(contact.id)
        const formValues={
            name:contact.name,
            address: contact.address,
            city: contact.city
        }
        setEditForm(formValues)
    }
    return (
        <div className="container1">
            <form onSubmit={handleEditFormSubmit}>
            <table cellSpacing="5px" cellPadding="20px" width="500px">
                <thead>
                    <tr >
                     
                        <th>Nmae</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Action</th>
                       
                    </tr>
                    </thead>
                    <tbody>
                
                
                    {
                       
                       contacts.map((user=>(
                            // const { id,name,address,city}=user;
                            // return(
                                <>
                               {

contactId === user.id? (<EditableRow
    editform={editform} handleEditForm={handleEditForm}
/>) :(<ReadOnlyRow user={user}
handleEditClick={handleEditClick}
handleCancel={handleCancel}
handleDelete={handleDelete}
/>)
                                }
                                
                                
                                
                                
                                {/* <tr key={id}>
                                    
                                    <td>{name}</td>
                                    <td>{address}</td>
                                    <td>{city}</td>
                                </tr> */}
                                </>
                            )))
                       // })
                            }
                  
            
              </tbody>
            </table>
            </form>
            <h2>Add new contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" required="required" value={form.name}
                onChange={handleChange}
                />
                <input type="text" name="address" required="required" value={form.address}
                onChange={handleChange}
                />
                <input type="text" name="city" required="required" value={form.city}
                onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
