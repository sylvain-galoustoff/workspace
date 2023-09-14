function Toast({ data }) {
    return (
        <div className={`card toast ${data?.type}`}>

            <div className="toast-header">
                Toast type
            </div>

            <div className="toast-body">
                {data?.message}
            </div>

        </div>
    );
}

export default Toast