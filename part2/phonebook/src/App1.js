import { useState } from 'react'
import _ from 'lodash'

const App1 = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      phoneNum: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  // adds name to person state
  const addName = (event) => {
    event.preventDefault();    
    const personObj = {
      name: newName,
      phoneNum: newNum
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

  // set new phone number from input
  const handleNumChange = (event) => {
    setNewNum(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNum} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map(person => <p>{person.name} {person.phoneNum}</p>)}</div>
    </div>
  )
}

export default App1;