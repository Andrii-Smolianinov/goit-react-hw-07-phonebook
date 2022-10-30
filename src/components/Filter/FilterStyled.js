import styled from 'styled-components';

export const FilteredContacts = styled.div`
  & label {
    margin-bottom: 10px;
    display: block;
  }
  & input {
    margin-bottom: 15px;    
    border: 2px solid #3b5998;
    border-radius: 4px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
  & input:focus {
    border-color: #4c94ff;
  }
`;
