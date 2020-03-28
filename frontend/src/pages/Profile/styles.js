import styled from 'styled-components';
import { FiInbox } from 'react-icons/fi';

export const Container = styled.div`
  padding: 0 30px;
  margin: auto;
  width: 100%;
  max-width: 1180px;
  height: 100%;
  display: flex;
  flex-direction: column;

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
   }

    @media (max-width: 440px) {
      h1 {
        margin-top: 40px;
        margin-bottom: 12px;
      }

      ul {
        grid-template-columns: 1fr;
      }
    }
`;

export const Header = styled.header`

  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 32px;

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
  
  @media (max-width: 920px) {
    span {
      width: 100%;
      margin: 16px 10px;
      text-align: center;
    }

    div {
      width: 100%;
      display: flex;
      align-items: center;

      a {
        margin-left: 0;
      }
    }
  }

  @media (max-width: 440px) {
    flex-direction: column;

    span {
      margin: 16px 0;
    }

    div {
      a, button {
        margin-bottom: 16px;
      }
    }
  }

`;

export const EmptyProfile = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: inline-block;
    margin-left: 16px;
    font-size: 24px;
    text-align: center;
    color: #737380;
  }

  @media (max-width: 440px) {
    flex-direction: column;
  }
`;

export const Inbox = styled(FiInbox).attrs(props => ({
  color: "#737380",
  size: window.innerWidth < 440 ? 60 : 30
}))`

  @media (max-width: 440px) {
    margin-bottom: 16px;
  }
`;