import StartTest from './startTestAnimation';
import NextQuestion from './testNavigation';
import '../scss/app.scss';
import nextClick from './testNavigation';

document.querySelector('.start-test').addEventListener('click', function () {
  StartTest();
});

document.querySelector('.next-question.ready').addEventListener('click', function () {
  let track = document.querySelector('.question-track');
  nextClick();
});

