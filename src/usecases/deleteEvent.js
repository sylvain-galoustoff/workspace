import { db } from '../firebase'
import { deleteField, doc, setDoc } from "firebase/firestore";

const deleteEvent = async (timestampNoTime, eventId) => {

    const docRef = doc(db, 'events', timestampNoTime.toString())
    const update = {}
    update[eventId] = deleteField()

    await setDoc(docRef, update, { merge: true })

}

export default deleteEvent