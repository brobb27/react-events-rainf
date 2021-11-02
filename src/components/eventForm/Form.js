import React, { useState } from 'react'

function Form() {
    // init values for inputs to handle updated form
    const initValues = {

    }

    // state handler for user inputs
    const [eventInfo, setEventInfo] = useState({})

    return (
        <div>
            <form>
                <input 
                    type= 'text'
                    name= 'title'
                    required
                />
                <input 
                    type= 'text'
                    name= 'description'
                    required
                />
                <input 
                    type= 'text'
                    name= 'company'
                    required
                />
                <input 
                    type= 'text'
                    name= 'color'
                    required
                />
            </form>
        </div>
    )
}

export default Form