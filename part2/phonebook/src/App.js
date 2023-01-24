import { useState } from 'react'
import PhonebookList from './components/PhonebookList'
import Filter from './components/Filter'
import AddPerson from './components/AddPerson'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    persons.some(person => person.name === newName) 
    ? alert(`${newName} already exists`) 
    : setPersons(persons.concat({name: newName, number: newNumber, id: persons.length+1})) 
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)

  }

  return (
    <div>

      <h1>Phonebook</h1>
      <Filter handleChange={handleFilterChange}/>

      <h2>Add new number</h2>
      <AddPerson 
      addName={addName} 
      newName={newName}
      handleNameChange={handleNameChange}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <PhonebookList persons={persons} filter={filter}/>
    </div>
  )
}

export default App