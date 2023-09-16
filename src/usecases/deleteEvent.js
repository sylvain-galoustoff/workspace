import { db } from '../firebase'
import { deleteDoc, deleteField, doc, getDoc, setDoc } from "firebase/firestore";

const deleteEvent = async (timestampNoTime, eventId) => {

    const docRef = doc(db, 'events', timestampNoTime.toString())
    const update = {}
    update[eventId] = deleteField()

    await setDoc(docRef, update, { merge: true })
    const newDoc = await getDoc(docRef)

    if (Object.keys(newDoc.data()).length === 0) {
        await deleteDoc(docRef)
    }


}

export default deleteEvent