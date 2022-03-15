const person = {
    firstName: "Arun",
    lastName: "Sharma",
    age: 50,
    eyeColor: "green",
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
};

document.write(person.fullName())

document.getElementById("objContent").innerHTML =
    person.firstName + " " + person.lastName + " is " + person.age + " years old.";