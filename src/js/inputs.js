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

    // // Next Button Activation
    document.getElementById('nextButton').classList.remove('disabled');
    document.getElementById('nextButton').classList.add('enabled');
  });
};

document.querySelectorAll('.input-element').forEach(input => {
  elementSelect(input);
});
