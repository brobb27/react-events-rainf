import React, { useContext, useEffect } from 'react'
import { EventContext } from '../../eventContext'
import axios from 'axios'
import EventComponent from './EventComponent'

function EventList() {
    // context values needed for EventList components
    const {eventList, setEventList} = useContext(EventContext)

    // get request function for reusability if needed
    function getEventList() {
        axios.get(`https://rf-json-server.herokuapp.com/events/`)
            .then(res => {
                console.log(res.data)
                setEventList(res.data)
            })
            .catch(err => console.log(err))
    }

    // use effect to retreive list on mount
    useEffect(() => {
        getEventList()
        // eslint-disable-next-line
    }, [])

    // map through eventList and create new event component for each one
    const eventComponents = eventList.map(info => <EventComponent key={info.id} event={info} />)

    return (
        <div id='eventListContainer'>
            {eventComponents}
        </div>
    )
}

export default EventList