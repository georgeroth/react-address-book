import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";

function ContactsAdd(props) {
  const initialNewContact = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    email: "",
    linkedin: "",
    twitter: ""
  }
  const { setContacts, contacts, submitted, setSubmitted } = props
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
    } else if (e.target.name === "email"){
      const newContactContainer = {... newContact, email: e.target.value}
      setNewContact(newContactContainer)
    } else if (e.target.name === "linkedin"){
      const newContactContainer = {... newContact, linkedin: e.target.value}
      setNewContact(newContactContainer)
    } else if (e.target.name === "twitter"){
      const newContactContainer = {... newContact, twitter: e.target.value}
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
    setNewContact(initialNewContact)
    setSubmitted(true)
  }

  return (
    <>
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

        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required onChange={handleInput} value={newContact.email}/>

        <label htmlFor="street">LinkedIn:</label>
        <input id="linkedin" name="linkedin" type="text" required onChange={handleInput} value={newContact.linkedin}/>

        <label htmlFor="city">Twitter:</label>
        <input id="twitter" name="twitter" type="text" required onChange={handleInput} value={newContact.twitter}/>

        <div className="actions-section">
          <button className="button blue" type="submit">
            Create
          </button>
        </div>
      </form>
      {console.log("Submitted down here is", submitted)}
      {submitted && (<><p className="success">Contact added successfully.</p><p>You can add another one or return to the <Link to="/">contact list</Link>.</p></>)}
    </>
  )
}

export default ContactsAdd
