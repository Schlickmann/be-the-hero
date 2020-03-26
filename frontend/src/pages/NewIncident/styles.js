import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 440px) {
    height: auto;
  }
`;


export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background-color: #f0f0f5;
  box-shadow: 0 0 100px rgba(0,0,0,0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    width: 100%;
    max-width: 380px;

    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
      color: #333;
    }

    p {
      font-size: 18px;
      color: #737380;
      line-height: 32px;
    }
  }

  form {
    width: 100%;
    max-width: 450px;

    input, textarea {
      margin-top: 8px;
    }
  }


  @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;

      section {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        > img {
          width: 250px;
        }

        h1 {
          width: 100%;

        }

        a {
          width: 100%;
        }
      }
  }

  @media (max-width: 440px) {
      justify-content: center;
      height: 100%;
      padding: 1.5rem;

      section {

        h1 {
          margin: 32px 0 16px;
          font-size: 28px;
        }

        a {
          margin: 20px 0;
        }
      }
      
  }

`;

