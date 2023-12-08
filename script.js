// function that loops through the array and counts the number of times each flavor appears
// I needed to practice with the Array.prototype.reduce() method, so I used it here
function countFlavors(froyoFlavorsArray) {
    return froyoFlavorsArray.reduce((acc, flavor) => {
        acc[flavor] ? acc[flavor]++ : acc[flavor] = 1;
        return acc;
     }, {});
}

// splits the string into an array of strings for each flavor
const froyoArray = prompt("Please enter a list of comma-separated froyo flavors", "vanilla,vanilla,vanilla,strawberry,coffee,coffee").split(",");
const ordersMap = countFlavors(froyoArray);

const froyoDiv = document.getElementById("froyo");
froyoDiv.innerHTML = `
    <h1>Froyo Flavors!</h1>
    ${froyoArray.map(flavor => `<p class="iceCream">${flavor}</p>`).join("") /* Have to use .join("") in order to get rid of the commas*/}
    <h3 style="text-align: center; color: blue">Order Counts</h3>
    ${Object.keys(ordersMap).map(flavor => `<p class="iceCream">${flavor}: ${ordersMap[flavor]}</p>`).join("")}
`;
