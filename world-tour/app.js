fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

const displayCountries = countries => {
    //console.log(countries);
    const countriesdiv=document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countrydiv = document.createElement('div');

        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // countrydiv.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // countrydiv.appendChild(p);
        countrydiv.className = 'country';
        countryInfo = `
        <h2 class="country-name">${country.name}</h2>
        <p class="country-capital">${country.capital}</p>
        <button onclick="displayCountryDetails('${country.name}')">Details</button>
        `
        countrydiv.innerHTML = countryInfo;
        countriesdiv.appendChild(countrydiv);
    }
}
const displayCountryDetails = countryName => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    //console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => renderCountryinfo(data[0]));
}
const renderCountryinfo = country => {
    console.log(country);
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <div class="countryCSS">
         <h1>${country.name}</h1>
         <p>population: ${country.population}</p>
         <p>Area: ${country.area}</p>
         <p>Region Area: ${country.region}</p>
         <p> Time Zone: ${country.timezones}</p>
         <img src=${country.flag} alt=${country.name}>
    </div>`;
}