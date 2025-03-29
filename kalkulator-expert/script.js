function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        alert('Input tidak valid');
    }
}
function calculateTrig(func) {
    let value = parseFloat(document.getElementById('display').value);
    if (!isNaN(value)) {
        document.getElementById('display').value = Math[func](value * Math.PI / 180).toFixed(5);
    }
}
function calculateSqrt() {
    let value = parseFloat(document.getElementById('display').value);
    if (value >= 0) {
        document.getElementById('display').value = Math.sqrt(value).toFixed(5);
    } else {
        alert('Angka tidak bisa negatif');
    }
}
function calculatePower() {
    let value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.pow(value, 2).toFixed(5);
}
function calculateLog() {
    let value = parseFloat(document.getElementById('display').value);
    if (value > 0) {
        document.getElementById('display').value = Math.log10(value).toFixed(5);
    } else {
        alert('Angka harus lebih dari nol');
    }
}