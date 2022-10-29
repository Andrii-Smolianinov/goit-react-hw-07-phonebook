import styled from 'styled-components';

export const ContactUl = styled.ul`
  margin: 0;
  padding: 0;
  text-align: left;
  background-color: #b1c5f1;
  list-style: none;
  svg {
    margin: 0 5px;
  }

  & li {
    display: block;
    position: relative;
    height: 25px;

    padding: 5px 75px 0 0;
    margin: 10px 0;

    text-align: left;
    font-size: 12px;
    background-color: #b1c5f1;
    border: 2px solid #3b5998;
    border-radius: 3px;
    align-content: center;
    align-items: center;
    cursor: pointer;
    transition: scale 250ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: 480px) {
      font-size: 16px;
      border-radius: 5px;
    }    
  }
  & li:hover {
    scale: 1.03;
    box-shadow: rgba(4, 241, 229, 1) 0px 3px 14px,
    rgba(11, 31, 1, 1) 0px 7px 14px;
  }

  button {
    position: absolute;
    right: 10px;
    top: 6px;
    font-weight: 600;
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
