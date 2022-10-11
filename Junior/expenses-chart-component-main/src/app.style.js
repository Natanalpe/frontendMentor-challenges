import styled from 'styled-components'

export const Container = styled.div`
     width: inherit;
     height: 100vh;
     background: hsl(27, 66%, 92%);
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     background-repeat: no-repeat;
     background-size: contain;
     * {
          box-sizing: border-box;
          font-family: 'DM Sans', sans-serif;
     }

     .patterns {
          width: 400px;
          border-radius: 15px;
          padding: 12px 25px;

          @media(max-width: 420px){
               width: 310px;
          }
     }

     .patterns-font-grey {
          font-size: 13px;
          color: hsl(28, 10%, 53%);
          font-weight: 300;
     }

     .head-comp {
          height: 100px;
          background: hsl(10, 79%, 65%);
          display: grid;
          grid-template-columns: 80% 20%;
          grid-template-rows: 50% 50%;
          grid-template-areas: 'title logo'
                               'balance logo';
          align-items: center;
          margin-bottom: 20px;

          h1 {
               grid-area: title;
               color: white;
               font-weight: 400;
          }

          span {
               grid-area: balance;
               font-size: 22px;
               font-weight: 700;
               color: white;
          }

          img {
               grid-area: logo;
               width: 50px;
               object-fit: cover;
          }
     }

     .body-comp {
          height: auto;
          background: hsl(0, 0%, 100%);

          h2 {
               color: hsl(25, 47%, 15%);
          }

          h3 {
               margin: 0;
          }

          .body-footer {
               display: grid;
               height: 60px;
               grid-template-columns: 60% 40%;
               grid-template-rows: 50% 50%;
               grid-template-areas: 'tBalance percent'
                                    'tBalance when';

               .total-spend {
                    grid-area: tBalance;
                    font-size: 35px;
                    align-self: center;
                    font-weight: 700;
                    color: hsl(25, 47%, 15%);
               }

               .percent {
                    grid-area: percent;
                    align-self: flex-end;
                    justify-self: end;
               }

               p {
                    grid-area: when;
                    place-self: end end;
               }
          }
     }

     #graph {
          list-style: none;
          display: flex;
          padding: 0;
          justify-content: space-around;
          align-items: flex-end;
          height: 140px;

          .visual-item-graph {
               width: 35px;
               height: 100px;
               border-radius: 3px;
               cursor: pointer;
          }

          .visual-item-graph:hover {
               filter: brightness(130%);
          }

          .values-graph {
               display: flex;
               justify-content: center;
          }
     }
`;