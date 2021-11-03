import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import './EventDetail.css'

function EventDetailPage(props) {
    // use params to get id
    const {eventId} = useParams()

    // state handler for get request
    const [eventInfo, setEventInfo] = useState()
    // state handler for page loading
    const [isLoading, setLoading] = useState(true)

    // get by id request
    function getEventDetails() {
        axios.get(`https://rf-json-server.herokuapp.com/events/${eventId}`)
            .then(res => {
                // console.log(res.data)
                setEventInfo(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    // get request on mount
    useEffect(() => {
        getEventDetails()
        // eslint-disable-next-line
    }, [])

    return (
        <div id='eventDetailContainer'>
            {isLoading === true ?
            <div>
                <h1>Retrieving Event...</h1>
            </div>
            :
            <div id='detailsCon'>
                <h1>{eventInfo.name}</h1>
                <div>
                    <h3>Description</h3>
                    <p>{eventInfo.description}</p>
                    <h3>Company</h3>
                    <p>{eventInfo.company}</p>
                </div>
            </div>
            }
            <Link to='/'>Return To Home</Link>
        </div>
    )
}

export default EventDetailPage