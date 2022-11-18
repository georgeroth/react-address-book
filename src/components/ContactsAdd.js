import { useState } from "react"
import { useNavigate } from "react-router-dom";

function ContactsAdd(props) {
  const { setContacts, contacts } = props

  const handleInput = (e) => {
    if (e.target.name === "firstName"){
      console.log("firstName entered!")
    } else if (e.target.name === "lastName"){
      console.log("lastName entered!")
    } else if (e.target.name === "street"){
      console.log("street entered!")
    } else if (e.target.name === "city"){
      console.log("city entered!")
    } 
  }

  //TODO: Implement controlled form
  //send POST to json server on form submit

  return (
    <form className="form-stack contact-form">
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" required onChange={handleInput}/>

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" name="lastName" type="text" required onChange={handleInput}/>

      <label htmlFor="street">Street:</label>
      <input id="street" name="street" type="text" required onChange={handleInput}/>

      <label htmlFor="city">City:</label>
      <input id="city" name="city" type="text" required onChange={handleInput}/>

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  )
}

export default ContactsAdd
