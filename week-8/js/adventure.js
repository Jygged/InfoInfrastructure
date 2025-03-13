// input listern in html
console.log("Adventure")

function showAlert() {
    alert("Annoying message");
}

// input listern in js
const confirmBtnRef = document.querySelector("#confirm-btn");

function showConfirm() {
    const userConfirmed = confirm("You are a robot, right");
    console.log(userConfirmed);
}

confirmBtnRef.onclick = showConfirm;

function showPrompt() {
    const userInput = prompt
    ("whats you favorite flavor of ice cream");

    console.log(userInput);
}

// code for adventure
const journeyRef = document.querySelector("#journey");


    journeyRef.innerHTML = "<p>you are so excited, today you get your first pokemon! Sitting in front of you are pokeballs for Bulbasaur, Charmander, and Squirtle. Chose your pokemon:</p>";

    const starterPokemon = [
        {name: "Bulbasaur", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png",
        },
        {name: "Charmander", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png",
        },
        {name: "Squirtle", img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png",
        },
    ];

    for (let i = 0; i < starterPokemon.length; i++) {
        const pokemon = starterPokemon[i]; // keeps track of what iteration we are on in the array
        const newSection = document.createElement("section");
        newSection.innerHTML += "<img height='100' src='" +
        pokemon.img +
        "' alt='" +
        pokemon.name +
        "' />";
        newSection.innerHTML += "<h4>" + pokemon.name + "</h4>";

        newSection.dataset.pokemonName = pokemon.name;
        newSection.dataset.pokemonImage = pokemon.img;
        newSection.onclick = choosePokemon

        journeyRef.appendChild(newSection)
        console.log(pokemon);
    }


function choosePokemon(e) {
    console.log(e.currentTarget);
    const pokemonName = e.currentTarget.dataset.pokemonName;
    const pokemonImg = e.currentTarget.dataset.pokemonImage;

    const confirmChoice = confirm("You chose" + pokemonName);

    if (confirmChoice) {
        journeyRef.innerHTML +=
        "You chose" + pokemonName + "as your starter pokemon";

        myPokemon = {name: pokemonName, img: pokemonImg};
    }
}