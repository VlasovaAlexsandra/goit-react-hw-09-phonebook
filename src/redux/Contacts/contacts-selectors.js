import { createSelector } from '@reduxjs/toolkit'

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getVisibleContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase()
        return contacts.filter((contacts) =>
            contacts.name.toLowerCase().includes(normalizedFilter)
        );
    })

// eslint-disable-next-line
export default {
    getFilter,
    getAllContacts,
    getVisibleContacts,
}