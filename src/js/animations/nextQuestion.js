import navValidation from '../navValidation';
import updateSteps from '../updateSteps';

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

  updateSteps(nextQuestion);
};

export default nextQuestionSlide;
