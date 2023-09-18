import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'

const storeContact = async contact => {

    const contactId = Date.now()
    if (!contact.id) {
        contact.id = contactId
    }

    const contactForDb = {
        [contactId]: contact
    }

    const docRef = doc(db, 'contacts', contact.company)
    setDoc(docRef, contactForDb, { merge: true })
        .catch(err => console.error(err))

}

export default storeContact