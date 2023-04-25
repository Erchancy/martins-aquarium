const database = {
    fish: [
        {
            image: "https://post.healthline.com/wp-content/uploads/2020/04/Lionfish-732x549-thumbnail.jpg",
            species: "Pterois Volitans",
            length: 1,
            name: "Simba",
            harvest: "Barisal, Bangladesh",
            diet: "Small fish, invertebrates, and mollusks"
        },
        {
            image: "https://cdn.the-scientist.com/assets/articleNo/70691/aImg/48362/freshwater-angelfish-800-o.jpg",
            species: "Pterophyllum Scalare",
            length: 3,
            name: "Rory",
            harvest: "Manaus, Brazil",
            diet: "Omnivorous, small worms and crustaceans"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Cyprinodon_diabolis%2C_males.jpg/1200px-Cyprinodon_diabolis%2C_males.jpg",
            species: "Cyprinodon Diabolis",
            length: 1,
            name: "Dante and Vergil",
            harvest: "Death Valley, CA, USA",
            diet: "Changes depending on the season but can range from algea to beetles"
        },
        {
            image: "https://www.aquariumofpacific.org/images/made_new/images-conservation-Giant_Seabass02_900_q85.jpg",
            species: "Stereolepis Gigas",
            length: 10,
            name: "Big Phil",
            harvest: "El Fuerte, Sinaloa, Mexico",
            diet: "An apex predator, it eats mackeral, sheephead, and even sand bass."
        }
    ],

    tips: [
        {
            header: "Fish Care Tips",
            tips: "Food, water, filtration and heat are the basic elements you’ll need to provide for your pet fish, but the exact specifications will depend on the type of fish you choose, how big it grows and a number of other factors. Depending on the type of fish you choose, you’ll need an aquarium large enough to support the fish’s growth, with an air pump and submersible heater. A good rule of thumb for aquarium size is one gallon of water per every inch of full-grown fish. Tropical fish require heating elements in their habitats, but there are some freshwater fish (like goldfish) that prefer cooler temperatures and may not need a heater. It’s crucial that you do your research to find out what specific equipment the pet fish you’re considering needs."
        }
    ],

    locations: [
        {
            header: "El Fuerte",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/El_Fuerte%2C_Sinaloa%2C_Plaza_de_Armas.JPG/250px-El_Fuerte%2C_Sinaloa%2C_Plaza_de_Armas.JPG",
            details: "A city and municipality in the northwestern Mexican state of Sinaloa. El Fuerte means 'The Fort' and was given a Pueblo Magico ('Magical Town') touristic label in 2009 for it's many attraction and historical importance."
        },
        {
            header: "Devil's Hole",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Devils_Hole_4.jpg/250px-Devils_Hole_4.jpg",
            details: "Devils Hole is a geothermal pool within a limestone cavern in the Amargosa Desert in the Amargosa Valley of Nevada, east over the Amargosa Range and Funeral Mountains from Death Valley. Devils Hole branches into caverns at least 130 m (430 ft) deep, whose bottom has never been mapped. According to geologists, the caves were formed over 500,000 years ago."
        },
        {
            header: "Manaus",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Skyline-de-Manaus.jpg/278px-Skyline-de-Manaus.jpg",
            details: "Manaus is the capital and largest city of the Brazilian state of Amazonas. Located at the east center of the state, the city is the center of the Manaus metropolitan area and the largest metropolitan area in the North Region of Brazil by urban landmass. It is situated near the confluence of the Negro and Solimões rivers. It is one of the only cities in the Amazon Rainforest with a population over 1 million people, alongside Belém."
        },
        {
            header: "Barisal",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Barisal_Launch_Terninal.jpg/280px-Barisal_Launch_Terninal.jpg",
            details: "Officially known as Barishal, is a major city that lies on the banks of the Kirtankhola river in south-central Bangladesh. It is the largest city and the administrative headquarter of both Barisal District and Barisal Division. The city was once called the Venice of the East or the Venice of Bengal."
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}