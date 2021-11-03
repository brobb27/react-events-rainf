import React, { useState, useContext } from 'react'
import './Form.css'
import axios from 'axios'
import { EventContext } from '../eventContext'

function Form(props) {
    // context to set event list after post/put request
    const { setEventList } = useContext(EventContext)

    // init values for inputs to handle updated form
    const initValues = {
        name: props.name || '',
        description: props.description || '',
        company: props.company || '',
        color: props.color || '#000000',
        // come back to solving init value of color
    }

    // state handler for user inputs
    const [eventInfo, setEventInfo] = useState(initValues)
    // destructured state for convenience
    const {name, description, company, color} = eventInfo

    // handle change for input boxes
    function handleChange(e) {
        const {name, value} = e.target
        setEventInfo(prevInfo => {
            return {
                ...prevInfo,
                [name]: value
            }
        })
    }

    // handle addEvent
    function addEvent(e) {
        e.preventDefault()
        axios.post(`https://rf-json-server.herokuapp.com/events/`, eventInfo)
            .then(res => {
                // console.log(res.data)
                const newEvent = res.data
                setEventList(prevList => [...prevList, newEvent])
            })
            .catch(err => console.log(err))
        setEventInfo(initValues)
    }

    // handle updateEvent
    function updateEvent(e) {
        e.preventDefault()
        axios.put(`https://rf-json-server.herokuapp.com/events/${props.id}`, eventInfo)
            .then(res => {
                console.log(res.data)
                const updatedEvent = res.data
                setEventList(prevList => prevList.map(event => event.id !== props.id ? event : updatedEvent))
            })
        props.setEdit(false)
    }

    return (
        <div className={props.class}>
            <form 
                onSubmit={props.isEditing === false ? addEvent : updateEvent}
            >
                <input 
                    type= 'text'
                    name= 'name'
                    value= {name}
                    placeholder='Event Name'
                    onChange={handleChange}
                    required
                />
                <input 
                    type= 'text'
                    name= 'description'
                    value= {description}
                    placeholder='Event Description'
                    onChange={handleChange}
                    required
                />
                <input 
                    type= 'text'
                    name= 'company'
                    value= {company}
                    placeholder='Company Name'
                    onChange={handleChange}
                    required
                />
                <p>Select Color</p>
                <input 
                    type= 'color'
                    name= 'color'
                    value= {color}
                    onChange={handleChange}
                    required
                />
                <button>{props.isEditing === false ? 'Add Event' : 'Update Event'}</button>
            </form>
        </div>
    )
}

export default Form