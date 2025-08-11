// helper to parse numbers and use 0 for empty/invalid inputs
function toNumber(value) {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n : 0;
}

// arithmetic functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }

// update the UI result
function showResult(text) {
  document.getElementById('calculation-result').textContent = text;
}

document.addEventListener('DOMContentLoaded', function () {
  const n1Input = document.getElementById('number1');
  const n2Input = document.getElementById('number2');

  document.getElementById('add').addEventListener('click', function () {
    const a = toNumber(n1Input.value);
    const b = toNumber(n2Input.value);
    showResult(add(a, b));
  });

  document.getElementById('subtract').addEventListener('click', function () {
    const a = toNumber(n1Input.value);
    const b = toNumber(n2Input.value);
    showResult(subtract(a, b));
  });

  document.getElementById('multiply').addEventListener('click', function () {
    const a = toNumber(n1Input.value);
    const b = toNumber(n2Input.value);
    showResult(multiply(a, b));
  });

  document.getElementById('divide').addEventListener('click', function () {
    const a = toNumber(n1Input.value);
    const b = toNumber(n2Input.value);
    if (b === 0) {
      showResult('Error: Division by 0');
    } else {
      showResult(divide(a, b));
    }
  });
});
