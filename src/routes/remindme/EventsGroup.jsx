import { useEffect, useState } from "react";
import { motion } from 'framer-motion'

import { getFullDateStringFromTimestamp } from "../../helpers/formatDates";

import EventCard from "./EventCard";

function EventsGroup({ events, motionKey }) {

    const [timestamp, setTimestamp] = useState('')

    useEffect(() => {
        const currentTimestamp = events[0]?.timestamp
        setTimestamp(currentTimestamp)
    }, [events])

    const renderEvents = Object.keys(events)
        .map(key => <EventCard key={key} event={events[key]} animationDelay={key} />)

    return (
        <motion.div
            className="cards-group"
            key={motionKey}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: .5, ease: 'backIn', when: 'beforeChildren', delay: motionKey / 10 }}
        >
            <h3 className="cards-list-title">{timestamp && getFullDateStringFromTimestamp(timestamp)}</h3>
            {renderEvents}
        </motion.div>
    );
}

export default EventsGroup