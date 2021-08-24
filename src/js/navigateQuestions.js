import { gsap } from 'gsap';

let slideDuration = 0.3,
  slides = gsap.utils.toArray('.question'),
  numSlides = slides.length,
  progressPerItem = 1 / (numSlides - 1),
  snapProgress = gsap.utils.snap(progressPerItem),
  slideAnimation,
  animation = gsap.to(slides, {
    xPercent: '-=' + (numSlides - 1) * 100,
    duration: 1,
    ease: 'none',
    paused: true,
  });

const navigateQuestions = direction => {
  let progress = snapProgress(animation.progress() + direction * progressPerItem);
  console.log('total slides: ' + numSlides);
  console.log('progress per item: ' + progressPerItem);
  console.log('percentage progress: ' + (progress / 1) * 100);

  // Slide animation
  if (progress >= 0 && progress <= 1) {
    slideAnimation = gsap.to(animation, {
      progress: progress,
      duration: slideDuration,
      ease: 'power2.in',
      overwrite: true,
    });
  }

  // Next Button Validation

  // Back Button Validation
  if (progress == 0) {
    document.getElementById('prevButton').classList.add('disabled');
    document.getElementById('prevButton').classList.remove('enabled');
  } else {
    document.getElementById('prevButton').classList.remove('disabled');
    document.getElementById('prevButton').classList.add('enabled');
  }

  // Step Indicator
};

export default navigateQuestions;
