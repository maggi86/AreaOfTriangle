const base = document.getElementById('base');
const height = document.getElementById('height');
const area = document.getElementById('area');

const btnCalc = document.getElementById('calculate');
btnCalc.addEventListener('click', (b, h) => {
    b = parseFloat(base.value);
    h = parseFloat(height.value);
    area.innerHTML = (0.5 * b * h).toFixed(2);
});
