// Get data

function Country(name, short, population, flag, continent){
    this.name = name;
    this.short = short;
    this.population = population;
    this.flag = flag;
    this.continent = continent;
}

// Components

const menuButton = () => {
    return`
    <button id="menuButton">
        <svg width="40" height="40">
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
            <rect width="20" height="2"/>
        </svg>
    </button>
    `;
}

const header = (logo, button) => {
    return `
    <header>
        <a id="logo">${logo}</a>
        ${button()}
    </header>
    `;
}

const floater = () => {
    return`
    <nav id="floating-menu">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <h3>Continents</h3>
        <a href="/europe/">Europe</a>
        <a href="/asia/">Asia</a>
        <a href="/africa/">Africa</a>
        <a href="/north-am/">North America</a>
        <a href="/south-am/">South America</a>
        <a href="/oceania/">Oceania</a>
        <a href="/antarctica/">Antarctica</a>
    </nav>
    `;
}

const countryCard = (name, short, population, flag, continent) => {
    return `
    <div class="card">
        <section>
            <h1>${name}</h1>
            <p1>Abbreviation: ${short}</p1><br>
            <p2>Population: ${population}</p2><br>
            <img src="${flag}"><br>
            <p2>Continent: ${continent}</p2>
        </section>
    </div>
    `;
}

/* const countryCards = (countries) => {

    return`
    <div>${countries}</div>
    `
} */


const loadEvent = async _ => { // async: meg kell várnia a load eseményen belül egyéb processeket

    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json(); //countryRes-re vár
    /* console.log(countryArr[0]); */

    // Process data

    let countries = countryArr.map(function (country){
        return new Country(country.name.common, country.cca3, country.population, country.flags.svg, country.continents[0])
    })
    console.log(countries);

    let  content = ""

    for (const country of countries) {

        content += countryCard(country.name, country.short, country.population, country.flag, country.continent)
    }

    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", header("Countries", menuButton))
    rootElement.insertAdjacentHTML("beforeend", content)
    rootElement.insertAdjacentHTML("beforeend", floater /* openNav, closeNav */)

    const actionMenuButton = document.getElementById("menuButton");

    actionMenuButton.addEventListener("click", (event) => {
        event.target.classList.toggle("clicked");
    });

/*      function openNav() {
        document.getElementById("floating-menu").style.width = "400px";
      }
      
      
    function closeNav() {
        document.getElementById("floating-menu").style.width = "0";
      } */ 

/*     const europeanCountries = countries.filter(country => {
        if (country.continent === "Europe") {
            return country
        } 
    } */
    
}

window.addEventListener("load", loadEvent) 
