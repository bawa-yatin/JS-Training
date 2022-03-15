function ageVerify() {
    let age = Number(document.getElementById("age").value);
    let result;

    if (isNaN(age)) {
        result = "Incorrect Input Value";
        document.getElementById("ageResult").innerHTML = result
    } else {
        result = (age >= 18) ? "Eligible to Vote" : "Not Eligible"
        document.getElementById("ageResult").innerHTML = result
    }
}