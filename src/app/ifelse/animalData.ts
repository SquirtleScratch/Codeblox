// const initialHabitatData = [{ label: 'Arctic', image: '/habitatimages/arctic.png' }, { label: 'Desert', image: '/habitatimages/desert.png' }, { label: 'Jungle', image: '/habitatimages/jungle.png' }, { label: 'Mountain', image: '/habitatimages/mountain.png' }, { label: 'Swamp', image: '/habitatimages/swamp.png' }, { label: 'Ocean', image: '/habitatimages/ocean.webp' }, { label: 'Savannah', image: '/habitatimages/savannah.png' }]

// const initialData = [{ label: 'Desert', image: '/animalimages/camel.png' }, { label: 'Jungle', image: '/animalimages/monkey.webp' }, { label: 'Arctic', image: '/animalimages/penguin.webp' }, { label: 'Mountain', image: '/animalimages/alpaca.webp' }, { label: 'Swamp', image: '/animalimages/scarletibis.webp' }, { label: 'Ocean', image: '/animalimages/fish.webp' }, { label: 'Savannah', image: '/animalimages/giraffe.webp' }]

const arcticAnimals = [
    { image: '/animalimages/reindeer.png', animal: "Reindeer", grouping: "mammal", color: "brown", food: "grass", label: "Arctic" },
    { image: '/animalimages/hare.png', animal: "Hare", grouping: "mammal", color: "white", food: "grass", label: "Arctic" },
    { image: '/animalimages/ox.png', animal: "Ox", grouping: "mammal", color: "brown", food: "grass", label: "Arctic" }

]

const desertAnimals = [
    { image: '/animalimages/camel.png', animal: "Camel", grouping: "mammal", color: "brown", food: "grass", label: "Desert" },
    { image: '/animalimages/kangarooRat.png', animal: "Kangaroo Rat", grouping: "mammal", color: "brown", food: "grass", label: "Desert" },
    { image: '/animalimages/rattlesnake.png', animal: "Rattlesnake", grouping: "reptile", color: "brown", food: "small mammals", label: "Desert" }

]

const jungleAnimals = [
    { image: '/animalimages/macaw.png', animal: "Macaw", grouping: "bird", color: "red", food: "fruit", label: "Jungle" },
    { image: '/animalimages/frog.png', animal: "Frog", grouping: "amphibian", color: "green", food: "insects", label: "Jungle" },
    { image: '/animalimages/lizard.png', animal: "Lizard", grouping: "reptile", color: "green", food: "insects", label: "Jungle" }

]

const mountainAnimals = [
    { image: '/animalimages/alpaca.webp', animal: "Alpaca", grouping: "mammal", color: "white", food: "grass", label: "Mountain" },
    { image: '/animalimages/goat.png', animal: "Goat", grouping: "mammal", color: "white", food: "grass", label: "Mountain" },
    { image: '/animalimages/eagle.png', animal: "Eagle", grouping: "bird", color: "brown", food: "small mammals", label: "Mountain" }

]

const swampAnimals = [
    { image: '/animalimages/scarletibis.webp', animal: "Scarlet Ibis", grouping: "bird", color: "red", food: "crabs", label: "Swamp" },
    { image: '/animalimages/pelican.png', animal: "Pelican", grouping: "bird", color: "white", food: "fish", label: "Swamp" },
    { image: '/animalimages/egret.webp', animal: "Egret", grouping: "bird", color: "white", food: "fish", label: "Swamp" }
]

const freshWaterAnimals = [
    { image: '/animalimages/axolotl.png', animal: "Axolotl", grouping: "amphibian", color: "black", food: "worms", label: "Fresh Water" },
    { image: '/animalimages/heron.png', animal: "Heron", grouping: "bird", color: "grey", food: "fish", label: "Fresh Water" },
    { image: '/animalimages/alligator.png', animal: "Alligator", grouping: "reptile", color: "grey", food: "fish", label: "Fresh Water" },
]

const savannaAnimals = [
    { image: '/animalimages/hyena.png', animal: "Hyena", grouping: "mammal", color: "brown", food: "other animals", label: "Savanna" },
    { image: '/animalimages/grasshopper.png', animal: "Grasshopper", grouping: "insect", color: "brown", food: "grass", label: "Savanna" },
    { image: '/animalimages/wildebeest.png', animal: "Wildebeest", grouping: "mammal", color: "brown", food: "grass", label: "Savanna" },

]

const initialData = [
    { label: 'Arctic', image: '/habitatimages/arctic.png', animals: arcticAnimals },
    { label: 'Desert', image: '/habitatimages/desert.png', animals: desertAnimals },
    { label: 'Jungle', image: '/habitatimages/jungle.png', animals: jungleAnimals },
    { label: 'Mountain', image: '/habitatimages/mountain.png', animals: mountainAnimals },
    { label: 'Swamp', image: '/habitatimages/swamp.png', animals: swampAnimals },
    { label: 'Fresh Water', image: '/habitatimages/freshWater.png', animals: freshWaterAnimals },
    { label: 'Savanna', image: '/habitatimages/savannah.png', animals: savannaAnimals }
]


export default initialData