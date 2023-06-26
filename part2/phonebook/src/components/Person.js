import axios from "axios";
import phonebookService from "../services/phonebook";

const Person = ({person}) => {
    const deletePerson = () => {
        phonebookService.remove(person.id)
    }
    return (
        <div key={person.name}>
			{person.name} {person.number}
            <form onSubmit={deletePerson}>
                <button type="submit">delete</button>                
            </form>            
		</div>
    )
}

export default Person;