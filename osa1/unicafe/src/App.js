import React, { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const percentage = (good, neutral, bad) => {
  let total = good + neutral + bad
  let nega = neutral + bad
  return (
  (nega/total*100)
  )
}


const average = (taulukko) => {
  var sum = 0;
  for (var i = 0; i < taulukko.length; i++) sum += taulukko[i];
  return (
  sum / taulukko.length
  )
}

const Statistics = (props) => {
  let total = props.good + props.neutral + props.bad
  if (props.good || props.neutral || props.bad === true) {
  return(
    <div>
    <h2>Statistics</h2>
    <table>
      <tbody>
        <StatisticsLine text="Good" value={props.good}/>
        <StatisticsLine text="Neutral" value={props.neutral}/>
        <StatisticsLine text="Bad" value={props.bad}/>
        <StatisticsLine text="Total" value={total}/>
        <StatisticsLine text="Average" value={average(props.allClicks)}/>
        <StatisticsLine text="Positive" value={percentage(props.good, props.neutral, props.bad)}/>
      </tbody>
    </table>
    </div>
    )
  }
  return (
    <div>
      No data
    </div>
  )
}

const StatisticsLine = (props) => {
return (
  <>
    <tr><td>{props.text}</td><td>{props.value}</td></tr>
  </>
)
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleClickGood= () => {
    setAll(allClicks.concat(1))
    setGood(good + 1)
  }

  const handleClickNeutral = () => {
    setAll(allClicks.concat(0.5))
    setNeutral(neutral + 1)
  }

  const handleClickBad = () => {
    setAll(allClicks.concat(-1))
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good" handleClick={handleClickGood}/>
      <Button text="Neutral" handleClick={handleClickNeutral}/>
      <Button text="Bad" handleClick={handleClickBad}/>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
    </div>
  )
}

export default App