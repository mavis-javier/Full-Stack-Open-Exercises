import { useState } from 'react'

const DisplayHeader = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  ) 
}

const DisplayStats = ({ text, num }) => {
  return (
    <p>{text} {num}</p>
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

  const incrementGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    const updatedTotal = total + 1
    setSum(sum + 1)
    const updatedSum = sum + 1
    setAvg(updatedSum / updatedTotal)
    const updatedGood = good + 1
    setPositive((updatedGood / updatedTotal) * 100)
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
  }

  return (
    <div>
      <DisplayHeader text='give feedback' />
      <Button handleClick={incrementGood} text='good' />
      <Button handleClick={incrementNeutral} text='neutral' />
      <Button handleClick={incrementBad} text='bad' />      
      <DisplayHeader text='statistics' />      
      <DisplayStats text='good' num={good}/> 
      <DisplayStats text='neutral' num={neutral} />
      <DisplayStats text='bad' num={bad} />
      <DisplayStats text='total' num={total} />
      <DisplayStats text='average' num={avg} />
      <p>positive {positive} %</p>
    </div>
  )
}

export default App