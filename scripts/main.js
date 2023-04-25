import { fishList } from './fish.js'
import { tipList } from './tips.js'
import { locationList } from './locations.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const fishHTMLElement = document.querySelector(".fishList")

fishHTMLElement.innerHTML = fishList()

const tipHTMLElement = document.querySelector(".fishCare")

tipHTMLElement.innerHTML = tipList()

const locationHTMLElement = document.querySelector(".locations")

locationHTMLElement.innerHTML = locationList()