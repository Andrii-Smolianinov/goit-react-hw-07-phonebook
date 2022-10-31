import styled from 'styled-components';

export const ContactUl = styled.ul`
  margin: 0;
  padding: 0;
  text-align: left;
  background-color: #b1c5f1;
  list-style: none;
  svg {
    margin: 5px;
  }

  li {
    display: block;
    height: 32px;
    align-items: center;
    padding-right: 5px;
    display: grid;
    grid-template-columns: 25px 1fr 52px;
    font-size: 12px;
    background-color: #b1c5f1;
    border: 2px solid #3b5998;
    border-radius: 5px;
    align-items: center;
    cursor: pointer;
    transition: scale 250ms, color 250ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  li:not(:last-child) {
    margin-bottom: 10px;
  }

  li:hover {
    scale: 1.03;
    color: rgba(8, 4, 241, 1);
    border-color: rgba(8, 4, 241, 1);
    box-shadow: rgba(132, 188, 202, 1) 0px 7px 14px;
  }

  button {
    color: #b1c5f1;
    background-color: #3b5998;
    border: 2px solid #3b5998;
    border-radius: 4px;
    border: transparent;
    box-shadow: 7px 0px 16px -2px rgb(6, 41, 238);
    text-align: center;
    transition: background-color 250ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  button:hover {
    color: #3b5998;
    background-color: #b1c5f1;
  }
`;
