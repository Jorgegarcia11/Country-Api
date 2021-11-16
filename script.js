const searchCountry = document.getElementById("searchCountry");
const country = document.getElementById("country");

const darkMode = document.getElementById("change");
const headerHTML = document.getElementById("headerHTML");
const bodyHTML = document.getElementById("bodyHTML");
const inputSection = document.getElementById("inputSection");
const select = document.getElementById("select")

/* Funcion pedido de informacion de paises en general */

const getInfoCountry = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(res => {
            const fragment = document.createDocumentFragment()
            if (country.innerHTML != "") {
                country.innerHTML = ""
            }
            for (const info of res) {
                const countryBody = document.createElement("div")
                const countryImg = document.createElement("img")
                const countryTitle = document.createElement("h2")
                const countryPopulation = document.createElement("p")
                const countryRegion = document.createElement("p")
                const countryCapital = document.createElement("p")

                const numberPoblation = parseInt(`${info.population}`)
                if (darkMode.textContent == "🌞 Light Mode") {
                    countryBody.classList.add("active")
                }

                countryImg.setAttribute("src", info.flags.png)
                countryTitle.textContent = `${info.name.common}`
                countryPopulation.textContent = `Population: ${numberPoblation}`
                countryRegion.textContent = `Region: ${info.region}`
                if (info.capital == undefined) {
                    countryCapital.textContent = `Capital: None`
                } else {
                    countryCapital.textContent = `Capital: ${info.capital}`
                }

                darkMode.addEventListener("click", (e) => {
                    countryBody.classList.add("active")
                })

                fragment.appendChild(countryImg)
                fragment.appendChild(countryTitle)
                fragment.appendChild(countryPopulation)
                fragment.appendChild(countryRegion)
                fragment.appendChild(countryCapital)
                countryBody.appendChild(fragment)
                country.appendChild(countryBody)
            }
        })
}

addEventListener("DOMContentLoaded", () => getInfoCountry())
addEventListener("resize", () => getInfoCountry())

select.addEventListener("change", (e) => {
    if (e.target[0].selected) {
        getInfoCountry()
    }
    if (e.target[1].selected) {
        getCountryAM()
    }
    if (e.target[2].selected) {
        getCountryAF()
    }
    if (e.target[3].selected) {
        getCountryAS()
    }
    if (e.target[4].selected) {
        getCountryEU()
    }
    if (e.target[5].selected) {
        getCountryOC()
    }
})

/* Funciones pedido de informacion de paises por regiones */

const getCountryAM = () => {
    fetch("https://restcountries.com/v3.1/region/am")
        .then(res => res.json())
        .then(res => {
            const fragment = document.createDocumentFragment()
            if (country.innerHTML != "") {
                country.innerHTML = ""
            }
            for (let am of res) {
                const countryBodyAM = document.createElement("div")
                const countryImgAM = document.createElement("img")
                const countryTitleAM = document.createElement("h2")
                const countryPopulationAM = document.createElement("p")
                const countryRegionAM = document.createElement("p")
                const countryCapitalAM = document.createElement("p")


                const numberPoblationAM = parseInt(`${am.population}`)
                if (darkMode.textContent == "🌞 Light Mode") {
                    countryBodyAM.classList.add("active")
                }

                countryImgAM.setAttribute("src", am.flags.png)
                countryTitleAM.textContent = `${am.name.common}`
                countryPopulationAM.textContent = `Population: ${numberPoblationAM}`
                countryRegionAM.textContent = `Region: ${am.region}`
                if (am.capital == undefined) {
                    countryCapitalAM.textContent = `Capital: None`
                } else {
                    countryCapitalAM.textContent = `Capital: ${am.capital}`
                }

                darkMode.addEventListener("click", (e) => {
                    countryBodyAM.classList.add("active")
                })

                fragment.appendChild(countryImgAM)
                fragment.appendChild(countryTitleAM)
                fragment.appendChild(countryPopulationAM)
                fragment.appendChild(countryRegionAM)
                fragment.appendChild(countryCapitalAM)
                countryBodyAM.appendChild(fragment)
                country.appendChild(countryBodyAM)
            }
        })
}


const getCountryAF = () => {
    fetch("https://restcountries.com/v3.1/region/af")
        .then(res => res.json())
        .then(res => {
            const fragment = document.createDocumentFragment()
            if (country.innerHTML != "") {
                country.innerHTML = ""
            }
            for (let af of res) {
                const countryBodyAF = document.createElement("div")
                const countryImgAF = document.createElement("img")
                const countryTitleAF = document.createElement("h2")
                const countryPopulationAF = document.createElement("p")
                const countryRegionAF = document.createElement("p")
                const countryCapitalAF = document.createElement("p")


                const numberPoblationAF = parseInt(`${af.population}`)
                if (darkMode.textContent == "🌞 Light Mode") {
                    countryBodyAF.classList.add("active")
                }

                countryImgAF.setAttribute("src", af.flags.png)
                countryTitleAF.textContent = `${af.name.common}`
                countryPopulationAF.textContent = `Population: ${numberPoblationAF}`
                countryRegionAF.textContent = `Region: ${af.region}`
                if (af.capital == undefined) {
                    countryCapitalAF.textContent = `Capital: None`
                } else {
                    countryCapitalAF.textContent = `Capital: ${af.capital}`
                }

                darkMode.addEventListener("click", (e) => {
                    countryBodyAF.classList.add("active")
                })

                fragment.appendChild(countryImgAF)
                fragment.appendChild(countryTitleAF)
                fragment.appendChild(countryPopulationAF)
                fragment.appendChild(countryRegionAF)
                fragment.appendChild(countryCapitalAF)
                countryBodyAF.appendChild(fragment)
                country.appendChild(countryBodyAF)
            }
        })
}

const getCountryAS = () => {
    fetch("https://restcountries.com/v3.1/region/asia")
        .then(res => res.json())
        .then(res => {
            const fragment = document.createDocumentFragment()
            if (country.innerHTML != "") {
                country.innerHTML = ""
            }
            for (let asia of res) {
                const countryBodyAS = document.createElement("div")
                const countryImgAS = document.createElement("img")
                const countryTitleAS = document.createElement("h2")
                const countryPopulationAS = document.createElement("p")
                const countryRegionAS = document.createElement("p")
                const countryCapitalAS = document.createElement("p")


                const numberPoblationAS = parseInt(`${asia.population}`)
                if (darkMode.textContent == "🌞 Light Mode") {
                    countryBodyAS.classList.add("active")
                }

                countryImgAS.setAttribute("src", asia.flags.png)
                countryTitleAS.textContent = `${asia.name.common}`
                countryPopulationAS.textContent = `Population: ${numberPoblationAS}`
                countryRegionAS.textContent = `Region: ${asia.region}`
                if (asia.capital == undefined) {
                    countryCapitalAS.textContent = `Capital: None`
                } else {
                    countryCapitalAS.textContent = `Capital: ${asia.capital}`
                }

                darkMode.addEventListener("click", (e) => {
                    countryBodyAS.classList.add("active")
                })

                fragment.appendChild(countryImgAS)
                fragment.appendChild(countryTitleAS)
                fragment.appendChild(countryPopulationAS)
                fragment.appendChild(countryRegionAS)
                fragment.appendChild(countryCapitalAS)
                countryBodyAS.appendChild(fragment)
                country.appendChild(countryBodyAS)
            }
        })
}

const getCountryEU = () => {
    fetch("https://restcountries.com/v3.1/region/europe")
        .then(res => res.json())
        .then(res => {
            const fragment = document.createDocumentFragment()
            if (country.innerHTML != "") {
                country.innerHTML = ""
            }
            for (let eu of res) {
                const countryBodyEU = document.createElement("div")
                const countryImgEU = document.createElement("img")
                const countryTitleEU = document.createElement("h2")
                const countryPopulationEU = document.createElement("p")
                const countryRegionEU = document.createElement("p")
                const countryCapitalEU = document.createElement("p")


                const numberPoblationEU = parseInt(`${eu.population}`)
                if (darkMode.textContent == "🌞 Light Mode") {
                    countryBodyEU.classList.add("active")
                }

                countryImgEU.setAttribute("src", eu.flags.png)
                countryTitleEU.textContent = `${eu.name.common}`
                countryPopulationEU.textContent = `Population: ${numberPoblationEU}`
                countryRegionEU.textContent = `Region: ${eu.region}`
                if (eu.capital == undefined) {
                    countryCapitalEU.textContent = `Capital: None`
                } else {
                    countryCapitalEU.textContent = `Capital: ${eu.capital}`
                }

                darkMode.addEventListener("click", (e) => {
                    countryBodyEU.classList.add("active")
                })

                fragment.appendChild(countryImgEU)
                fragment.appendChild(countryTitleEU)
                fragment.appendChild(countryPopulationEU)
                fragment.appendChild(countryRegionEU)
                fragment.appendChild(countryCapitalEU)
                countryBodyEU.appendChild(fragment)
                country.appendChild(countryBodyEU)
            }
        })
}

const getCountryOC = () => {
    fetch("https://restcountries.com/v3.1/region/oceania")
        .then(res => res.json())
        .then(res => {
            const fragment = document.createDocumentFragment()
            if (country.innerHTML != "") {
                country.innerHTML = ""
            }
            for (let oceania of res) {
                const countryBodyOC = document.createElement("div")
                const countryImgOC = document.createElement("img")
                const countryTitleOC = document.createElement("h2")
                const countryPopulationOC = document.createElement("p")
                const countryRegionOC = document.createElement("p")
                const countryCapitalOC = document.createElement("p")


                const numberPoblationOC = parseInt(`${oceania.population}`)
                if (darkMode.textContent == "🌞 Light Mode") {
                    countryBodyOC.classList.add("active")
                }

                countryImgOC.setAttribute("src", oceania.flags.png)
                countryTitleOC.textContent = `${oceania.name.common}`
                countryPopulationOC.textContent = `Population: ${numberPoblationOC}`
                countryRegionOC.textContent = `Region: ${oceania.region}`
                if (oceania.capital == undefined) {
                    countryCapitalOC.textContent = `Capital: None`
                } else {
                    countryCapitalOC.textContent = `Capital: ${oceania.capital}`
                }

                darkMode.addEventListener("click", (e) => {
                    countryBodyOC.classList.add("active")
                })

                fragment.appendChild(countryImgOC)
                fragment.appendChild(countryTitleOC)
                fragment.appendChild(countryPopulationOC)
                fragment.appendChild(countryRegionOC)
                fragment.appendChild(countryCapitalOC)
                countryBodyOC.appendChild(fragment)
                country.appendChild(countryBodyOC)
            }
        })
}

darkMode.addEventListener("click", () => {
    headerHTML.classList.add("active")
    bodyHTML.classList.add("active2")
    searchCountry.classList.add("active")
    select.classList.add("active")
    darkMode.textContent = "🌞 Light Mode"
})

/* Funcion para buscar por pais */

const searchAll = () => {
    let filterWord = searchCountry.value.toLowerCase();
    country.innerHTML = ""

    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(res => {
            const fragment = document.createDocumentFragment()

            for(let countryList of res){
                let countryName = countryList.name.common.toLowerCase();

                if(countryName.indexOf(filterWord) !== -1){
                    const countryBodyAny = document.createElement("div")
                    const countryImgAny = document.createElement("img")
                    const countryTitleAny = document.createElement("h2")
                    const countryPopulationAny = document.createElement("p")
                    const countryRegionAny = document.createElement("p")
                    const countryCapitalAny = document.createElement("p")

                    const numberPoblationAny = parseInt(`${countryList.population}`)

                    countryImgAny.setAttribute("src", countryList.flags.png)
                    countryTitleAny.textContent = `${countryList.name.common}`
                    countryPopulationAny.textContent = `Population: ${numberPoblationAny}`
                    countryRegionAny.textContent = `Region: ${countryList.region}`
                    if (countryList.capital == undefined) {
                        countryCapitalAny.textContent = `Capital: None`
                    } else {
                        countryCapitalAny.textContent = `Capital: ${countryList.capital}`
                    }
    
                    fragment.appendChild(countryImgAny)
                    fragment.appendChild(countryTitleAny)
                    fragment.appendChild(countryPopulationAny)
                    fragment.appendChild(countryRegionAny)
                    fragment.appendChild(countryCapitalAny)
                    countryBodyAny.appendChild(fragment)
                    country.appendChild(countryBodyAny)
                    
                }
            }
            if(country.innerHTML === ""){
                country.textContent = "Pais no encontrado"
            }
        })
}

searchCountry.addEventListener("keyup", searchAll)
