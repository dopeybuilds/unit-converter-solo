let input = document.getElementById('inputNumber');
let convertButton = document.getElementById('convertButton');
let length = document.getElementById('lengthResult');
let volume = document.getElementById('volumeResult');
let mass = document.getElementById('massResult');

convertButton.addEventListener('click', function() {
    let number = parseFloat(inputNumber.value);
    let length = number * 3.28084;
    let volume = number * 0.264172;
    let mass = number * 2.20462;
    let lengthReverse = number * 0.3048;
    let volumeReverse = number * 3.7854;
    let massReverse = number * 0.4536;
    lengthResult.textContent = `${number} meters = ${length.toFixed(3)} feet | ${number} feet = ${lengthReverse.toFixed(3)} meters`;
    volumeResult.textContent = `${number} liters = ${volume.toFixed(3)} gallons | ${number} gallons = ${volumeReverse.toFixed(3)} liters`;
    massResult.textContent = `${number} kilograms = ${mass.toFixed(3)} pounds | ${number} pounds = ${massReverse.toFixed(3)} kilograms`;
})