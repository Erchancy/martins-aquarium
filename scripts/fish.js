import { getFish } from './database.js'

const mostHolyFish = () => {
    const fishes = getFish()
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishes) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

const soldierFish = () => {
    const fishes = getFish()
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fish of fishes) {
        if (fish.length % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

const nonHolyFish = () => {
    const fishes = getFish()
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of fishes) {
        if (fish.length % 3 === 0) {}
        else if (fish.length % 5 === 0) {}
        else (regularFish.push(fish))
    }
    return regularFish
}

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const holyFish = mostHolyFish()
    const soldiers = soldierFish()
    const regularFish = nonHolyFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of holyFish) {

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

    for (const fish of soldiers) {

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

    for (const fish of regularFish) {

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

