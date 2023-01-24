const AddPerson = (props) => {
    console.log("newName=", props.newName)
    return (
        
        <form onSubmit={props.addName}>

            <div>
                Name: <input value={props.newName} onChange={props.handleNameChange}/>
            </div>

            <div>
                Number: <input value={props.newNumber} onChange={props.handleNumberChange}/>
            </div>

            <button type="submit">Submit</button>

        </form>
    )
}

export default AddPerson