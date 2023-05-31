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

  const incrementGood = () => {
    setGood(good + 1)
  }

  const incrementNeutral = () => {
    setNeutral(neutral + 1)
  }

  const incrementBad = () => {
    setBad(bad + 1)
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
    </div>
  )
}

export default App