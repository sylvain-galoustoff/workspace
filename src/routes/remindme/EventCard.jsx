import { IoPencil, IoTrash } from 'react-icons/io5'
import { motion } from 'framer-motion';

import { getTimeFromTimestamp } from '../../helpers/formatDates';
import deleteEvent from '../../usecases/deleteEvent'
import { useRecoilState } from 'recoil';
import toastState from '../../stores/toastState'

function EventCard({ event, animationDelay }) {

    const [toasts, setToasts] = useRecoilState(toastState)

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

    return (
        <motion.div
            className="card event"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", delay: (animationDelay / 10) + .25, duration: .5, ease: 'backIn' }}
        >

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
                <div className="event-delete" onClick={deleteThisEvent}>
                    <IoTrash />
                </div>
            </div>

        </motion.div>
    );
}

export default EventCard