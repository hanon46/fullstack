const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} saar.</p>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <p>Greetings saar.</p>
      <Hello name='Erika'/>
      <Hello name='Battler'/>
    </div>
  )
}

export default App;
