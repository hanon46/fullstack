const Notification = (props) => {
    if (props.message === null) {
        return null
    }
    const notificationStyle = {
        color: 'green',
        backgroundColor: 'lightgrey',
        padding: 5,
        border: 'solid 3px green',
        marginBottom: 10, 
        fontSize: 25
    }
    return (
        <div className='notification' style={notificationStyle}>{props.message}.</div>
    )
}

export default Notification