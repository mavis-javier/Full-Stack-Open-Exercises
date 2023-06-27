import { useState, useEffect } from 'react'
import _ from 'lodash'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import phonebookService from './services/phonebook'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('');
  const [newNum, setNewNum] = useState('');
  
  // notification state
  const [notify, setNotify] = useState(null);

  // sets new name from input
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  // set new phone number from input
  const handleNumChange = (event) => {
    setNewNum(event.target.value);
  }

  // utilizes phonebook service
  useEffect(() => {
    phonebookService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  // adds name to person state
  const addName = (event) => {
    event.preventDefault();    
    const personObj = {
        name: newName,
        number: newNum
    }
    // determines if name is in persons[] already
    var isAdded = false; 

    // check if name exists for each object -- O(n) time
    persons.map((person) => {      
        if(_.isEqual(person.name, personObj.name)) {
            isAdded = true;
        } 
    })
    
    // add new contact to setPersons state
    if(!isAdded) {
      setPersons(persons.concat(personObj))
      phonebookService
        .create(personObj)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson.data))
          setNewName('')  // *
          setNewNum('')   // *    
          setNotify(`Added ${newName}`)
          setTimeout(() => {
            setNotify(null)
          }, 5000)                
        })        
    } else {
        alert(`${newName} is already added to the phonebook`)
    }    
}


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notify} />
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