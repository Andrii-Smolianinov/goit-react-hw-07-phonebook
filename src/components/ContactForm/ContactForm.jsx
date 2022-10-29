import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { Form } from 'components/ContactForm/ContactFormStyled';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onAddContact = contact => {    
    const action = addContact(contact);
    dispatch(action);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAddContact({ name, number });
    setName((name) => name = '');
    setNumber((number) => number = '')
  };

  return (
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
  );
};

export { ContactForm };
