import { useState } from "react";
import { IoSave, IoArrowUndo } from 'react-icons/io5'

function AddContactForm() {

    const [form, setForm] = useState({
        editMode: false,
        company: '',
        fullName: '',
        tel: '',
        email: '',
    })

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
    }

    return (
        <form
            className="right-part"
            id="add-contact"
        >

            {form.editMode === false
                ? <h2 className="form-title">Ajouter un contact</h2>
                : <h2 className="form-title">Modifier un contact</h2>
            }

            <div className="form-group">
                <label htmlFor="input-contact-company">Entreprise</label>
                <input
                    type="text"
                    id="input-contact-company"
                    autoComplete="off"
                    value={form.company}
                    onChange={e => changeForm(e, 'company')}
                />
            </div>

            <div className="form-group">
                <label htmlFor="input-contact-name">Nom et prénom</label>
                <input
                    type="text"
                    id="input-contact-name"
                    autoComplete="off"
                    value={form.fullName}
                    onChange={e => changeForm(e, 'fullName')}
                />
            </div>

            <div className="form-group">
                <label htmlFor="input-contact-tel">Téléphone</label>
                <input
                    type="text"
                    id="input-contact-tel"
                    autoComplete="off"
                    value={form.tel}
                    onChange={e => changeForm(e, 'tel')}
                />
            </div>

            <div className="form-group">
                <label htmlFor="input-contact-email">Email</label>
                <input
                    type="text"
                    id="input-contact-email"
                    autoComplete="off"
                    value={form.email}
                    onChange={e => changeForm(e, 'email')}
                />
            </div>

            <div className="form-group button-group">
                <button type="button" className="icon-left" onClick={resetForm}>
                    <IoArrowUndo /> Reset
                </button>
                <button type="submit" className="primary icon-left">
                    <IoSave /> Enregistrer
                </button>
            </div>

        </form>
    );
}

export default AddContactForm