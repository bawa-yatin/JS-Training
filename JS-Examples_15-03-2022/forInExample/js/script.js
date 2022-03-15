let nos = [67, 11, 9, 23, 45]
let elements = ""

for (let item in nos) {
    elements += nos[item] + "<br>"
}

document.getElementById("elements").innerHTML = elements