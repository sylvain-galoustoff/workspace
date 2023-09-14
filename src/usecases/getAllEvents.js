import { db } from '../firebase'
import { collection, onSnapshot } from "firebase/firestore";

const getAllEvents = callback => {

    const now = Date.now()

    const unsubscribe = onSnapshot(collection(db, 'events'), snapshot => {
        let events = []
        snapshot.forEach(doc => {
            const docData = Object.values(doc.data())
            // if (doc.id > now) {
            events.push(docData)
            // }
        })
        callback(events)
    })

    return unsubscribe
}

export default getAllEvents