function Toast({ data }) {

    const headerText = () => {
        let text

        if (data?.type === 'danger') {
            text = "Erreur"
        } else if (data?.type === 'success') {
            text = 'Succès'
        } else {
            text = 'Info'
        }

        return text
    }

    return (
        <div className={`card toast ${data?.type}`}>

            <div className="toast-header">
                {headerText()}
            </div>

            <div className="toast-body">
                {data?.message}
            </div>

        </div>
    );
}

export default Toast