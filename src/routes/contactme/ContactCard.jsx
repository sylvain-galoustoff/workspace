import { motion } from 'framer-motion'
import { IoCall, IoMail, IoPencil, IoTrash } from 'react-icons/io5'
import { useRecoilState } from 'recoil';
import editContactState from '../../atoms/editContactState';

import deleteContact from '../../usecases/contacts/deleteContact'

function ContactCard({ contact, animationDelay }) {

    const [contactForm, setContactForm] = useRecoilState(editContactState)

    const editContact = () => {
        const editContact = { ...contact }
        editContact.editMode = true
        setContactForm(editContact)
    }

    const deleteThisContact = () => {
        deleteContact(contact)
    }

    return (
        <motion.div
            className="card contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", delay: (animationDelay / 10) + .25, duration: .5, ease: 'backIn' }}
        >

            <p className="contact-name">
                {contact?.fullName}
            </p>

            <div className="contact-body">
                <p className="contact-tel"><IoCall />{contact?.tel}</p>
                <p className="contact-mail"><IoMail />{contact?.email}</p>
            </div>

            <div className="contact-actions">
                <div className="contact-edit" onClick={editContact}>
                    <IoPencil />
                </div>
                <div className="contact-delete" onClick={deleteThisContact}>
                    <IoTrash />
                </div>
            </div>

        </motion.div>
    );
}

export default ContactCard