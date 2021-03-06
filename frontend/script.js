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
        <a href="/europe/" class="conti-menu">Europe</a>
        <a href="/asia/" class="conti-menu">Asia</a>
        <a href="/africa/" class="conti-menu">Africa</a>
        <a href="/north-am/" class="conti-menu">North America</a>
        <a href="/south-am/" class="conti-menu">South America</a>
        <a href="/oceania/" class="conti-menu">Oceania</a>
        <a href="/antarctica/" class="conti-menu">Antarctica</a>
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

        
        if (country.continent = "Europe"){
            /* parentNode.querySelector(".card").className += "europeCard" */
            document.getElementsByClassName("card").className += "europeCard"
        }
        else if (country.continent = "Asia"){
            document.getElementsByClassName("card").className += "asiaCard"
        }
        else if (country.continent = "Africa"){
            document.getElementsByClassName("card").className += "africaCard"
        }
        else if (country.continent = "North-America"){
            document.getElementsByClassName("card").className += "noramCard"
        }
        else if (country.continent = "South-America"){
            document.getElementsByClassName("card").className += "latamCard"
        }
        else if (country.continent = "Oceania"){
            document.getElementsByClassName("card").className += "oceaniaCard"
        }
        else {
            document.getElementsByClassName("card").className += "antarcticaCard"
        }
    }

    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", header("Countries", menuButton))
    rootElement.insertAdjacentHTML("beforeend", content)
    rootElement.insertAdjacentHTML("beforeend", floater /* openNav, closeNav */)

    const actionMenuButton = document.getElementById("menuButton");

    actionMenuButton.addEventListener("click", (event) => {
        event.target.classList.toggle("clicked");
    });

    

/*  function openNav() {
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
