import { gsap } from 'gsap';
const navValidation = (activeQuestion, nextQuestion) => {
  let inputNum = nextQuestion.querySelectorAll('.input-container');
  let selectedInputs = nextQuestion.querySelectorAll('.input-element.selected');
  let prevButton = document.getElementById('prevButton');
  let nextButton = document.getElementById('nextButton');

  activeQuestion.classList.remove('active');
  nextQuestion.classList.add('active');

  if (!nextQuestion.classList.contains('question-1')) {
    prevButton.classList.add('enabled');
    prevButton.classList.remove('disabled');
  }

  if (nextQuestion.classList.contains('question-7')) {
    let tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'power2.out' } }); //create the timeline
    tl.to('#nextButton', { x: '-100%', opacity: 0, delay: 0.6 }) //start sequencing
      .to('#resultsButton', { x: 0, opacity: 0.5 });
  } else {
  }

  if (typeof selectedInputs !== 'undefined' && selectedInputs.length === 0) {
    nextButton.classList.remove('enabled');
    nextButton.classList.add('disabled');
  } else if (selectedInputs.length === inputNum.length) {
    nextButton.classList.add('enabled');
    nextButton.classList.remove('disabled');
  }
};

export default navValidation;
