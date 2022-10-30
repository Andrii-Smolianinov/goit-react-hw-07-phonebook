import styled from 'styled-components';


export const Container = styled.div`  

  padding: 35px;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media screen and (min-width: 480px) {
    padding: 60px;
  }
  
  @media screen and (min-width: 768px) {
    padding: 80px 280px;    
  }

  @media screen and(min-width:1200px) {
    padding: 200px 300px;
  }
`;
