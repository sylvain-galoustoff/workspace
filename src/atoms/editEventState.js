import { atom } from 'recoil'

const editEventState = atom({
    key: 'editEventState',
    default: {
        editMode: false,
        id: null,
        name: '',
        timestamp: null,
        calendar: '',
        note: ''
    }
})

export default editEventState