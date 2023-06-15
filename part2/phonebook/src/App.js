import { useState } from "react";
import _ from 'lodash'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      phoneNum: '040-1234567'
    }
  ]) 

  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  
  // sets new name from input
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  // set new phone number from input
  const handleNumChange = (event) => {
    setNewNum(event.target.value);
  }

  // adds name to person state
  const addName = (event) => {
    event.preventDefault();    
    const personObj = {
        name: newName,
        phoneNum: newNum
    }
    // determines if name is in persons[] already
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


  return (
    <div>
      <h2>Phonebook</h2>

      <h3>Add a new</h3>
      <PersonForm
				onSubmit={addName}
				onNameChange={handleNameChange}
				onNumChange={handleNumChange}
				newName={newName}
				newNum={newNum}
			/>

      <h3>Numbers</h3>
      <Persons 
        persons={persons}
      />
      
    </div>
  )
}

export default App;