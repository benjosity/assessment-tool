import { gsap } from 'gsap';

const ViewResults = () => {
  let tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'power2.out' } });
  let resultTop = document.querySelector('.results-top');
  let resultBottom = document.querySelector('.results-form');
  let rbContainer = resultBottom.querySelector('.container');
  let imageShape = document.querySelector('.background-elements .intro-img');
  let appContainer = document.querySelector('.tool.bg-dark');
  let mainShape = document.querySelector('.background-elements .main-shape');
  let mainShapeSVG = document.querySelector('.background-elements .main-shape svg');
  let mainShapeSVGinner = document.querySelector('.background-elements .main-shape svg .inner');
  let questionContainer = document.querySelector('.questions');
  let shapeY = '-28%';
  let shapeX = '25%';
  if (window.innerWidth < 640) {
    shapeY = '-22%';
    shapeX = '-36%';
  }

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
        bottom: shapeY,
        right: shapeX,
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
    )
    .to(
      resultBottom,
      {
        height: 'auto',
        pointerEvents: 'auto',
        opacity: 1,
      },
      '+0.6'
    )
    .to(
      rbContainer,
      {
        opacity: 1,
      },
      '+0.9'
    );
};

export default ViewResults;
