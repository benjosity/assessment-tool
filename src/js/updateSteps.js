const updateSteps = currentQuestion => {
  let stepValue = currentQuestion.getAttribute('data-signpost');
  let stepSelect = stepValue - 1;
  let steps = document.querySelectorAll('.steps .tabs span');

  [].forEach.call(steps, function (el) {
    el.classList.remove('active');
  });

  steps[stepSelect].classList.add('active');
  document.getElementById('step-number').innerHTML = stepValue;
};

export default updateSteps;
