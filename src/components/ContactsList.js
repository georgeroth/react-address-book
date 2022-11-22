import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

function ContactsList(props) {
  
  //"contacts" must be passed as prop to this component
  const { contacts, setContacts } = props

  const deleteperson = (contact) => {
    console.log("Delete this dude:", contact)
    fetch(`http://localhost:4000/contacts/${contact.id}`, {
    method: 'DELETE'
    })
    fetch("http://localhost:4000/contacts")
    .then(res => res.json())
    .then(data => setContacts(data))
  }

  return (
    <>
      <header>
        <h2>Contacts</h2>
      </header>
      <ul className="contacts-list">
        {contacts.map((contact, index) => {
          const { firstName, lastName } = contact
          return (
            <li className="contact" key={index}>
              <p>
                {firstName} {lastName}
              </p>
              <p>
                <Link to={`/contacts/${contact.id}`} className="viewlink">View</Link>
                <Link to={`/contacts/edit/${contact.id}`} className="viewlink">Edit</Link>
                <a href="#" onClick={() => {deleteperson(contact)}}>Delete</a>
              </p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ContactsList
