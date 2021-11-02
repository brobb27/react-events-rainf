import React, { useState } from 'react'

const EventContext = React.createContext()

function EventContextProvider({children}) {
    // state handler for event list
    const [eventList, setEventList] = useState([])

    return (
        <EventContext.Provider value={{eventList, setEventList}}>
            {children}
        </EventContext.Provider>
    )
}

export {EventContext, EventContextProvider}