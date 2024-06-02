function appendToDisplay(value) {
    document.getElementById("result").value += value;
}

function clearDisplay() {
    document.getElementById("result").value = '';
}

function deleteLast() {
    var display = document.getElementById("result").value;
    document.getElementById("result").value = display.slice(0, -1);
}

function calculateResult() {
    var display = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(display);
    } catch (e) {
        alert('Invalid expression');
    }
}
