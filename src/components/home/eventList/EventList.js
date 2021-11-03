import React, { useContext, useEffect, useState } from 'react'
import { EventContext } from '../../eventContext'
import axios from 'axios'
import EventComponent from './EventComponent'

function EventList() {
    // context values needed for EventList components
    const {eventList, setEventList} = useContext(EventContext)
    const [requestFailed, setRequestStatus] = useState(false)

    // get request function for reusability if needed
    function getEventList() {
        axios.get(`https://rf-json-server.herokuapp.com/events/`)
            .then(res => {
                // console.log(res.data)
                setEventList(res.data)
            })
            .catch(err => {
                console.log(err)
                setRequestStatus(true)
            })
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
            {requestFailed === false ?
            eventComponents :
            <h1>Sorry, It looks like we are having trouble retrieving your event list. Please refresh the page. If the issue persists please reach out to our support team.</h1>
            }
        </div>
    )
}

export default EventList