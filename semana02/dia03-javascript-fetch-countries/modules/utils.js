export const renderCountries = (countries = []) => {
  // console.log('Estoy en la función renderCountries')

  const countryListElement = document.querySelector('.app__list')

  let countryList = ''

  countries.forEach(country => {
    countryList += `
      <h1>${country.name.common}</h1>
    `
  })

  countryListElement.innerHTML = countryList
}