// create array of data
const instruments = ["Piano","Guitar","Violin","Drums","Saxophone","Flute"];

// create variable that can be used to refer to the list item
const instrumentList = document.querySelector("body > ul li");

// create variable that can be used to refer to the list itself
const ulRef = document.querySelector("body > ul");

for (let i = 0; i < instruments.length; i++) {
    const instrument = instruments[i]; // create a variable that can be used to list each entry in the array as the function loops through the array.
    ulRef.innerHTML += "<li>" + instrument + "</li>"; // use .innerHTML on list variable to modify contents of list
  }


const someStuff = ["thing1","thing2","thing3"];

const thingsList = document.querySelector("body > ul li");

const ulRef2 = document.querySelector("body > ul")

for (let i = 0; i < someStuff.length; i++) {
  const thing = someStuff[i];
  ulRef2.innerHTML += "<li>" + thing + "</li>";
}