import axios from 'axios'
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    toggleContactRequest,
    toggleContactSuccess,
    toggleContactError
} from './contacts-actions'

// axios.defaults.baseURL = 'http://localhost:3000/'

const fetchContacts = () => dispatch => {
    dispatch(fetchContactRequest())

    axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactSuccess(data)))
        .catch(error => dispatch(fetchContactError(error.message)))

}

const addContacts = (name, number) => dispatch => {
    const contact = { name, number }

    dispatch(addContactRequest())

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error.message)))
}

const deleteContacts = id => dispatch => {
    dispatch(deleteContactRequest())

    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error.message)))


}

const toggleContacts = id => dispatch => {
    dispatch(toggleContactRequest())

    axios
        .patch(`/contacts/${id}`)
        .then(({ data }) => dispatch(toggleContactSuccess(data)))
        .catch(error => dispatch(toggleContactError(error.message)))
}

// eslint-disable-next-line
export default {
    fetchContacts,
    addContacts,
    deleteContacts,
    toggleContacts,

}