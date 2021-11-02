import React from 'react'

function EventComponent({event}) {
    return (
        <div>
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <p>{event.company}</p>
            <button>Delete</button>
            <button>Update</button>
        </div>
    )
}

export default EventComponent