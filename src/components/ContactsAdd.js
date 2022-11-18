import { useState } from "react"
import { useNavigate } from "react-router-dom";

function ContactsAdd(props) {
  const initialNewContact = {
    firstName: "",
    lastName: "",
    street: "",
    city: ""
  }
  const { setContacts, contacts } = props
  const [ newContact, setNewContact ] = useState(initialNewContact)
  

  const handleInput = (e) => {

    if (e.target.name === "firstName"){
      const newContactContainer = {... newContact, firstName: e.target.value}
      setNewContact(newContactContainer)
    } else if (e.target.name === "lastName"){
      const newContactContainer = {... newContact, lastName: e.target.value}
      setNewContact(newContactContainer)
    } else if (e.target.name === "street"){
      const newContactContainer = {... newContact, street: e.target.value}
      setNewContact(newContactContainer)
    } else if (e.target.name === "city"){
      const newContactContainer = {... newContact, city: e.target.value}
      setNewContact(newContactContainer)
    } 
    console.log(newContact)
  }

  const submitForm = (e) => {
    e.preventDefault()
    fetch('http://localhost:4000/contacts', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: newContact.firstName,
        lastName: newContact.lastName,
        street: newContact.street,
        city: newContact.city
      })
    })
    const newContactsList = [...contacts, newContact ]
    setContacts(newContactsList)
    setNewContact(initialNewContact);
  }

  // const newContactsList = [...contacts] 
  // newContactsList.push({ newContact })
  // setContacts(newContactList)

  //TODO: Implement controlled form
  //send POST to json server on form submit

  return (
    <form className="form-stack contact-form" onSubmit={submitForm}>
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" required onChange={handleInput} value={newContact.firstName}/>

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" name="lastName" type="text" required onChange={handleInput} value={newContact.lastName}/>

      <label htmlFor="street">Street:</label>
      <input id="street" name="street" type="text" required onChange={handleInput} value={newContact.street}/>

      <label htmlFor="city">City:</label>
      <input id="city" name="city" type="text" required onChange={handleInput} value={newContact.city}/>

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  )
}

export default ContactsAdd
