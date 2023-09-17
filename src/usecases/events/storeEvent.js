import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'

const storeEvent = async event => {

    const eventDateAndTime = new Date(event.timestamp)
    const eventDate = eventDateAndTime.setHours(0, 0, 0, 0) //timestamp

    const eventId = new Date().getTime()
    event.id = eventId
    event.timestampNoTime = eventDate

    const eventForDb = {
        [eventId]: event
    }

    const docRef = doc(db, 'events', eventDate.toString())
    await setDoc(docRef, eventForDb, { merge: true })

}

export default storeEvent