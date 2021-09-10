import { gsap } from 'gsap';

const AnimateThankyou = () => {
  let tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'power2.out' } });
  let form = document.querySelector('#download-results .form-wrap');
  let thankyou = document.querySelector('#download-results .thank-you');
  tl.to(
    form,
    {
      opacity: 0,
      pointerEvents: 'none',
      height: 0,
    },
    'start'
  )
    .to(
      thankyou,
      {
        height: 'auto',
        pointerEvents: 'auto',
      },
      'start'
    )
    .to(
      thankyou,
      {
        opacity: 1,
      },
      '+0.3'
    );
};
export default AnimateThankyou;
