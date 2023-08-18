function calculateTriangleArea() {
  const base = getInputValue('triangle-base');
  const height = getInputValue('triangle-height');

  const area = 0.5 * base * height;

  if (isNaN(base) || isNaN(height)) {
    alert('please enter number');
    return;
  }

  setInputFieldText('triangle-area', area);

  addToCalculationEntry('Triangle', area);
}

function calculateRectangleArea() {
  const width = getInputValue('rectangle-width');
  const length = getInputValue('rectangle-length');

  const area = width * length;

  if (isNaN(width) || isNaN(length)) {
    alert('please enter number');
    return;
  }

  setInputFieldText('rectangle-area', area);
  addToCalculationEntry('Rectangle', area);
}

function calculateParallelogramArea() {
  const baseP = getInputValue('parallelogram-base');
  const heightP = getInputValue('parallelogram-height');

  const area = baseP * heightP;

  if (isNaN(baseP) || isNaN(heightP)) {
    alert('please enter number');
    return;
  }

  setInputFieldText('parallelogram-area', area);
  addToCalculationEntry('Parallelogram', area);
}

function calculateRhombusArea() {
  const diagonal1 = getInputValue('rhombus-diagonal1');
  const diagonal2 = getInputValue('rhombus-diagonal1');

  const area = 0.5 * diagonal1 * diagonal2;

  if (isNaN(diagonal1) || isNaN(diagonal2)) {
    alert('please enter number');
    return;
  }

  setInputFieldText('rhombus-area', area);
  addToCalculationEntry('Rhombus', area);
}

function calculatePentagonArea() {
  const perimeter = getInputValue('pentagon-perimeter');
  const apothem = getInputValue('pentagon-apothem');

  const area = 0.5 * perimeter * apothem;

  if (isNaN(perimeter) || isNaN(apothem)) {
    alert('please enter number');
    return;
  }

  setInputFieldText('pentagon-area', area);
  addToCalculationEntry('Pentagon', area);
}

function calculateEllipseArea() {
  const radius = getInputValue('ellipse-radius');
  const base = getInputValue('ellipse-base');

  const area = 3.1416 * radius * base;

  if (isNaN(radius) || isNaN(base)) {
    alert('please enter number');
    return;
  }

  const areaTwoDecimal = area.toFixed(2);

  setInputFieldText('ellipse-area', areaTwoDecimal);
  addToCalculationEntry('Ellipse', areaTwoDecimal);
}



function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldText = inputField.value;
  const input = parseFloat(inputFieldText);
  return input;
}

function setInputFieldText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

function addToCalculationEntry(areaType, area) {
  const calculateArea = document.getElementById('calculation-entry');
  const count = calculateArea.childElementCount;

  const para = document.createElement('p');
  para.classList.add('my-4');
  para.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class = "btn btn-success btn-small">Convert</button>`;

  calculateArea.appendChild(para);
}