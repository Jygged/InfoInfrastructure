// declare constant with a value of the id of the element you want to put your future elemets in.
const adventureRef = document.querySelector("#adventure");

// create function to loop through array and display data
function startAdventure() {
    adventureRef.innerHTML = PUTSTUFFHERE;

    for (let i = 0; i < starterPokemon.length; i++) {
        const pokemon = starterPokemon[i]; // keeps track of what iteration we are on in the array
        const newSection = document.createElement("section");
        newSection.innerHTML += "<img height='100' src='" +
        pokemon.img +
        "' alt='" +
        pokemon.name +
        "' />";
        newSection.innerHTML += "<h4>" + pokemon.name + "</h4>";

        // newSection.dataset.pokemonName = pokemon.name;
        // newSection.dataset.pokemonImage = pokemon.img;
        // newSection.onclick = choosePokemon

        journeyRef.appendChild(newSection)
        console.log(pokemon);
    }
}