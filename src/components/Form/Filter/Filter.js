// import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux'
import * as contactsActions from '../../../redux/Contacts/contacts-actions'
import contactsSelectors from '../../../redux/Contacts/contacts-selectors'
import './Filter.css'

export default function Filter() {

    const dispatch = useDispatch()

    const value = useSelector(contactsSelectors.getFilter)

    const onChange = e => dispatch(contactsActions.changeFilter(e.target.value))

    return (
        <div>
            <p className="Filter_text">Find contacts by name</p>
            <br />
            <input
                className="Filter_input"
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>

    )
}

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChangeFilter: PropTypes.func.isRequired,
// };



