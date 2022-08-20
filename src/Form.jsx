import { useState } from 'react'

export default (props) => {
  const [firstName, setFirstName] = useState("Joe")
  const [lastName, setLastName] = useState("Doe")
  const [phone, setPhone] = useState("911")

  return (
    <form className="App" onSubmit={ev => {
      ev.preventDefault()
      props.onSubmit({ firstName, lastName, phone })
    }}>
      <div className="form-group">
        <label>
          First Name
          <input type="text" onChange={ev => setFirstName(ev.target.value)} value={firstName} />
        </label>
      </div>

      <div className="form-group">
        <label>
          Last Name
          <input type="text" onChange={ev => setLastName(ev.target.value)} value={lastName} />
        </label>
      </div>

      <div className="form-group">
        <label>
          Phone
          <input type="text" onChange={ev => setPhone(ev.target.value)} value={phone} />
        </label>
      </div>

      <div className="form-group">
        <button type="submit">Add Person!</button>
      </div>
    </form>
  );
}
