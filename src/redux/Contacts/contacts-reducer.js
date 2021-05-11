import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from "redux"
import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    toggleContactRequest,
    toggleContactSuccess,
    toggleContactError
} from './contacts-actions'

const items = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(contact => contact.id !== payload),
    [toggleContactSuccess]: (state, { payload }) =>
        state.map(contact => (contact.id === payload.id ? payload : contact)),

})

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,

    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,

    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,

    [toggleContactRequest]: () => true,
    [toggleContactSuccess]: () => false,
    [toggleContactError]: () => false,
})

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload
})

export default combineReducers({ items, filter, loading })