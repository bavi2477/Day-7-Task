const URL = "https://restcountries.com/v3.1/all";
const request = new XMLHttpRequest();

request.open("GET", URL);
request.send();

request.onload = () => {
  
    const data = JSON.parse(request.responseText);

    // Get all countries from Asia using filter function
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log('Countries in Asia:', asiaCountries);

    // Get all countries with a population of less than 2 lakhs using filter function
    const lowPopulationCountries = data.filter(country => {
      const population = country.population ;
      return population < 200000;
    });
    console.log('Countries with population less than 2 lakhs:', lowPopulationCountries);

    // Print the total population of countries using reduce function
    const totalPopulation = data.reduce((accumulator, country) => {
      const population = country.population ;
      return accumulator + population;
    }, 0);
    console.log('Total Population of all countries:', totalPopulation);

    // Print the country that uses US dollars as currency
    const usDollarCountries = data.filter(country => {
      const currencies = country.currencies;
      return currencies && currencies.hasOwnProperty('USD');
    });
    console.log('Countries using US dollars as currency:', usDollarCountries);

  
};


