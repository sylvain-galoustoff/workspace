import { useEffect, useRef, useState } from 'react';
import { IoClose, IoCheckmark } from 'react-icons/io5'
import storeCalendar from '../../usecases/storeCalendar';

function AddCalendar({ closeModal, selectNewCalendar }) {

    const input = useRef()
    const [newCalendar, setNewCalendar] = useState('')

    useEffect(() => {
        input.current.focus()
    }, [])

    const doCloseModal = () => {
        closeModal()
    }

    const saveNewCalendar = () => {
        storeCalendar(newCalendar)
            .then(() => selectNewCalendar(newCalendar))
    }

    return (

        <div id="modal">

            <div id="modal-header">
                <h2>Ajouter un calendrier</h2>
            </div>

            <div className="form-group" id="modal-body">

                <input type="text"
                    ref={input}
                    value={newCalendar}
                    onChange={e => setNewCalendar(e.target.value)}
                />

            </div>

            <div className="button-group" id="modal-footer">

                <button type="button"
                    className="default icon-left"
                    onClick={doCloseModal}
                >
                    <IoClose /> Annuler
                </button>

                <button type="button"
                    className="primary icon-left"
                    onClick={saveNewCalendar}
                >
                    <IoCheckmark /> Valider
                </button>

            </div>

        </div>

    );
}

export default AddCalendar