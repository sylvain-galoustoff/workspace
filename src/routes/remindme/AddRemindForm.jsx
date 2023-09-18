import { useEffect, useState } from "react";
import { IoSave, IoArrowUndo } from 'react-icons/io5'

import DatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import fr from 'date-fns/locale/fr'
registerLocale('fr', fr)

import getAllCalendarNames from '../../usecases/events/getAllCalendarNames'
import storeEvent from "../../usecases/events/storeEvent";
import updateEvent from "../../usecases/events/updateEvent";

import Modal from "../../components/modals/Modal";
import AddCalendar from "./AddCalendar";

import { useRecoilState, useRecoilValue } from "recoil";
import toastState from '../../atoms/toastState'
import editEventState from "../../atoms/editEventState";

function AddRemindForm() {

    const [startDate, setStartDate] = useState(null)
    const [calendars, setCalendars] = useState()
    const [toasts, setToasts] = useRecoilState(toastState)
    const editEvent = useRecoilValue(editEventState)
    const [form, setForm] = useState({
        editMode: false,
        id: null,
        name: '',
        timestamp: null,
        calendar: '',
        note: ''
    })

    useEffect(() => {
        const unsubscribe = getAllCalendarNames(data => {
            setCalendars(data)
        })
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        if (editEvent.timestamp) {
            setStartDate(new Date(editEvent.timestamp))
        }
        setForm(editEvent)
    }, [setForm, editEvent])

    const changeForm = (e, target) => {
        const newForm = { ...form }
        newForm[target] = e.target.value
        setForm(newForm)
    }

    const resetForm = () => {
        setForm({
            editMode: false,
            id: null,
            name: '',
            timestamp: null,
            calendar: '',
            note: ''
        })
        setStartDate(null)
    }

    const selectNewCalendar = newCalendar => {
        const newForm = { ...form }
        newForm.calendar = newCalendar
        setForm(newForm)
    }

    const submitEvent = e => {
        e.preventDefault()

        const inProgressToast = {
            type: "primary",
            message: "enregistrement du nouvel événement ..."
        }
        setToasts([...toasts, inProgressToast])

        const newForm = { ...form }
        newForm.timestamp = startDate.getTime()

        storeEvent(newForm)
            .then(() => {
                resetForm()
                const successToast = {
                    type: "success",
                    message: `événement "${newForm.name}" enregistré !`
                }
                setToasts([...toasts, inProgressToast, successToast])

            })
            .catch(err => console.error(err))

    }

    const refreshEvent = e => {
        e.preventDefault()

        const inProgressToast = {
            type: "primary",
            message: "Mise a jour de l'événement ..."
        }
        setToasts([...toasts, inProgressToast])

        const newForm = { ...form }
        newForm.timestamp = startDate.getTime()

        updateEvent(newForm)
            .then(() => {
                setForm({
                    editMode: false,
                    id: null,
                    name: '',
                    timestamp: null,
                    calendar: '',
                    note: ''
                })
                setStartDate(null)
                const successToast = {
                    type: "success",
                    message: `l'événement "${newForm.name}" a été mis à jour !`
                }
                setToasts([...toasts, inProgressToast, successToast])

            })
            .catch(err => console.error(err))
    }

    const closeModal = () => {
        const newForm = { ...form }
        newForm.calendar = ''
        setForm(newForm)
    }

    const renderSelectOptions = calendars && Object.keys(calendars)
        .map(key => <option key={key} value={calendars[key]}>{calendars[key]}</option>)

    return (
        <form
            className="right-part"
            id="add-reminder"
            onSubmit={form.editMode === false ? submitEvent : refreshEvent}
        >

            {form.editMode === false
                ? <h2 className="form-title">Ajouter un rappel</h2>
                : <h2 className="form-title">Mettre à jour un rappel</h2>
            }

            <div className="form-group">
                <label htmlFor="input-event-name">Nom de l'événement</label>
                <input
                    type="text"
                    id="input-event-name"
                    autoComplete="off"
                    value={form.name}
                    onChange={e => changeForm(e, 'name')}
                />
            </div>

            <div className="form-group">
                <label htmlFor="input-event-date">Date l'événement</label>
                <DatePicker
                    id="input-event-date"
                    autoComplete="off"
                    showTimeSelect
                    selected={startDate}
                    onChange={(timestamp) => setStartDate(timestamp)}
                    dateFormat="d/MM/yyyy à HH:mm"
                    locale="fr"
                />
            </div>

            <div className="form-group">
                <label htmlFor="input-event-calendar">Affecter à un agenda</label>
                <select
                    id="input-event-calendar"
                    value={form.calendar}
                    onChange={e => changeForm(e, 'calendar')}
                >
                    <option value="">Faites un choix</option>
                    {renderSelectOptions}
                    <option value="add-calendar">+ Ajouter un calendrier</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="input-event-note">Note additionnelle</label>
                <textarea
                    id="input-event-note"
                    rows="10"
                    value={form.note}
                    onChange={e => changeForm(e, 'note')}
                >

                </textarea>
            </div>

            <div className="form-group button-group">
                <button type="button" className="icon-left" onClick={resetForm}>
                    <IoArrowUndo /> Reset
                </button>
                <button type="submit" className="primary icon-left">
                    <IoSave /> Enregistrer
                </button>
            </div>

            {form.calendar === 'add-calendar' &&
                <Modal>
                    <AddCalendar
                        closeModal={closeModal}
                        selectNewCalendar={selectNewCalendar}
                    />
                </Modal>
            }

        </form>
    );
}

export default AddRemindForm