import styled from 'styled-components';

export const Container = styled.div`
     max-width: 500px;
     height: auto;
     background: hsl(217, 19%, 24%);
     border-radius: 15px;
     padding: 40px;
     display: flex;
     flex-direction: column;
     align-items: center;

     @media (max-width: 550px){
          max-width: 350px;
     }

     * {
          font-family: 'Manrope', sans-serif;
          transition: .8s;
     }

     h1 {
          color: hsl(150, 100%, 66%);
          font-size: 13px;
          letter-spacing: 2px;
          text-align: center;
     }

     #divisor {
          width: 100%;
     }

     p {
          color: hsl(0, 0%, 100%);
          font-size: 28px;
          font-weight: 800;
          text-align: center;
     }

     button {
          width: 55px;
          height: 55px;
          border-radius: 100%;
          background: hsl(150, 100%, 66%);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transform: translateY(125%);
          border: none;

          img {
               object-fit: cover;
               width: 20px;
               height: 20px;
          }

          :hover {
               box-shadow:0px 0px 35px hsl(150, 100%, 66%);
               animation: rotateBtn 1s linear infinite;

               @media (max-width: 550px){
                    box-shadow: none;
                    animation: rotateBtn 1.5s linear;
               }
          }

          :active {
               transform: scale(.95) translateY(125%);// rodar
               animation: scaleBtn 1s infinite alternate;

               @media (max-width: 550px){
                    animation: none;
               }
          }


     }

     @keyframes rotateBtn {
          100% {
               transform: translateY(125%) rotate(360deg);
          }
     }
     @keyframes scaleBtn {
          100% {
               transform: scale(.95) translateY(125%) rotate(300deg);
          }
     }
`;