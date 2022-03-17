class carDetails {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    carAge(age) {
        return age - this.year;
    }
}

let c1 = new carDetails("BMW", 2012)
    // c1.age(2022)
document.getElementById("carData").innerHTML = "My car is " + c1.carAge(2022) + " years old!";