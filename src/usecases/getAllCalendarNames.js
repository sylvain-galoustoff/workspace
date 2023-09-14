import { db } from '../firebase'
import { collection, onSnapshot } from "firebase/firestore";

const getAllCalendarNames = callback => {
    const unsubscribe = onSnapshot(collection(db, "calendars"), snapshot => {
        let calendars = []
        snapshot.forEach((doc) => {
            calendars.push(doc.data().name)
        });
        callback(calendars)
    });

    return unsubscribe
}

export default getAllCalendarNames