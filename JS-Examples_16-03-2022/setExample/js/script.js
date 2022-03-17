const names = new Set()

names.add("Sudhir");
names.add("Saurabh");
names.add("Arun")

document.getElementById('set-size').innerHTML = names.size

let elements = ""
names.forEach(eleList)
document.getElementById("set-elements").innerHTML = elements

function eleList(value) {
    elements += value + "<br>"
}