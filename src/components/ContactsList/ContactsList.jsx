
import {  useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/operations';
import { getFilteredContacts } from "redux/contacts/contactsSelectors";
import { ContactUl } from 'components/ContactsList/ContactListStyled';
import { BsTelephoneOutbound } from 'react-icons/bs';


const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onRemoveContact = (id) => {
  const action = removeContact(id);
  dispatch(action);
}

  return (
    <ContactUl>
      {contacts.map(contact => (
          <li key={contact.id}>
            <BsTelephoneOutbound size={13} />
            {contact.name}: {contact.number}
            <button onClick={() => onRemoveContact(contact.id)}>Delete</button>
          </li>
        ))}
    </ContactUl>
  );
};

export { ContactList };


