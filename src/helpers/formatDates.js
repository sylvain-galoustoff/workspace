import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

export const getFullDateStringFromTimestamp = timestamp => {
    const dateObject = new Date(timestamp)
    const formatedDate = format(dateObject, 'EEEE d MMMM yyyy', { locale: fr })
    return formatedDate
}

export const getTimeFromTimestamp = timestamp => {
    const dateObject = new Date(timestamp)
    const formatedDate = format(dateObject, 'HH:mm', { locale: fr })
    return formatedDate
}