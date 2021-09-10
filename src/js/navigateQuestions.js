import { gsap } from 'gsap';
import prevQuestionSlide from './animations/prevQuestion';
import nextQuestionSlide from './animations/nextQuestion';

const navigateQuestions = buttonID => {
  let containerHeight = document.querySelector('.question-track').offsetHeight;
  let container = document.querySelector('.question-track');
  let activeQuestion = document.querySelector('.question.active');

  let tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power2.out' } });

  if (buttonID == 'nextButton') {
    nextQuestionSlide(tl, containerHeight, container, activeQuestion);
  } else {
    prevQuestionSlide(tl, containerHeight, container, activeQuestion);
  }
};

export default navigateQuestions;
