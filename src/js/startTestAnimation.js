import { gsap } from 'gsap';

const StartTest = () => {
  let tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'power2.out' } });
  let introCopy = document.querySelector('.intro');
  let imageShape = document.querySelector('.background-elements .intro-img');
  let appContainer = document.querySelector('main.bg-dark');
  let mainContainer = document.querySelector('main .container');
  let mainShape = document.querySelector('.background-elements .main-shape');
  let mainShapeSVG = document.querySelector('.background-elements .main-shape svg');
  let mainShapeSVGinner = document.querySelector('.background-elements .main-shape svg .inner');
  let questionContainer = document.querySelector('.questions');
  let questionsTop = document.querySelector('.questions-top');
  let questionsBottom = document.querySelector('.questions-bottom');
  tl.to(
    introCopy,
    {
      opacity: 0,
      pointerEvents: 'none',
      height: 0,
    },
    'start'
    )
    .to(
      questionContainer,
      {
        height: 'auto',
        pointerEvents: 'auto',
      },
      'start'
    )
    .to(
      mainContainer,
      {
        paddingTop: '90px',
        paddingBottom: '175px',
      },
      'start'
    )
    .to(
      imageShape,
      {
        xPercent: -50,
        yPercent: 100,
      },
      'start'
    )
    .to(
      mainShapeSVGinner,
      {
        fill: '#725EFF',
      },
      'start'
    )
    .to(
      mainShape,
      {
        top: '-20%',
        left: 0,
        scale: 1.5,
      },
      '0.3'
    )
    .to(
      mainShapeSVG,
      {
        scale: 4,
      },
      '+0.3'
    )
    .to(
      appContainer,
      {
        backgroundColor: '#4e3eb1',
      },
      '+0.3'
    )
    .to(
      introCopy,
      {
        height: '0',
        pointerEvents: 'none',
        opacity: 0,
      },
      '+0.3'
    )
    .to(
      questionContainer,
      {
        opacity: 1,
        duration: 0.5,
      },
      '+0.6'
    )
    .to(
      questionsTop,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
      },
      '+0.9'
    ).to(
      questionsBottom,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
      },
      '+0.9'
    );
};

export default StartTest;
