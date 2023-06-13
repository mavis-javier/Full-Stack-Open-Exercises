import { useState } from 'react'
import _ from 'lodash'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  // adds name to person state
  const addName = (event) => {
    event.preventDefault();    
    const personObj = {
      name: newName
    }

    // determines if name is in persons [] already
    var isAdded = false; 

    // check if name exists for each object -- O(n) time
    persons.map((person) => {      
      if(_.isEqual(person.name, personObj.name)) {
        isAdded = true;
      } 
    })
    
    if(!isAdded) {
      setPersons(persons.concat(personObj));
    } else {
      alert(`${newName} is already added to the phonebook`)
    }
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