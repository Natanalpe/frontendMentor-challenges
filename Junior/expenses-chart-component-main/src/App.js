import './App.css';
import headImage from './images/logo.svg';
import daysData from './data/data.json';
import Tooltip from '@mui/material/Tooltip'
import Zoom from '@mui/material/Zoom';
import {
  Container
} from './app.style.js';

function App() {


  function CalcTotal() {
    var total = 0;
    for (var i in daysData) {
      total += daysData[i].amount
    };
    return `$${total}`;
  };

  const DaysList = () => {
    const dataJson = daysData;
    const biggestValue = Math.max(...dataJson.map(e => e.amount));
    const CalcPercent = (val) => (val / biggestValue) * 100;
    const red = 'hsl(10, 79%, 65%)';
    const cyan = 'hsl(186, 34%, 60%)';

    return (
      <ul id='graph'>
        {
          dataJson.map(e =>
            <li key={dataJson.indexOf(e) + 1}>
              <Tooltip 
                      title={`$${e.amount}`} 
                      color='light' 
                      placement="top" 
                      TransitionComponent={Zoom}>
              <div className='visual-item-graph'
                style={{
                  background: `${e.amount === biggestValue ? cyan : red}`,
                  height: `${CalcPercent(e.amount)}px`
                }}></div>
              </Tooltip>
              <span className='values-graph patterns-font-grey'>
                {e.day}
              </span>
            </li>
          )}
      </ul>
    )
  };

  return (
    <Container>
      <div id='box'>
        <div className='head-comp patterns'>
          <h1 className='patterns-font-grey'>My balance</h1>
          <span>$921.48</span>
          <img src={headImage} alt='Logo' />
        </div>
        <div className='body-comp patterns'>
          <h2>Spending - last 7 days</h2>
          {/* component graph here */}
          <DaysList />
          <hr />
          <h3 className='patterns-font-grey'>Total this month</h3>
          <div className='body-footer'>
            <span className='total-spend'>{CalcTotal()}</span>
            <span className='percent'>+2.4%</span>
            <p className='patterns-font-grey'>from last month</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
