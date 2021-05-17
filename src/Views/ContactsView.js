import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../components/Container/index';
import ContactForm from '../components/Form/ContactForm/ContactForm';
import ContactList from '../components/Form/ContactList/ContactList';
import Filter from '../components/Form/Filter/Filter';
import { contactsOperations } from '../redux/Contacts/index';

export default function ContactsView() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())

    }, [dispatch])

    return (
        <Container>
            <ContactForm />
            <Filter />
            <ContactList />
        </Container>
    );
}




