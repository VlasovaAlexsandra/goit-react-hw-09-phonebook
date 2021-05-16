import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux'
import contactsOperations from '../../../redux/Contacts/contacts-operations'
import contactsSelectors from '../../../redux/Contacts/contacts-selectors'
import './ContactList.css'
import Button from '@material-ui/core/Button';

export default function ContactList() {

    const dispatch = useDispatch()

    const contacts = useSelector(contactsSelectors.getVisibleContacts)

    const onDeleteContact = id => dispatch(contactsOperations.deleteContacts(id))

    return (

        <ul className="TaskList"> {contacts.map(({ id, name, number }) => (
            <li className="TaskList_item" key={id}>
                <p className="TaskList_text">{name}: {number}</p>
                <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={() => onDeleteContact(id)}
                >Delete</Button>
            </li>
        ))}
        </ul>
    )

}

ContactList.propTypes = {
    // onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
}