// const initialHabitatData = [{ label: 'Arctic', image: '/habitatimages/arctic.png' }, { label: 'Desert', image: '/habitatimages/desert.png' }, { label: 'Jungle', image: '/habitatimages/jungle.png' }, { label: 'Mountain', image: '/habitatimages/mountain.png' }, { label: 'Swamp', image: '/habitatimages/swamp.png' }, { label: 'Ocean', image: '/habitatimages/ocean.webp' }, { label: 'Savannah', image: '/habitatimages/savannah.png' }]

// const initialData = [{ label: 'Desert', image: '/animalimages/camel.png' }, { label: 'Jungle', image: '/animalimages/monkey.webp' }, { label: 'Arctic', image: '/animalimages/penguin.webp' }, { label: 'Mountain', image: '/animalimages/alpaca.webp' }, { label: 'Swamp', image: '/animalimages/scarletibis.webp' }, { label: 'Ocean', image: '/animalimages/fish.webp' }, { label: 'Savannah', image: '/animalimages/giraffe.webp' }]

const arcticAnimals = [
    { image: '/animalimages/penguin.webp', name: "Penguin", grouping: "bird", color: "black and white", food: "fish", label: "Arctic" }
]

const desertAnimals = [
    { image: '/animalimages/camel.png', name: "Camel", grouping: "mammal", color: "brown", food: "grass", label: "Desert" }
]

const jungleAnimals = [
    { image: '/animalimages/monkey.webp', name: "Monkey", grouping: "mammal", color: "brown", food: "fruit" , label: "Jungle"},
    { image: '/animalimages/frog.png', name: "Frog", grouping: "amphibian", color: "green", food: "insects", label: "Jungle" }
]

const mountainAnimals = [
    { image: '/animalimages/alpaca.webp', name: "Alpaca", grouping: "mammal", color: "white", food: "grass", label: "Mountain" }
]

const swampAnimals = [
    { image: '/animalimages/scarletibis.webp', name: "Scarlet Ibis", grouping: "bird", color: "red", food: "crabs", label: "Swamp" }
]

const oceanAnimals = [
    { image: '/animalimages/fish.webp', name: "Fish", grouping: "fish", color: "blue", food: "algae", label: "Ocean" },
    { image: '/animalimages/squid.png', name: "Squid", grouping: "cephalopod", color: "pink", food: "fish", label: "Ocean" }
]

const savannahAnimals = [
    { image: '/animalimages/giraffe.webp', name: "Giraffe", grouping: "mammal", color: "orange", food: "leaves", label: "Savannah" }
]

const initialData = [
    { label: 'Arctic', image: '/habitatimages/arctic.png', animals: arcticAnimals },
    { label: 'Desert', image: '/habitatimages/desert.png', animals: desertAnimals },
    { label: 'Jungle', image: '/habitatimages/jungle.png', animals: jungleAnimals },
    { label: 'Mountain', image: '/habitatimages/mountain.png', animals: mountainAnimals },
    { label: 'Swamp', image: '/habitatimages/swamp.png', animals: swampAnimals },
    { label: 'Ocean', image: '/habitatimages/ocean.png', animals: oceanAnimals },
    { label: 'Savannah', image: '/habitatimages/savannah.png', animals: savannahAnimals }
]


export default initialData