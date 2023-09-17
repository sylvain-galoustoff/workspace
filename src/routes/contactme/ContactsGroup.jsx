import { motion } from 'framer-motion'

import ContactCard from './ContactCard';

function ContactsGroup({ motionKey }) {

    return (
        <motion.div
            className="cards-group"
            key={motionKey}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: .5, ease: 'backIn', when: 'beforeChildren', delay: motionKey / 10 }}
        >
            <h3 className="cards-list-title">Company name</h3>

            <ContactCard />

        </motion.div>
    );
}

export default ContactsGroup