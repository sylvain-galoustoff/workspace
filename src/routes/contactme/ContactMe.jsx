import AddContactForm from "./AddContactForm";
import ContactsGroup from "./ContactsGroup";

function RemindMe() {

    return (
        <div className="page" id="contact-me">
            <div className="container" id="contact-me-container">

                <div id="contacts-list">
                    <div className="card-list">

                        <ContactsGroup />
                        <ContactsGroup />

                    </div>
                </div>

                <AddContactForm />

            </div>
        </div>
    );

}

export default RemindMe