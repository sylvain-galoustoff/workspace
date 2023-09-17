import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase'

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