import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  margin: auto;
  width: 300px;
  @media screen and (min-width: 480px) {
    padding: 25px;
    width: 310px;
  }

  @media screen and (min-width: 768px) {
    padding: 50px;
    width: 330px;
  }

  @media screen and(min-width:1200px) {
    padding: 90px;
  }
`;
