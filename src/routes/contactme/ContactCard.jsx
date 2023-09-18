import { motion } from 'framer-motion'
import { IoCall, IoMail, IoPencil, IoTrash } from 'react-icons/io5'

function ContactCard({ contact, animationDelay }) {

    return (
        <motion.div
            className="card contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", delay: (animationDelay / 10) + .25, duration: .5, ease: 'backIn' }}
        >

            <p className="contact-name">
                Contact Fullname
            </p>

            <div className="contact-body">
                <p className="contact-tel"><IoCall /> 06.10.11.12.13</p>
                <p className="contact-mail"><IoMail />nom.prenom@email.com</p>
            </div>

            <div className="contact-actions">
                <div className="contact-edit">
                    <IoPencil />
                </div>
                <div className="contact-delete">
                    <IoTrash />
                </div>
            </div>

        </motion.div>
    );
}

export default ContactCard