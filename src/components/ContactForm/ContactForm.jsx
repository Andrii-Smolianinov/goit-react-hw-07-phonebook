import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

import { getFilteredContacts } from 'redux/contacts/contactsSelectors';
import { Form, MainFormDiv } from 'components/ContactForm/ContactFormStyled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const isDublicate = ({ name }) => {
    const result = contacts.find(contact => contact.name === name);
    return result;
  };

  const onAddContact = contact => {
    if (isDublicate(contact)) {
      return Notify.warning(
        `warning! Contact "${contact.name}" is already in the phone book!`
      );
    }
    const action = addContact(contact);
    dispatch(action);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <MainFormDiv>
      <h1>
        <span className="spanP">P</span>honebook
      </h1>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            name="name"
            id="nameInput"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder=" john doe"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div>
          <label htmlFor="numberInput">Number</label>
          <input
            type="tel"
            name="number"
            value={number}
            id="numberInput"
            onChange={e => setNumber(e.target.value)}
            placeholder="+380-11-111-1111"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </MainFormDiv>
  );
};

export { ContactForm };
