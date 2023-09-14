import { IoPencil, IoTrash } from 'react-icons/io5'

import { getTimeFromTimestamp } from '../../helpers/formatDates';

function EventCard({ event }) {
    return (
        <div className="card event">

            <div className="event-header">
                <p className="event-name">{event?.name}</p>
                <p className="event-time">{getTimeFromTimestamp(event?.timestamp)}</p>
            </div>

            <p className="event-calendar">{event?.calendar}</p>

            <div className="event-notes">{event?.note}</div>

            <div className="event-actions">
                <div className="event-edit">
                    <IoPencil />
                </div>
                <div className="event-delete">
                    <IoTrash />
                </div>
            </div>

        </div>
    );
}

export default EventCard