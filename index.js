const input = document.getElementById('inputNumber');
const convertButton = document.getElementById('convertButton');
const length = document.getElementById('lengthResult');
const volume = document.getElementById('volumeResult');
const mass = document.getElementById('massResult');

convertButton.addEventListener('click', function() {
    const number = parseFloat(inputNumber.value);
    const length = number * 3.28084;
    const volume = number * 0.264172;
    const mass = number * 2.20462;
    let lengthReverse = number * 0.3048;
    let volumeReverse = number * 3.7854;
    let massReverse = number * 0.4536;
    lengthResult.textContent = `${number} meters = ${length.toFixed(3)} feet | ${number} feet = ${lengthReverse.toFixed(3)} meters`;
    volumeResult.textContent = `${number} liters = ${volume.toFixed(3)} gallons | ${number} gallons = ${volumeReverse.toFixed(3)} liters`;
    massResult.textContent = `${number} kilograms = ${mass.toFixed(3)} pounds | ${number} pounds = ${massReverse.toFixed(3)} kilograms`;
})