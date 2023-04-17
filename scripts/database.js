const database = {
    fish: [
        {
            image: "https://post.healthline.com/wp-content/uploads/2020/04/Lionfish-732x549-thumbnail.jpg",
            species: "Pterois Volitans",
            length: "1ft 1.6in",
            name: "Simba",
            harvest: "Barisal, Bangladesh",
            diet: "Small fish, invertebrates, and mollusks"
        },
        {
            image: "https://cdn.the-scientist.com/assets/articleNo/70691/aImg/48362/freshwater-angelfish-800-o.jpg",
            species: "Pterophyllum Scalare",
            length: "3.3in",
            name: "Rory",
            harvest: "Manaus, Brazil",
            diet: "Omnivorous, small worms and crustaceans"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Cyprinodon_diabolis%2C_males.jpg/1200px-Cyprinodon_diabolis%2C_males.jpg",
            species: "Cyprinodon Diabolis",
            length: "1.1in",
            name: "Dante and Vergil",
            harvest: "Death Valley, CA, USA",
            diet: "Changes depending on the season but can range from algea to beetles"
        },
        {
            image: "https://www.aquariumofpacific.org/images/made_new/images-conservation-Giant_Seabass02_900_q85.jpg",
            species: "Stereolepis Gigas",
            length: "7ft 9in",
            name: "Big Phil",
            harvest: "El Fuerte, Siinaloa, Mexico",
            diet: "An apex predator, it eats mackeral, sheephead, and even sand bass."
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}