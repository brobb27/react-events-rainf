import axios from 'axios'
import React, { useContext, useState } from 'react'
import { EventContext } from '../../eventContext'
import Form from '../../eventForm/Form'
import './Event.css'

function EventComponent({event}) {
    // import context variabls needed
    const { setEventList } = useContext(EventContext)

    // state to determine if component is being edited
    const [isEditing, setEdit] = useState(false)
    // toggle Edit
    function toggleEdit() {
        setEdit(prevState => !prevState)
    }

    // delete request
    function deleteEvent() {
        axios.delete(`https://rf-json-server.herokuapp.com/events/${event.id}`)
        .then(res => {
            console.log(res)
            setEventList(prevList => prevList.filter(savedEvent => savedEvent.id !== event.id))
            alert(`You have removed ${event.name} from the event line up.`)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='componentContainer'>
            {isEditing === false ?
            <>
                <div>
                    <h2>{event.name}</h2>
                    <div className='eventDetails'>
                        <h4>Description</h4>
                        <p>{event.description}</p>
                        <h4>Company</h4>
                        <p>{event.company}</p>
                    </div>
                </div>
                <button onClick={toggleEdit}>Update</button>
                <button onClick={deleteEvent}>Delete</button>
            </>
            :
            <>
                <h2>{event.name}</h2>
                <Form 
                    name= {event.name}
                    description= {event.description}
                    company= {event.company}
                    color= {event.color}
                    id= {event.id}
                    isEditing = {isEditing}
                    setEdit = {setEdit}
                    class= 'updateForm'
                />
                <button onClick={toggleEdit} className='cancleButton'>Cancel</button>
            </>
            }
        </div>
    )
}

export default EventComponent