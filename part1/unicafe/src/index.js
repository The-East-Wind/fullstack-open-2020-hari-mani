import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistic = ({text,value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({good,neutral,bad}) => {
  if(good===0&&bad===0&&neutral===0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  let all = good+neutral+bad;
  let average = (good-bad)/all;
  let positive = (good*100/all);
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average||0} />
          <Statistic text="positive" value={(positive||0)+' %'} />
        </tbody>
      </table>
    </div>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <div>
          <Button handleClick={()=>setGood(good+1)} text="good" />
          <Button handleClick={()=>setNeutral(neutral+1)} text="neutral" />
          <Button handleClick={()=>setBad(bad+1)} text="bad" />
        </div>
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)