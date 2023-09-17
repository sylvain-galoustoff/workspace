import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'

const storeContact = async contact => {

    const contactId = Date.now()
    if (!contact.id) {
        contact.id = contactId
    }

    const docRef = doc(db, 'contacts', contactId.toString())
    setDoc(docRef, contact, { merge: true })
        .catch(err => console.error(err))

}

export default storeContact