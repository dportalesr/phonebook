import { useState } from 'react'
import Form from "./Form"
import Directory from "./Directory"

function App() {
  const [persons, setPersons] = useState([])

  function addPerson(person) {
    setPersons([
      ...persons,
      person
    ])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>PhoneBook</h3>
        <Form onSubmit={addPerson} />
        <Directory persons={persons} />
      </header>
    </div>
  );
}

export default App;
