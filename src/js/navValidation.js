const navValidation = (activeQuestion, nextQuestion) => {
  let selectedInputs = nextQuestion.querySelectorAll('.input-element.selected');
  let prevButton = document.getElementById('prevButton');
  let nextButton = document.getElementById('nextButton');
  let nextQuestionClasses = nextQuestion.classList;

  activeQuestion.classList.remove('active');
  nextQuestion.classList.add('active');

  if (!nextQuestion.classList.contains('question-1')) {
    prevButton.classList.add('enabled');
    prevButton.classList.remove('disabled');
  }

  if (typeof selectedInputs !== 'undefined' && selectedInputs.length === 0) {
    nextButton.classList.remove('enabled');
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.add('enabled');
    nextButton.classList.remove('disabled');
  }
};

export default navValidation;
