import React from 'react'
import Form from '../eventForm/Form'
import EventList from './eventList/EventList'

function Home() {
    return (
        <div>
            <Form />
            <EventList />
        </div>
    )
}

export default Home