import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import contactsOperations from '../../../redux/Contacts/contacts-operations'
import contactsSelectors from '../../../redux/Contacts/contacts-selectors'
// import PropTypes from "prop-types";
import './ContactForm.css';

// componentDidMount() {
//     this.props.fetchContacts()
// }

// const mapStateToProps = state => ({
//     contacts: contactsSelectors.getAllContacts(state)
// });


// const mapDispatchToProps = dispatch => ({
//     fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
//     onSubmit: (name, number) => dispatch(contactsOperations.addContacts(name, number))
// })

export default function ContactForm() {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(contactsSelectors.getAllContacts)
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch])

    const hendelChangeName = useCallback(e => {
        setName(e.currentTarget.value)
    }, []);
    
    const hendelChangeNumber = useCallback(e => {
        setNumber(e.currentTarget.value)
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (contacts.map(({ name }) => name).includes(name)) {
            alert(`${name} is already in contacts`)
            return
        }
        dispatch(contactsOperations.addContacts(name, number))

        setName('')
        setNumber('')

    }, [dispatch, name, number, contacts])


    return (
        <>
            <form className="TaskEditor" onSubmit={handleSubmit}>
                <label className="TaskEditor_label">Name</label>
                <br />
                <input
                    className="TaskEditor_input"
                    type="text"
                    value={name}
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={hendelChangeName}
                />
                <br />
                <label className="TaskEditor_label">Number</label>
                <br />
                <input
                    className="TaskEditor_input"
                    type="text"
                    value={number}
                    name="number"
                    pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                    title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                    required
                    onChange={hendelChangeNumber}
                />
                <br />
                <button className="TaskEditor_button" type="submit">Add contact</button>
            </form>

        </>
    )
}

// ContactForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }