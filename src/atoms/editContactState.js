import { atom } from 'recoil'

const editContactState = atom({
    key: 'editContactState',
    default: {
        editMode: false,
        company: '',
        fullName: '',
        tel: '',
        email: '',
    }
})

export default editContactState