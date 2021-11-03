import React, { useState } from 'react'

function Form(props) {
    // init values for inputs to handle updated form
    const initValues = {
        title: props.title || '',
        description: props.description || '',
        company: props.company || '',
        color: props.color || 'black'
    }

    // state handler for user inputs
    const [eventInfo, setEventInfo] = useState(initValues)
    // destructured state for convenience
    const {title, description, company, color} = eventInfo

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

    return (
        <div>
            <form>
                <input 
                    type= 'text'
                    name= 'title'
                    value= {title}
                    placeholder='Event Title'
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
                <span>Select Color: </span>
                <input 
                    type= 'color'
                    name= 'color'
                    value= {color}
                    onChange={handleChange}
                    required
                />
                <button>Add Event</button>
            </form>
        </div>
    )
}

export default Form