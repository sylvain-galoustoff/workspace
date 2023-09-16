function RemindTools() {
    return (
        <div className="container">

            <div className="form-group">
                <input
                    type="text"
                    id="search-remind"
                    placeholder="rechercher un événement"
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    id="filter-remind"
                    placeholder="Nom de l'agenda"
                />
            </div>

        </div>
    );
}

export default RemindTools