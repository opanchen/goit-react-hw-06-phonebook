import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { remove } from 'redux/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {

  const contacts = useSelector(getContacts); 
  const filter = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  const visibleContacts = getVisibleContacts();

  const handleDeleteContact = (id) => {
    dispatch(remove(id));
  }

  return (
    <ul className={css['contact-list']}>
        {visibleContacts.map((contact) => {
        const {name, number, id} = contact;
        return (

        <li className={css['contact-item']} key={id}>
          <p className={css['contact-text']}>
            <span className={css['contact-name']}>{name}:</span> {number}
          </p>
          <button 
            className={css['delete-btn']} 
            type="button" 
            onClick={() => handleDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      )}
      )}
    </ul>
  )
}