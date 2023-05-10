// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { getFilterValue } from 'redux/selectors';

export const ContactList = (
  // {contactList, handleDeleteContact}
  ) => {

    const contactList = useSelector(getContacts);
    const filterValue = useSelector(getFilterValue);

    const dispatch = useDispatch();

    const getVisibleContacts = () => {
      const normalizedFilter = filterValue.toLowerCase();
      return contactList.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }

    const visibleContacts = getVisibleContacts();

    const handleDeleteContact = (id) => {
      dispatch(deleteContact(id));
    }

    return (
        <ul className={css['contact-list']}>
            {visibleContacts.map((contact) => {
            const {name, number, id} = contact;
            return (

            <li className={css['contact-item']} key={id}>
              <p className={css['contact-text']}><span className={css['contact-name']}>{name}:</span> {number}</p>
              <button className={css['delete-btn']} type="button" 
              onClick={() => handleDeleteContact(id)}
              >Delete</button>
            </li>

          )}
          )}
        </ul>

    )
}

// ContactList.propTypes = {
//     contactList: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired,).isRequired,
//     handleDeleteContact: PropTypes.func.isRequired,
// }