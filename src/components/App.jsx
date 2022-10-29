import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PhoneBookStyled } from 'components/PhoneBookStyled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';
import { getFilteredContacts, getState } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const { loading, error } = useSelector(getState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhoneBookStyled>
      <main>
        <h1>
          <span className="spanP">P</span>honebook
        </h1>
        <ContactForm />
      </main>
      {!loading && contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList contacts={contacts} />
        </>
      )}
      {error && <p>oops, something went wrong</p>}
    </PhoneBookStyled>
  );
};

export default App;
