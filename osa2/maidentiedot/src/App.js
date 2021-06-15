import {useState, useEffect} from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'
import CountryInfo from './components/CountryInfo'
import Filter from './components/Filter'

function App() {
const [allCountries, setAllCountries] = useState([])
const [newFilter, setNewFilter] = useState('')
const filteredCountries = allCountries.filter((country) => 
country.name.toLowerCase().includes(newFilter.toLowerCase())
)


function handleFilterChange(event) {
  setNewFilter(event.target.value)
}


useEffect(() => {
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log('promise fulfilled')
      setAllCountries(response.data)
    })
}, [])

  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange}/>
      <CountryList data={filteredCountries}/>
    </div>
  );
}

export default App;
