import { getTips } from './database.js'

let htmlString = '<aside class="fishCare">'

export const tipList = () => {
    const tips = getTips()
    for (const tip of tips) {
        htmlString += `<h3 class="fishCare__header">${tip.header}</h3>
        <p class="fishCare__tips">${tip.tips}</p>`
    }

    return htmlString += '</aside>'
}