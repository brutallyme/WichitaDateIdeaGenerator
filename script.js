// Arrays of options for random selection
const restaurants = [
    "When Pigs Fly BBQ",
    "Meddys",
    "Kobe Japanese Steakhouse",
    "Olive Garden Italian Restaurant",
    "RibCrib BBQ",
    "Walk-On's Sports Bistreaux",
    "Cheddar's Scratch Kitchen",
    "K-Pot Korean BBQ & Hot Pot",
    "Bricktown Brewery",
    "Maple Street Pizza",
    "Big Biscuit",
    "Texas Roadhouse",
    "Red Robin Gourmet Burgers",
    "Rene's Restaurant",
    "JJ Beard's Pub & Pizza",
    "Red Lobster",
    "LongHorn Steakhouse",
    "Chico's Restaurant",
    "Pizza Ranch",
];

const dressStyles = [
    "Casual",
    "Dressy",
];

const activities = [
    "Walk through the park",
    "Visit a museum or art gallery",
    "Catch a movie",
    "Go mini golfing",
    "Attend a live concert",
    "Browse a bookstore",
    "Sunset picnic",
    "Karaoke night",
    "Comedy show",
    "Stargazing",
    "Scenic drive",
    "Board game night at a cafe",
    "Photography walk",
];

// Function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Main function to generate date idea
function generateDateIdea() {
    const restaurant = getRandomElement(restaurants);
    const dressCode = getRandomElement(dressStyles);
    const activity = getRandomElement(activities);

    // Update the HTML with the random selections
    document.getElementById('restaurant').textContent = restaurant;
    document.getElementById('dressCode').textContent = dressCode;
    document.getElementById('activity').textContent = activity;

    // Show the result
    document.getElementById('result').classList.add('show');
}
