import { motion } from 'framer-motion'

import ContactCard from './ContactCard';

function ContactsGroup({ companyContacts, motionKey }) {

    const renderContacts = Object.keys(companyContacts)
        .map(key => <ContactCard key={key} contact={companyContacts[key]} />)

    return (
        <motion.div
            className="cards-group"
            key={motionKey}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: .5, ease: 'backIn', when: 'beforeChildren', delay: motionKey / 10 }}
        >
            <h3 className="cards-list-title">{companyContacts[0]?.company}</h3>

            {renderContacts}

        </motion.div>
    );
}

export default ContactsGroup