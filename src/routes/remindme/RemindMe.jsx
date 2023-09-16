import { useEffect, useState } from "react";
import getAllEvents from '../../usecases/getAllEvents'

import EventsOfTheDay from "./EventsOfTheDay";
import AddRemindForm from "./AddRemindForm";
import Loader from "../../components/loader/Loader";
import { AnimatePresence } from "framer-motion";

function RemindMe() {

    const [events, setEvents] = useState([])

    useEffect(() => {
        const unsubscribe = getAllEvents(data => {
            setEvents(data)
        })
        return () => unsubscribe()
    }, [])

    const renderEventsByDate = Object.keys(events)
        .map(key => <EventsOfTheDay key={key} events={events[key]} motionKey={`motion-key-${key}`} />)

    return (
        <div className="page" id="remind-me">
            <div className="container">

                <div id="reminders-list">
                    <AnimatePresence>
                        {events.length === 0
                            ? <Loader />
                            : renderEventsByDate
                        }
                    </AnimatePresence>
                </div>

                <AddRemindForm />

            </div>
        </div>
    );
}

export default RemindMe