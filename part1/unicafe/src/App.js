import { useState } from 'react'

const Button = ({feedback, text}) => <button onClick={feedback}>{text}</button>

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good-bad)/all
  const positive = (good/all)*100

  if(all==0) {
    return <div>No feedback given</div>
  }

  return (
    <table>
      <tbody>
        <StatisticsLine text='good' value={good}/>
        <StatisticsLine text='neutral' value={neutral}/>
        <StatisticsLine text='bad' value={bad}/>
        <StatisticsLine text='all' value={all}/>
        <StatisticsLine text='average' value={average}/>
        <StatisticsLine text='positive' value={positive+'%'}/>
      </tbody>
    </table>

  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const AddToGood = () => {
    console.log('good clicked!')
    setGood(good+1)
  }

  const AddToNeutral = () => {
    console.log('neutral clicked!')
    setNeutral(neutral+1)
  }

  const AddToBad = () => {
    console.log('bad clicked!')
    setBad(bad+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button feedback={AddToGood} text='good'/>
      <Button feedback={AddToNeutral} text='neutral'/>
      <Button feedback={AddToBad} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App