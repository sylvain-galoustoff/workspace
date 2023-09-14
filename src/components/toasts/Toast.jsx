import { motion } from "framer-motion"

function Toast({ data }) {

    return (
        <motion.div
            className={`card toast ${data?.type}`}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", duration: .15, ease: 'easeIn' }}
        >
            {data?.message}
        </motion.div>
    );
}

export default Toast