import PropTypes from "prop-types";
import { connect } from 'react-redux'
import * as contactsActions from '../../../redux/Contacts/contacts-actions'
import contactsSelectors from '../../../redux/Contacts/contacts-selectors'
import './Filter.css'

const Filter = ({ value, onChangeFilter }) => {
    return (
        <div>
            <p className="Filter_text">Find contacts by name</p>
            <br />
            <input
                className="Filter_input"
                type="text"
                value={value}
                onChange={onChangeFilter}
            />
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    value: contactsSelectors.getFilter(state)
})

const mapDispatchToProps = dispatch => ({
    onChangeFilter: (e) => dispatch(contactsActions.changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);