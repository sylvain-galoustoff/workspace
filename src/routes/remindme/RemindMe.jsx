import { useEffect, useState } from "react";
import getAllEvents from '../../usecases/getAllEvents'

import EventsOfTheDay from "./EventsOfTheDay";
import AddRemindForm from "./AddRemindForm";

function RemindMe() {

    const [events, setEvents] = useState([])

    useEffect(() => {
        const unsubscribe = getAllEvents(data => {
            setEvents(data)
        })
        return () => unsubscribe()
    }, [])

    const renderEventsByDate = Object.keys(events)
        .map(key => <EventsOfTheDay key={key} events={events[key]} />)

    return (
        <div className="page" id="remind-me">
            <div className="container">

                <div id="reminders-list">
                    {renderEventsByDate}
                </div>

                <AddRemindForm />

            </div>
        </div>
    );
}

export default RemindMe