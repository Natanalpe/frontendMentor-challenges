import { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import DotsFrontCard from './images/card-logo.svg';
import SvgCorrect from './images/icon-complete.svg';
import {
  Container
} from './app.style.js';


function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options])

  return <div ref={tilt} {...rest} />
}

function App() {

  const [correctName, setCorrectName] = useState(true);
  const [correctDate, setCorrectDate] = useState(true);
  const [correctCardNumber, setCorrectCardNumber] = useState(true);
  const [correctCvc, setCorrectCvc] = useState(true);
  const [register, setRegister] = useState(false);
  const [data, setData] = useState({
    name: undefined,
    cardNumber: undefined,
    month: undefined,
    year: undefined,
    cvc: undefined
  })
  const styleTilt = {
    margin: '25px 0 0 20%',

  }

  function nameRules(nameValue) {
    return nameValue.length >= 3 ? setCorrectName(true) : setCorrectName(false);
  }

  function dateRules(dateValue) {
    return dateValue.length === 2 ? setCorrectDate(true) : setCorrectDate(false);
  }

  function cardNumberRules(cardNumberValue) {
    var regCardNumber = /((\d){4}\s){3}(\d){4}/;

    return regCardNumber.test(cardNumberValue) ? setCorrectCardNumber(true) : setCorrectCardNumber(false);
  }

  function cvcRules(cvcValue) {
    return cvcValue.length === 3 ? setCorrectCvc(true) : setCorrectCvc(false);
  }

  function checkInputRules() {
    var arrCheck = [
      correctName === true,
      correctCardNumber === true,
      correctCvc === true,
      correctDate === true,
    ]
    return arrCheck.every((val, i, arr) => val === arr[0]) ? setRegister(true) : setRegister(false);
  }

  return (
    <Container>
      <div className='left-side sides'>
        <Tilt className='front-card card'>
          <div>
            <img src={DotsFrontCard} alt='#' />
          </div>
          <div className='bt-transform'>
            <span className='card-number-front'>{data.cardNumber}</span>
            <h5><span>{data.name}</span><span>{data.month}/{data.year}</span></h5>
          </div>
        </Tilt>
        <Tilt className='back-card card' style={styleTilt}>
          <span>{data.cvc}</span>
        </Tilt>
      </div>
      {register ?
        <div className='thanks'>
          <img src={SvgCorrect}  alt='#'/>
          <h1>THANK YOU!</h1>
          <p>We've added your card details</p>
          <button onClick={() => {
            setRegister(false);
          }}>Continue</button>
        </div>
        :
        <div className='right-side sides'>
          <div id='container-box-form'>
            <label className='flex-cl'>CARDHOLDER NAME
              <input maxlength="30" className='full' type='text' placeholder='e.g. Jane Appleseed'
                onChange={e => {
                  setData((prevState) => ({
                    ...prevState,
                    name: e.target.value
                  }));
                  nameRules(e.target.value)
                }}
              />
              {correctName ? '' : <span className='warning'>Name cannot be empty or less than 3 characters</span>}
            </label>
            <label className='flex-cl'>CARD NUMBER
              <input maxLength='19' className='full' type='text' placeholder='e.g. 1234 5678 9123 0000'
                onChange={e => {
                  setData((prevState) => ({
                    ...prevState,
                    cardNumber: e.target.value
                  }));
                  cardNumberRules(e.target.value);
                }}
              />
              {correctCardNumber ? '' : <span className='warning'>Don't forget the spaces and can't be less than 19 characters</span>}
            </label>
            <div className='section-two-form'>
              <label>EXP. DATE (MM/YY)
                <div className='flex'>
                  <input max='2' type='number' placeholder='MM'
                    onChange={e => {
                      setData((prevState) => ({
                        ...prevState,
                        month: e.target.value
                      }));
                      dateRules(e.target.value);
                    }}
                  />
                  <input type='number' placeholder='YY'
                    onChange={e => {
                      setData((prevState) => ({
                        ...prevState,
                        year: e.target.value
                      }));
                      dateRules(e.target.value);
                    }}
                  />
                </div>
                {correctDate ? '' : <span className='warning'>Can't be bigger than 99 or blank</span>}
              </label>
              <label className='flex-cl'>CVC
                <input className='half' type='number' placeholder='e.g. 123'
                  onChange={e => {
                    setData((prevState) => ({
                      ...prevState,
                      cvc: e.target.value
                    }));
                    cvcRules(e.target.value);
                  }}
                />
                {correctCvc ? '' : <span className='warning'>Can't be blank and different of 2 characters</span>}
              </label>
            </div>
            <button className='confirm flex-cl full' type='button'
              onClick={() => {
                checkInputRules();
              }}
            >Confirm</button>
          </div>
        </div>
      }
    </Container>
  );
}

export default App;
