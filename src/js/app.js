import StartTest from './animations/startTestAnimation';
import navigateQuestions from './navigateQuestions';
import getResults from './assessmentResults';
import checkScrolls from './checkScrolls';
import mktoForm from './form/marketoForm';

import './inputValidation.js';
import '../scss/app.scss';

// Start Tool
document.querySelector('.start-test').addEventListener('click', () => StartTest());

document.querySelector('#resultsButton').addEventListener('click', () => getResults());

// Navigate Tool
document.body.addEventListener('click', function (event) {
  if (
    event.target.classList.contains('enabled') &&
    (event.target.id == 'prevButton' || event.target.id == 'nextButton')
  ) {
    let buttonID = event.target.id;
    navigateQuestions(buttonID);
  }
});

// Check questions for vertical scrollbar and place scroll icon
window.addEventListener('load', function () {
  checkScrolls(); 
});

// Load Results Form
mktoForm();


