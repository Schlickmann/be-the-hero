import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
  margin: 32px auto;
  width: 100%;
  max-width: 1180px;
  height: 100vh;

  header {
    display: flex;
    align-items: center;
    width: 100%;

    span {
      font-size: 20px;
      margin-left: 24px;
    }

    img {
      height: 64px;
    }

    div {
      margin-left: auto;
      a {
        width: 260px;
        margin-top: 0;
      }

      button {
        height: 60px;
        width: 60px;
        border-radius: 4px;
        border: 1px solid #dcdce6;
        background: transparent;
        margin-left: 16px;
        transition: border-color 0.2s;

        &:hover {
          border-color: #999;
        }
      }
    }

    @media (max-width: 768px) {
      span {
        width: 100%;
        margin: 16px 10px;
        text-align: center;
      }

      div {
        width: 100%;
        display: flex;

        a {
          margin-left: 0;
          margin-bottom: 16px;
        }
      }

    }

    @media (max-width: 440px) {
      flex-direction: column;

      span {
        margin: 16px 0;
      }

    }
  }

   h1 {
     margin-top: 80px;
     margin-bottom: 24px;
   }

   ul {
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     grid-gap: 24px;

     li {
       background-color: #fff;
       padding: 24px;
       border-radius: 8px;
       position: relative;

       button {
         position: absolute;
         right: 24px;
         top: 24px;
         border: 0;
         transition: opacity 0.2s;

         &:hover {
           opacity: 0.8;
         }
       }

       strong {
         display: block;
         margin-bottom: 16px;
         color: #41414d;
       }

       p + strong {
         margin-top: 32px;
       }

       p {
         color: #737380;
         line-height: 21px;
         font-size: 16px;
       }
     }

     @media (max-width: 440px) {
      grid-template-columns: 1fr;
    }
   }
`;
