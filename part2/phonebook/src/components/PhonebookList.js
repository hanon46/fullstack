const PhonebookList = (props) =>
{  
    return (
        <table>
            <tbody>
                {props.persons.map( person => {
                    if(person.name.includes(props.filter)) {
                        return (
                            <tr key={person.id}>
                                <td>{person.name}</td>
                                <td>{person.number}</td>
                            </tr>
                        )
                    }
                })}
            </tbody>
        </table>
    )
}

export default PhonebookList