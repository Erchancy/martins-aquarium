import { getLocations } from "./database.js"

let htmlString = '<section class="locations">'

export const locationList = () => {

    const locations = getLocations()

    for (const location of locations) {
        htmlString += `<dl class ="locations__list">
        <h3 class="locations__list-header">${location.header}</h3>
        <dd><img src=${location.image} class="locations__list-img"></dd>
        <dd class="locations__list-details">${location.details}</dd>
    </dl>
    `
    }

    return htmlString += '</section>'
}