import { getFish } from './database.js'

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishList__details">
            <div><img  class="fishList__details-img" src="${fish.image}" /></div>
            <div class="fish__details">${fish.name}</div>
            <div class="fish__details">${fish.species}</div>
            <div class="fish__details">${fish.length}</div>
            <div class="fish__details">${fish.harvest}</div>
            <div class="fish__details">${fish.diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}