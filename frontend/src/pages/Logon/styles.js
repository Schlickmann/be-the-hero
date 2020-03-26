import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {    
    > div {
      flex-direction: column;

      > img {
        width: 70%;
      }
    }
  }

  @media (max-width: 440px) {
    > div {
      > img {
        display: none;
      }
    }
  }
`;

export const FormSection = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  form { 
    margin-top: 100px;

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }
  }

  @media (max-width: 768px) {
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 0;

    > img {
      width: 100%;
    }

    form {
       margin-top: 20px;
       width: 100%;

       h1 {
        font-size: 28px;
        margin-bottom: 28px;
      }
    }
    
  }

  @media (max-width: 440px) {

    > img {
      width: 250px;
    }
  }
`;
