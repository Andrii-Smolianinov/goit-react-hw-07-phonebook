import { useSelector } from 'react-redux';
import {
  getFilteredContacts,
  getState,
} from 'redux/contacts/contactsSelectors';

import { Container } from 'components/Container';
import { PhoneBookStyled } from 'components/PhoneBookStyled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactsList/ContactsList';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const { loading, error } = useSelector(getState);

  return (
    <Container>
      <PhoneBookStyled>
        <ContactForm />

        {!loading && contacts.length > 0 && (
          <>
            <Filter />
            <ContactList />
          </>
        )}
        {error && <p>oops, something went wrong</p>}
      </PhoneBookStyled>
    </Container>
  );
};

export default App;
