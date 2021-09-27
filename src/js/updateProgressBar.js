import { gsap } from 'gsap';

const updateProgressBar = direction => {
  let steps = document.querySelectorAll('.steps .tabs span');
  let progressBar = document.querySelector('.mobile-progress .bar');
  let progressPercentage = 100 / steps.length;

  if (direction == 'next') {
    let progress = '+=' + progressPercentage + '%';
    gsap.to(progressBar, { duration: 0.3, width: progress });
  } else {
    let progress = '-=' + progressPercentage + '%';
    gsap.to(progressBar, { duration: 0.3, width: progress });
  }
};

export default updateProgressBar;
