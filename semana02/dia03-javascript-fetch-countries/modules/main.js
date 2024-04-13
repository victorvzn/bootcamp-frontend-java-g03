import fetchCountries from './services.js'
import { renderCountries } from './utils.js'

fetchCountries()
  .then(countries => renderCountries(countries))