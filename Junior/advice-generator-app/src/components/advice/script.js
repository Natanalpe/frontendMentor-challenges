import { Container } from './style';
import dividerSvg from '../../images/pattern-divider-desktop.svg';
import iconDice from '../../images/icon-dice.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Advice() {

     const [adviceId, setAdviceId] = useState();
     const [advice, setAdvice] = useState();
     const [randomize, setRandomize] = useState(false);

     useEffect(() => {
          axios
               .get('https://api.adviceslip.com/advice')
               .then(resp => {
                    setAdvice(resp.data.slip.advice);
                    setAdviceId(resp.data.slip.id)
               })
               .catch(err => {
                    console.log('Falha durante a requisição: \n' + err)
               })
     }, [randomize]);



     return (
          <Container>
               <h1>ADVICE #{adviceId}</h1>
               <p>
                    {advice}   
               </p>
               <img id='divisor' src={dividerSvg} alt='#' />
               <button onClick={() => setRandomize(!randomize)}>
                    <img src={iconDice} alt='#' />
               </button>
          </Container>
     )
}

export default Advice;