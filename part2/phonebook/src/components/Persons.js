import Person from './Person'

const Persons = ({ persons }) => {
    let list = persons;
    return ( 
        <div>
            {list.map((person) => 
                (
                    <Person 
                        key={person.name}
                        person={person}
                    />
                )
            )}
        </div>
    )
}

export default Persons;