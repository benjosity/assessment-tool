import { gsap } from 'gsap';
import navValidation from './navValidation';

const nextQuestionSlide = (tl, containerHeight, container, activeQuestion) => {
  let nextQuestion = document.querySelector('.question.active').nextElementSibling;
  let nextQuestionHeight =
    document.querySelector('.question.active').nextElementSibling.children[0].offsetHeight;
  tl.to(
    container,
    {
      height: containerHeight,
      duration: 0,
    },
    'start'
  )
    .to(
      activeQuestion,
      {
        xPercent: -100,
        opacity: 0,
        pointerEvents: 'none',
      },
      'start'
    )
    .to(
      activeQuestion,
      {
        height: 0,
        duration: 0,
      },
      '+0.6'
    )
    .to(
      container,
      {
        height: nextQuestionHeight,
      },
      '+0.6'
    )
    .to(
      nextQuestion,
      {
        y: 0,
        opacity: 1,
        pointerEvents: 'auto',
        onComplete: navValidation(activeQuestion, nextQuestion),
      },
      '+0.6'
    );
};

const prevQuestionSlide = (tl, containerHeight, container, activeQuestion) => {
  let prevQuestion = document.querySelector('.question.active').previousElementSibling;
  console.log(prevQuestion);
  let prevQuestionHeight =
    document.querySelector('.question.active').previousElementSibling.children[0].offsetHeight;

  tl.to(
    container,
    {
      height: containerHeight,
      duration: 0,
    },
    'start'
  )
    .to(
      activeQuestion,
      {
        yPercent: 100,
        opacity: 0,
        pointerEvents: 'none',
      },
      'start'
    )
    .to(
      activeQuestion,
      {
        height: 0,
        duration: 0,
      },
      '+0.6'
    )
    .to(
      prevQuestion,
      {
        height: 'auto',
        onComplete: navValidation(activeQuestion, prevQuestion),
      },
      '+0.6'
    )
    .to(
      container,
      {
        height: prevQuestionHeight,
      },
      '+0.6'
    )
    .to(
      prevQuestion,
      {
        xPercent: 0,
        opacity: 1,
        pointerEvents: 'auto',
        onComplete: navValidation(activeQuestion, prevQuestion),
      },
      '+0.6'
    );
};

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

  // Step Indicator
};

export default navigateQuestions;
