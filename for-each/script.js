const URL = "https://restcountries.com/v3.1/all";
const request = new XMLHttpRequest();

request.open("GET", URL);
request.send();

request.onload = () => {
  
    const data = JSON.parse(request.responseText);


    console.log('Details of countries:');
    data.forEach(country => {
      const name = country.name.common;
      const capital = country.capital ? country.capital[0] : 'N/A';
      const flag = country.flags ? country.flags.png : 'N/A';
      console.log('Name:', name, '| Capital:', capital, '| Flag:', flag);
    });


  } ;


