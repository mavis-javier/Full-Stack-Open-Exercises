import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  // adds name to person state
  const addName = (event) => {
    event.preventDefault();
    console.log(event.target);
    const personObj = {
      name: newName
    }
    console.log(personObj);
    setPersons(persons.concat(personObj));
  }

  // sets new name from input
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map(person => <p>{person.name}</p>)}</div>
    </div>
  )
}

export default App;