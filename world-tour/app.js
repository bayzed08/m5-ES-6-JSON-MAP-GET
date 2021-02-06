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
        `
        countrydiv.innerHTML = countryInfo;
        countriesdiv.appendChild(countrydiv);
    }

}