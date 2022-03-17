function checkValue() {
    let result = document.getElementById("result");
    result.innerHTML = "";
    let value = document.getElementById("numValue").value;

    try {
        if (value == "") {
            throw "empty";
        }
        if (isNaN(value)) {
            throw "is not valid";
        }

        value = Number(value);
        if (value < 5 || value > 10) {
            throw "not in range";
        }
    } catch (err) {
        result.innerHTML = "Input is " + err;
    } finally {
        document.getElementById("numValue").value = "";
    }
}