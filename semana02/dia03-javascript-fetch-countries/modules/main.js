import fetchCountries from './services.js'

fetchCountries()
  .then(countries => console.log(countries))