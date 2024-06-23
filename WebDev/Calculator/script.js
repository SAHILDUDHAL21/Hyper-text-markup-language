function appendToDisplay(value) {
  document.getElementById('result').value += value;
}

function clearDisplay() {
  document.getElementById('result').value = '';
}

function deleteLastCharacter() {
  var currentValue = document.getElementById('result').value;
  document.getElementById('result').value = currentValue.slice(0, -1);
}

function calculate() {
  var expression = document.getElementById('result').value;
  var result;
  try {
    result = eval(expression);
  } catch (error) {
    result = 'Error';
  }
  document.getElementById('result').value = result;
}