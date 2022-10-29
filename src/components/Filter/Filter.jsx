import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filterSelectors';
import { FilteredContacts } from 'components/Filter/FilterStyled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handelChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <FilteredContacts>
      <h2>Contacts</h2>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"        
        value={filter}
        onChange={handelChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </FilteredContacts>
  );
};

export { Filter };
