import { useEffect, useState } from "react";
import getAllEvents from '../../usecases/events/getAllEvents'

import EventsGroup from "./EventsGroup";
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

    const renderEventsGroup = Object.keys(events)
        .map(key => <EventsGroup key={key} events={events[key]} motionKey={key} />)

    return (
        <div className="page" id="remind-me">
            <div className="container" id="remind-me-container">

                <div id="reminders-list">
                    <AnimatePresence>
                        {events.length === 0
                            ? <Loader />
                            : renderEventsGroup
                        }
                    </AnimatePresence>
                </div>

                <AddRemindForm />

            </div>
        </div>
    );
}

export default RemindMe