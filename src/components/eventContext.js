import React, { useState, useEffect } from 'react'

const EventContext = React.createContext()

function EventContextProvider({children}) {
    // state handler for event list
    const [eventList, setEventList] = useState([])

    // sorts event list whenever there is a change made
    useEffect(() => {
        eventList.sort((a, b) => (a.company > b.company) ? 1 : ((b.company > a.company) ? -1 : 0))
    }, [eventList])

    return (
        <EventContext.Provider value={{eventList, setEventList}}>
            {children}
        </EventContext.Provider>
    )
}

export {EventContext, EventContextProvider}