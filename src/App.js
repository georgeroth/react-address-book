import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import ContactsList from "./components/ContactsList"
import ContactsAdd from "./components/ContactsAdd"
import ContactsView from "./components/ContactsView"
import "./styles/styles.css"

export default function App() {
  const [contacts, setContacts] = useState([])
  const [submitted, setSubmitted] = useState(false)
  
  useEffect(() => {
    console.log("sending GET request")
    fetch("http://localhost:4000/contacts")
     .then(res => res.json())
     .then(data => setContacts(data))
  }, [submitted])

  const submittedFalse = () => {
    setSubmitted(false)
  }

  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          <li><Link to="/" onClick={submittedFalse}>Contacts List</Link></li>
          <li><Link to="/contacts/add" onClick={submittedFalse}>Add New Contact</Link></li>
          
        </ul>
      </nav>
      <main>
        <Routes>
          <Route
            path="/"
            element={<ContactsList contacts={contacts} />}
          />
          <Route
            path="/contacts/add"
            element={<ContactsAdd contacts={contacts} setContacts={setContacts} submitted={submitted} setSubmitted={setSubmitted}/>}
          />
          <Route
            path="/contacts/:id"
            element={<ContactsView />}
          />
        </Routes>
      </main>
    </>
  )
}
