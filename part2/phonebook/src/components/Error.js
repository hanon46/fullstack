const Error = (props) => {
    if (props.message === null) {
        return null
    }
    const errorStyle = {
        fontSize: 25,
        padding: 5,
        color: 'red',
        backgroundColor: 'lightgrey',
        border: 'solid red 3px',
        marginBottom: 10
    }
    return (
        <div className="error" style={errorStyle}>{props.message}</div>
    )
}

export default Error