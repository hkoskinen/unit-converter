(function() {
  'use strict';

  // ui variables
  const kilograms = document.querySelector('#kilogram-input');
  const pounds = document.querySelector('#pound-input');
  const resultOutput = document.querySelector('#result');

  // units
  const POUND_IN_KILOGRAMS = 0.45359237;
  const KILOGRAM_IN_POUNDS = 2.2046226218;

  // TODO: Add error handling for the input, if the input element's 
  // number type is not supported, since then the input will be a string.

  kilograms.addEventListener('keyup', () => {
    const result = kilograms.value * KILOGRAM_IN_POUNDS;
    pounds.value = result;
    resultOutput.textContent = `${result.toFixed(2)} pounds`;
  });

  pounds.addEventListener('keyup', () => {
    const result = pounds.value * POUND_IN_KILOGRAMS;
    kilograms.value = result;
    resultOutput.textContent = `${result.toFixed(2)} kilograms`;
  });

}());