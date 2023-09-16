import { useEffect, useRef, useState } from 'react';
import { IoClose, IoSave } from 'react-icons/io5'
import storeCalendar from '../../usecases/storeCalendar';
import { useRecoilState } from 'recoil';
import ToastState from '../../atoms/toastState'

function AddCalendar({ closeModal, selectNewCalendar }) {

    const input = useRef()
    const [newCalendar, setNewCalendar] = useState('')
    const [toasts, setToasts] = useRecoilState(ToastState)

    useEffect(() => {
        input.current.focus()
    }, [])

    const doCloseModal = () => {
        closeModal()
    }

    const saveNewCalendar = () => {

        const isSavingToast = {
            type: "primary",
            message: "Sauvegarde en cours"
        }
        setToasts([...toasts, isSavingToast])

        storeCalendar(newCalendar)
            .then(() => {
                const saveCompleteToast = {
                    type: "success",
                    message: `Calendrier "${newCalendar}" sauvegardé`
                }
                selectNewCalendar(newCalendar)
                setToasts([...toasts, isSavingToast, saveCompleteToast])
            })
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
                    <IoSave /> Enregistrer
                </button>

            </div>

        </div>

    );
}

export default AddCalendar