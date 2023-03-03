import { useState, useEffect } from "react";
import axios from 'axios'
import CountryList from "./components/CountryList";
import CountryInfo from "./components/CountryInfo";

const App = () => {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState(null)
  const [country, setCountry] = useState(null)


  let foundCountry = null
  const displayedCountries = countries?.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase()))
  
  if(displayedCountries?.length === 1) {
    foundCountry = displayedCountries[0]
  }
  else {
    foundCountry = country
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const onSearch = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    setValue(event.target.value)
    setCountry(null)
  }

  const showCountry = (country) => {
    setCountry(country)
  }

  return (
    <div>
      <h1>Infortmation for countries</h1>
      <form onSubmit={onSearch}>
        Enter country name: <input value={value} onChange={handleChange}></input>
      </form>
      {
        foundCountry
          ? <CountryInfo country={foundCountry}/>
          : <CountryList
              displayedCountries={displayedCountries} 
              showCountry={showCountry}
              value={value}
            />
      }
    </div>
  )
}

export default App;
