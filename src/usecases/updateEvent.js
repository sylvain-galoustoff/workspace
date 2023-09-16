import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

const updateEvent = async event => {

    console.log(event);
    const eventForDb = {
        [event.id]: event
    }
    const docRef = doc(db, 'events', event.timestampNoTime.toString())
    await setDoc(docRef, eventForDb, { merge: true })

}

export default updateEvent