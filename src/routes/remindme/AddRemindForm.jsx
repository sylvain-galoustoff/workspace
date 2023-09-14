import { useEffect, useState } from "react";
import { IoCheckmark } from 'react-icons/io5'

import DatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

import { format } from 'date-fns'
import fr from 'date-fns/locale/fr'
registerLocale('fr', fr)

import storeEvent from "../../usecases/storeEvent";
import getAllCalendarNames from '../../usecases/getAllCalendarNames'
import Modal from "../../components/modals/Modal";
import AddCalendar from "../../components/modals/AddCalendar";

function AddRemindForm() {

    const [startDate, setStartDate] = useState(null)
    const [sendingData, setSendingData] = useState(false)
    const [calendars, setCalendars] = useState()
    const [form, setForm] = useState({
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

    const changeForm = (e, target) => {
        const newForm = { ...form }
        newForm[target] = e.target.value
        setForm(newForm)
    }

    const selectNewCalendar = newCalendar => {
        const newForm = { ...form }
        newForm.calendar = newCalendar
        setForm(newForm)
    }

    const submitEvent = e => {
        e.preventDefault()
        setSendingData(true)

        const newForm = { ...form }
        newForm.timestamp = startDate.getTime()

        storeEvent(newForm)
            .then(() => {
                setForm({
                    id: null,
                    name: '',
                    timestamp: null,
                    calendar: 'sylvain',
                    note: ''
                })
                setSendingData(false)
                setStartDate(null)
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
        <form className="right-part" id="add-reminder" onSubmit={submitEvent}>

            <h2 id="add-reminder-title">Ajouter un rappel</h2>

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
                <button type="submit" className={`primary icon-left ${sendingData && 'loader'}`}>
                    <IoCheckmark /> Valider
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