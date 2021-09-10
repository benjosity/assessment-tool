import navValidation from '../navValidation';
import updateSteps from '../updateSteps';

const prevQuestionSlide = (tl, containerHeight, container, activeQuestion) => {
  let prevQuestion = document.querySelector('.question.active').previousElementSibling;
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

  updateSteps(prevQuestion);
};

export default prevQuestionSlide;
