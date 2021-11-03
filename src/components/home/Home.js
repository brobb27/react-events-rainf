import React from 'react'
import Form from '../eventForm/Form'
import EventList from './eventList/EventList'
import './Home.css'

function Home() {
    return (
        <div id='homeContainer'>
            <Form isEditing= {false} class='mainForm'/>
            <EventList />
        </div>
    )
}

export default Home