import { gsap } from 'gsap';

const ViewResults = () => {
  let tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'power2.out' } });
  let resultTop = document.querySelector('.results-top');
  let imageShape = document.querySelector('.background-elements .intro-img');
  let appContainer = document.querySelector('.tool.bg-dark');
  let mainShape = document.querySelector('.background-elements .main-shape');
  let mainShapeSVG = document.querySelector('.background-elements .main-shape svg');
  let mainShapeSVGinner = document.querySelector('.background-elements .main-shape svg .inner');
  let questionContainer = document.querySelector('.questions');
  tl.to(
    questionContainer,
    {
      opacity: 0,
      pointerEvents: 'none',
      height: 0,
    },
    'start'
  )
    .to(
      resultTop,
      {
        height: 'auto',
        pointerEvents: 'auto',
      },
      'start'
    )
    .to(
      imageShape,
      {
        xPercent: 0,
        yPercent: 0,
      },
      'start'
    )
    .to(
      mainShapeSVGinner,
      {
        fill: 'transparent',
      },
      'start'
    )
    .to(
      mainShape,
      {
        top: 'auto',
        left: 'auto',
        bottom: '-28%',
        right: '25%',
        scale: 1,
      },
      '0.3'
    )
    .to(
      mainShapeSVG,
      {
        scale: 1,
      },
      '+0.3'
    )
    .to(
      appContainer,
      {
        backgroundColor: '#19212B',
      },
      '+0.3'
    )
    .to(
      questionContainer,
      {
        height: '0',
        pointerEvents: 'none',
        opacity: 0,
      },
      '+0.3'
    )
    .to(
      resultTop,
      {
        opacity: 1,
        duration: 0.5,
      },
      '+0.6'
    );
};

export default ViewResults;
