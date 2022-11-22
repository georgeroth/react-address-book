import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"

function ContactsView() {
  const [contact, setContact] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:4000/contacts/${id}`)
     .then(res => res.json())
     .then(data => setContact(data))
 }, [id])

  //TODO: Get the contact to load from the params and fetch.
  //With useEffect, load the contact when params changes
  //and update contact state


  console.log("contact is:", contact)
  if (!contact) {
    return <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  }

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>{contact.street} {contact.city}</p>
      <p>{contact.email || "No email"}</p>
      <p>{contact.linkedin || "No LinkedIn"}</p>
      <p>{contact.twitter || "No Twitter"}</p>
    </div>
  )
}

export default ContactsView