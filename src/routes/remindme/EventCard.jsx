import { IoPencil, IoTrash, IoSquareOutline, IoCheckboxOutline } from 'react-icons/io5'
import { motion } from 'framer-motion';

import { useRecoilState, useSetRecoilState } from 'recoil';
import toastState from '../../atoms/toastState'
import editEventState from '../../atoms/editEventState';

import { getTimeFromTimestamp } from '../../helpers/formatDates';

import deleteEvent from '../../usecases/events/deleteEvent'
import updateEvent from '../../usecases/events/updateEvent';

function EventCard({ event, animationDelay }) {

    const [toasts, setToasts] = useRecoilState(toastState)
    const setEditEvent = useSetRecoilState(editEventState)

    const deleteThisEvent = () => {
        const inProgressToast = {
            type: "primary",
            message: "Suppression de l'événement..."
        }
        setToasts([...toasts, inProgressToast])

        deleteEvent(event.timestampNoTime, event.id)
            .then(() => {
                const successToast = {
                    type: "success",
                    message: "événement supprimé !"
                }
                setToasts([...toasts, inProgressToast, successToast])
            })
    }

    const editEvent = () => {
        setEditEvent(event)
    }

    const toggleDone = () => {
        const alterEvent = { ...event }
        alterEvent.done = !alterEvent.done
        updateEvent(alterEvent)
    }

    return (
        <motion.div
            className={`card event ${event?.done && 'done'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", delay: (animationDelay / 10) + .25, duration: .5, ease: 'backIn' }}
        >

            <div className="event-header">
                <p className="event-name" onClick={toggleDone}>
                    {event?.done ? <IoCheckboxOutline /> : <IoSquareOutline />} {event?.name}
                </p>
                <p className="event-time">{getTimeFromTimestamp(event?.timestamp)}</p>
            </div>

            <p className="event-calendar">{event?.calendar}</p>

            <div className="event-notes">{event?.note}</div>

            <div className="event-actions">
                <div className="event-edit" onClick={editEvent}>
                    <IoPencil />
                </div>
                <div className="event-delete" onClick={deleteThisEvent}>
                    <IoTrash />
                </div>
            </div>

        </motion.div>
    );
}

export default EventCard