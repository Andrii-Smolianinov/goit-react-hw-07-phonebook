import styled from 'styled-components';

export const Container = styled.div`  

  padding: 60px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 480px) {
    padding: 80px;
  }
  
  @media screen and (min-width: 768px) {
    padding: 130px;
  }

  @media screen and(min-width:1200px) {
    padding: 240px;
  }
`;
