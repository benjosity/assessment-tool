import StartTest from './startTestAnimation';
import navigateQuestions from './navigateQuestions';
import './inputs.js';
import '../scss/app.scss';

// Start Tool
document.querySelector('.start-test').addEventListener('click', () => StartTest());

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
