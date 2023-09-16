import { motion } from "framer-motion";

function Loader() {
    return (
        <motion.div
            id="loader"
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div id="animated-loader">
                <div className="loader-item" />
                <div className="loader-item" />
                <div className="loader-item" />
            </div>
            <p id="loader-text">
                chargement
            </p>
        </motion.div>
    );
}

export default Loader