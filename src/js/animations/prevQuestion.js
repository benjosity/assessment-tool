import navValidation from '../navValidation';
import updateSteps from '../updateSteps';

const prevQuestionSlide = (tl, containerHeight, container, activeQuestion) => {
  let questionCircle = document.getElementById('cicle-outer');
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
        opacity: 0,
        pointerEvents: 'none',
      },
      'start'
    )
    .to(
      questionCircle,
      {
        rotate: '-=360',
        transformOrigin: '100% 50%',
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
        opacity: 1,
        pointerEvents: 'auto',
        onComplete: navValidation(activeQuestion, prevQuestion),
      },
      '+0.6'
    );

  updateSteps(prevQuestion);
};

export default prevQuestionSlide;
