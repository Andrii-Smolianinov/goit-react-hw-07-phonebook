import styled from 'styled-components';

export const MainFormDiv = styled.div`

  text-align: start;

  @media screen and (min-width: 768px) {
    text-align: end;
    
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  display: inline-flex;
  flex-direction: column;
  color: #3b5998;
  
  @media screen and (min-width: 768px) {
    padding-right: 55px;
    }

  & label {
    margin-bottom: 15px;
    font-size: 14px;

    @media screen and (min-width: 480px) {
      font-size: 16px;
    }
  }

  & input {
    margin-bottom: 5px;
    border: 2px solid #3b5998;
    padding-left: 10px;
    border-radius: 4px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;

    @media screen and (min-width: 768px) {
    margin: 0 0 5px 5px;
  }
  }

  & input:focus {
    border-color: #4c94ff;
  }

  & button {
    padding: 5px 8px;
    margin: 20px 0 20px 0;
    width: 128px;
    font-weight: 600;
    color: #b1c5f1;
    border-radius: 3px;
    border: 2px solid #3b5998;
    background-color: #3b5998;
    box-shadow: 7px 0px 16px -2px rgb(6, 41, 238);
    transition: background-color 250ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  button:hover {
    color: #3b5998;
    outline: transparent;
    border: 2px solid #3b5998;
    background-color: #b1c5f1;
  }
`;
