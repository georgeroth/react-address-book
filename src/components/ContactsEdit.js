import { useState, useEffect } from "react"
import { useParams, Link, useNavigate  } from "react-router-dom";

function ContactsAdd(props) {
  const { setContacts, contacts } = props
  const [ contactToEdit, setContactToEdit ] = useState({})
  const { id } = useParams()
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log("sending GET request")
    fetch(`http://localhost:4000/contacts/${id}`)
     .then(res => res.json())
     .then(data => setContactToEdit(data))
  }, [])  


  const handleInput = (e) => {

    if (e.target.name === "firstName"){
      const newContactContainer = {... contactToEdit, firstName: e.target.value}
      setContactToEdit(newContactContainer)
      console.log("First name edited")
    } else if (e.target.name === "lastName"){
      const newContactContainer = {... contactToEdit, lastName: e.target.value}
      setContactToEdit(newContactContainer)
    } else if (e.target.name === "street"){
      const newContactContainer = {... contactToEdit, street: e.target.value}
      setContactToEdit(newContactContainer)
    } else if (e.target.name === "city"){
      const newContactContainer = {... contactToEdit, city: e.target.value}
      setContactToEdit(newContactContainer)
    } else if (e.target.name === "email"){
      const newContactContainer = {... contactToEdit, email: e.target.value}
      setContactToEdit(newContactContainer)
    } else if (e.target.name === "linkedin"){
      const newContactContainer = {... contactToEdit, linkedin: e.target.value}
      setContactToEdit(newContactContainer)
    } else if (e.target.name === "twitter"){
      const newContactContainer = {... contactToEdit, twitter: e.target.value}
      setContactToEdit(newContactContainer)
    } 
  }

  const submitForm = (e) => {
    e.preventDefault()
    fetch(`http://localhost:4000/contacts/${id}`, {
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: contactToEdit.firstName,
        lastName: contactToEdit.lastName,
        street: contactToEdit.street,
        city: contactToEdit.city,
        email: contactToEdit.email,
        linkedin: contactToEdit.linkedin,
        twitter: contactToEdit.twitter
      })
    })
    const newContactsList = contacts.map(contact => {
        if (contact.id === id) {
            return {firstName: contactToEdit.firstName,
            lastName: contactToEdit.lastName,
            street: contactToEdit.street,
            city: contactToEdit.city,
            email: contactToEdit.email,
            linkedin: contactToEdit.linkedin,
            twitter: contactToEdit.twitter}
            }
        return contact
      })
      setContacts(newContactsList)
    navigate("/")
  }

  return (
    <>
      <form className="form-stack contact-form" onSubmit={submitForm}>
        <h2>Create Contact</h2>

        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" name="firstName" type="text" required onChange={handleInput} value={contactToEdit.firstName}/>

        <label htmlFor="lastName">Last Name:</label>
        <input id="lastName" name="lastName" type="text" required onChange={handleInput} value={contactToEdit.lastName}/>

        <label htmlFor="street">Street:</label>
        <input id="street" name="street" type="text" required onChange={handleInput} value={contactToEdit.street}/>

        <label htmlFor="city">City:</label>
        <input id="city" name="city" type="text" required onChange={handleInput} value={contactToEdit.city}/>

        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" onChange={handleInput} value={contactToEdit.email}/>

        <label htmlFor="street">LinkedIn:</label>
        <input id="linkedin" name="linkedin" type="text" onChange={handleInput} value={contactToEdit.linkedin}/>

        <label htmlFor="city">Twitter:</label>
        <input id="twitter" name="twitter" type="text" onChange={handleInput} value={contactToEdit.twitter}/>

        <div className="actions-section">
          <button className="button blue" type="submit">
            Edit
          </button>
        </div>
      </form>
    </>
  )
}

export default ContactsAdd
