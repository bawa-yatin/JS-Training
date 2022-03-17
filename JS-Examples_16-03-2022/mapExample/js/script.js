const fruits = new Map();

fruits.set("apples", 500)
fruits.set("bananas", 300);
fruits.set("oranges", 200);

let mapElements = ""

for (let x of fruits.entries()) {
    mapElements += x + "<br>"
}

document.getElementById("elements").innerHTML = mapElements
document.write(fruits.has("bananas"))