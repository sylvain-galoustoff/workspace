import { useEffect, useState } from "react";
import AddContactForm from "./AddContactForm";
import ContactsGroup from "./ContactsGroup";
import getAllContacts from "../../usecases/contacts/getAllContacts";

function RemindMe() {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const unsubscribe = getAllContacts(data => {
            setContacts(data)
        })
        return () => unsubscribe()
    }, [])

    const renderContactsGroup = Object.keys(contacts)
        .map(key => <ContactsGroup key={key} companyContacts={contacts[key]} />)

    return (
        <div className="page" id="contact-me">
            <div className="container" id="contact-me-container">

                <div id="contacts-list">
                    <div className="card-list">

                        {renderContactsGroup}

                    </div>
                </div>

                <AddContactForm />

            </div>
        </div>
    );

}

export default RemindMe