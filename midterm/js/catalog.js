const catalogItems = [
    {img: "images/i210-midterm-product1.webp", name: "My First Fire",},
    {img: "images/i210-midterm-product2.webp", name: "Handy Hand",},
    {img: "images/i210-midterm-product3.webp", name: "Nap Sack",},
    {img: "images/i210-midterm-product4.webp", name: "Hot Tube Wildlife Feeder",},
    {img: "images/i210-midterm-product5.webp", name: "Toilet Meadow",},
    {img: "images/i210-midterm-product6.webp", name: "Pudding Pouch",},
    ];

const catalogRef = document.querySelector("#catalog");

for (let i = 0; i < catalogItems.length; i++) {
    const product = catalogItems[i];
    const newSection = document.createElement("section");
    newSection.innerHTML += "<img height='200' src='" + product.img + "' alt='" + product.name + "' />";

    catalogRef.appendChild(newSection)
    }
