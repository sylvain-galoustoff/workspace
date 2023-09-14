import { useEffect, useState } from "react";

import { getFullDateStringFromTimestamp } from "../../helpers/formatDates";

import EventCard from "./EventCard";

function EventsOfTheDay({ events }) {

    const [timestamp, setTimestamp] = useState('')

    useEffect(() => {
        const currentTimestamp = events[0]?.timestamp
        setTimestamp(currentTimestamp)
    }, [events])

    const renderEvents = Object.keys(events)
        .map(key => <EventCard key={key} event={events[key]} />)

    return (
        <div className="events-list">
            <h3 className="date">{timestamp && getFullDateStringFromTimestamp(timestamp)}</h3>
            {renderEvents}
        </div>
    );
}

export default EventsOfTheDay