import styled from 'styled-components';
import backgroundMain from './images/bg-main-desktop.png';
import frontCard from './images/bg-card-front.png';
import backCard from './images/bg-card-back.png';

export const Container = styled.div`
     background: url(${backgroundMain}) no-repeat;
     background-size: 30vw 100vh;
     height: 100vh;
     width: 100vw;
     display: flex;

     @media(max-width: 850px){
          height: 120vh;
          display: flex;
          flex-direction: column;
          background-size: 100vw 40vh;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
     }

     * {
          box-sizing: border-box;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
     }
     .sides {
          height: 100%;
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
     }

     .left-side {
          @media(max-width: 850px) {
               height: 40vh;
          }
     }

     .front-card {
          background: url(${frontCard}) no-repeat center center / cover;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .card-number-front {
               font-size: 24px;

               @media(max-width: 850px){
                    font-size: 20px;
               }
          }

          h5 {
               display: flex;
               justify-content: space-between;
          }

          @media(max-width: 850px) {
               z-index: 2;
               position: absolute;
               margin: 30% 20% 0 0;

               .bt-transform {
                    transform: translate(0, 20px);
               }
          }
     }

     .back-card {
          background: url(${backCard}) no-repeat center center / cover;
          transform: translate(20%, 10%);
          display: flex;
          align-items: center;
          justify-content: end;

          span {
               font-size: 15px;
          }

          @media(max-width: 850px) {
               z-index: 1;
               position: absolute;
          }
     }

     .card {
          height: 220px;
          width: 350px;
          border-radius: 10px;
          box-shadow: 20px 20px 100px 1px #2e2e2e;
          padding: 20px 30px;

          img {
               width: 80px;
               object-fit: cover;

               @media(max-width: 850px) {
                    width: 65px;
               }
          }

          span {
               color: white;
          }

          @media(max-width: 850px) {
               height: 170px;
               width: 280px;
               box-shadow: none;
          }
     }

     .right-side {
          @media(max-width: 850px) {
               height: 70%;
          }
     }

     #container-box-form {
          width: 350px;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
     }

     .flex-cl {
          display: flex;
          flex-direction: column;
     }

     .flex {
          display: flex;
     }

     .full {
          width: 100%;
     }

     input {
          height: 35px;
          border-radius: 8px;
          border: 1px solid hsl(279, 6%, 55%);
          outline: none;
          padding: 0 10px;
     }

     input[placeholder=MM], input[placeholder=YY] {
          width: 45%;
          margin: 0 5px 0 0;
     }

     .confirm {
          cursor: pointer;
          background: hsl(278, 68%, 11%);
          color: white;
          border: none;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          transition: .2s;
          transform: translateY(25%);
     }

     input:focus {
          outline: 1px solid hsl(278, 94%, 30%);
     }

     .confirm:hover {
          background: hsl(278, 68%, 18%);
     }

     .section-two-form {
          display: flex;
          width: 350px;
     }

     label {
          padding: 10px 0;
          font-size: 12px;
          color: hsl(278, 68%, 11%);
     }

     input::-webkit-outer-spin-button,
     input::-webkit-inner-spin-button {
     -webkit-appearance: none;
     margin: 0;
     }

     input[type=number] {
     -moz-appearance: textfield;
     }

     .filter {
          filter: invert(1%) sepia(100%) saturate(4076%) hue-rotate(357deg) brightness(90%) contrast(100%) ;
     }
     
     .warning {
          color: red;
     }

     .thanks {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          img {
               width: 75px;
               object-fit: cover;
          }

          h1 {
               font-size: 22px;
               height: 10px;
          }

          p {
               font-size: 18px;
               color: hsl(279, 6%, 55%);
               height: 50px;
               text-align: center;
          }

          button {
               width: inherit;
               height: 40px;
               border: none;
               border-radius: 8px;
               background: hsl(278, 68%, 11%);
               color: white;
               font-size: 18px;
               cursor: pointer;
                :hover {
                    background: hsl(278, 68%, 18%);
                }
          }
     }



`;
