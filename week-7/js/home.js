console.log("cozy home");

console.log("2 + 7 =", 2 + 7);

if (true) {
    console.log("Always true");
} else {
    console.error("This should never happen")
}

let money = 0.75;

if(money >= 0.5) {
    console.log("You pay for a bus ticket");
    money -= 0.5;
} else if (money >= 0.25) {
    console.log("catch a ride");
    money -= 0.25;
} else {
    console.log("You're broke, walk home");
}