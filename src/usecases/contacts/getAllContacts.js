import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase'

const getAllContacts = callback => {

    const unsubscribe = onSnapshot(collection(db, 'contacts'), snapshot => {
        let contacts = []
        snapshot.forEach(doc => {
            contacts.push(Object.values(doc.data()))
        })
        callback(contacts)
    })

    return unsubscribe

}

export default getAllContacts