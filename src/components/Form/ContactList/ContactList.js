import PropTypes from "prop-types";
import { connect } from 'react-redux'
import contactsOperations from '../../../redux/Contacts/contacts-operations'
import contactsSelectors from '../../../redux/Contacts/contacts-selectors'
import './ContactList.css'
import Button from '@material-ui/core/Button';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className="TaskList"> {contacts.map(({ id, name, number }) => (
        <li className="TaskList_item" key={id}>
            <p className="TaskList_text">{name}: {number}</p>
            <Button
                variant="contained"
                color="primary"
                // className="TaskList_button"
                type="button"
                onClick={() => onDeleteContact(id)}
            >Delete</Button>
        </li>
    ))}
    </ul>
)

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
}

const mapStateToProps = state => ({
    contacts: contactsSelectors.getVisibleContacts(state)
})

const mapDispatchToProps = dispatch => ({
    onDeleteContact: (id) => dispatch(contactsOperations.deleteContacts(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)