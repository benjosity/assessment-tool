import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

import prevQuestionSlide from './animations/prevQuestion';
import nextQuestionSlide from './animations/nextQuestion';
import updateProgressBar from './updateProgressBar';

const navigateQuestions = buttonID => {
  let containerHeight = document.querySelector('.question-track').offsetHeight;
  let container = document.querySelector('.question-track');
  let activeQuestion = document.querySelector('.question.active');
  let addHeight = 0;

  let tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power2.out' } });

  if (!window.matchMedia('(min-width: 640px)').matches) {
    gsap.to(window, { duration: 0.6, scrollTo: '#app-top' });
    addHeight = 80;
  }

  if (buttonID == 'nextButton') {
    nextQuestionSlide(tl, containerHeight, container, activeQuestion, addHeight);
    updateProgressBar('next');
  } else {
    prevQuestionSlide(tl, containerHeight, container, activeQuestion, addHeight);
    updateProgressBar('previous');
  }
};

export default navigateQuestions;
