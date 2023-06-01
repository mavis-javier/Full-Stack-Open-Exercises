import { useState } from 'react'

const DisplayHeader = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  ) 
}

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [total, setTotal] = useState(0)

  const [sum, setSum] = useState(0)
  const [avg, setAvg] = useState(0)
  const [positive, setPositive] = useState(0)

  // used to count # clicks needed in Statistics component
  const [allClicks, setAllClicks] = useState(0)

  const incrementGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    const updatedTotal = total + 1
    setSum(sum + 1)
    const updatedSum = sum + 1
    setAvg(updatedSum / updatedTotal)
    const updatedGood = good + 1
    setPositive((updatedGood / updatedTotal) * 100)
    setAllClicks(allClicks + 1)
  }

  const incrementNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    const updatedTotal = total + 1
    setSum(sum)
    const updatedSum = sum
    setAvg(updatedSum / updatedTotal)
    const updatedGood = good
    setPositive((updatedGood / updatedTotal) * 100)
    setAllClicks(allClicks + 1)
  }

  const incrementBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    const updatedTotal = total + 1
    setSum(sum - 1)
    const updatedSum = sum - 1
    setAvg(updatedSum / updatedTotal)
    const updatedGood = good
    setPositive((updatedGood / updatedTotal) * 100)
    setAllClicks(allClicks + 1)
  }

  const Statistics = (props) => {
    if(props.allClicks === 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }
    return (
      <div>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
        <StatisticLine text="all" value ={total} />
        <StatisticLine text="average" value ={avg} />
        <p>positive {positive} %</p>
      </div>    
    )
  }

  return (
    <div>
      <DisplayHeader text='give feedback' />
      <Button handleClick={incrementGood} text='good' />
      <Button handleClick={incrementNeutral} text='neutral' />
      <Button handleClick={incrementBad} text='bad' />      
      <DisplayHeader text='statistics' />      
      <Statistics allClicks={allClicks} />
    </div>
  )
}

export default App