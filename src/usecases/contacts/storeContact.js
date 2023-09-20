import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'

const storeContact = async contact => {

    console.clear()

    console.log('Contact en entrée de la fonction storeEvent :');
    console.log(contact);

    let contactForDb
    const contactId = Date.now()
    if (!contact.id) {
        contact.id = contactId
        contactForDb = {
            [contactId]: contact
        }
    } else {
        contactForDb = {
            [contact.id]: contact
        }
    }


    const docRef = doc(db, 'contacts', contact.company)
    setDoc(docRef, contactForDb, { merge: true })
        .catch(err => console.error(err))

}

export default storeContact