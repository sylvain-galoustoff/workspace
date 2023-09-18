import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase'

const getAllEvents = callback => {

    const now = Date.now()

    const unsubscribe = onSnapshot(collection(db, 'events'), snapshot => {
        let events = []
        snapshot.forEach(doc => {
            const docData = Object.values(doc.data())
            if (doc.id > now) {
                docData.sort((a, b) => {
                    return a.timestamp - b.timestamp
                })
                events.push(docData)
            }
        })
        callback(events)
    })

    return unsubscribe
}

export default getAllEvents