import { gsap } from 'gsap';

const checkInputs = inputTarget => {
  let questionWrapper = inputTarget.target.closest('.question');
  let inputNum = questionWrapper.querySelectorAll('.input-container');
  let selectedInputs = questionWrapper.querySelectorAll('.input-element.selected');
  console.log(inputNum.length);
  console.log(selectedInputs.length);
  // Next Button Activation
  if (inputNum.length == selectedInputs.length) {
    document.getElementById('nextButton').classList.remove('disabled');
    document.getElementById('nextButton').classList.add('enabled');
  }

  // Results Button Activation
  if (
    questionWrapper.classList.contains('question-7') &&
    inputNum.length == selectedInputs.length
  ) {
    document.getElementById('resultsButton').classList.add('enabled');
    document.getElementById('resultsButton').classList.remove('disabled', 'pointer-events-none');
    gsap.to('#resultsButton', { duration: 0.3, ease: 'power2.out', opacity: 1 });
  }
};

const elementSelect = input => {
  input.addEventListener('click', event => {
    // Target for all inputs

    let inputWrapper = event.target.closest('.input-container');
    let otherInputsWrappers = inputWrapper.querySelectorAll('.input-element');
    let otherInputsValues = inputWrapper.querySelectorAll('.input-value');

    [].forEach.call(otherInputsWrappers, function (el) {
      el.classList.remove('selected');
    });

    [].forEach.call(otherInputsValues, function (el) {
      el.classList.remove('selected-value');
    });

    // Target for event input wrap
    input.classList.add('selected');

    // Target for event input value container
    let inputValue = input.querySelectorAll('.input-value');
    [].forEach.call(inputValue, function (el) {
      el.classList.add('selected-value');
    });

    checkInputs(event);
  });
};

document.querySelectorAll('.input-element').forEach(input => {
  elementSelect(input);
});
