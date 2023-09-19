import { db } from '../../firebase'
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";

const deleteEvent = async (contact) => {

    const docRef = doc(db, 'contacts', contact.company.toString())
    let companyContacts = await getDoc(docRef)
    companyContacts = companyContacts.data()
    delete companyContacts[contact.id]

    if (Object.keys(companyContacts).length > 0) {
        setDoc(docRef, companyContacts, { merge: false })
    } else {
        deleteDoc(docRef)
    }

}

export default deleteEvent