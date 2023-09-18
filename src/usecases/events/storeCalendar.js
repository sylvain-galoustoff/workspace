import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'

const storeCalendar = async calendarName => {
    const ref = doc(db, 'calendars', calendarName)
    await setDoc(ref, { name: calendarName })
}

export default storeCalendar