import { gsap } from 'gsap';

let slides = gsap.utils.toArray('.question'),
  numSlides = slides.length,
  progressPerItem = 1 / (numSlides - 1);

// Pill Input
const pillSelect = pill => {
  pill.addEventListener('click', event => {
    console.log(pill.parentElement.getAttribute('data-question'));
    console.log(pill.getAttribute('data-value'));
    pill.classList.add('selected');

    // Next Button Activation
    document.getElementById('nextButton').classList.remove('disabled');
    document.getElementById('nextButton').classList.add('enabled');
  });
};

document.querySelectorAll('.pills .pill').forEach(pill => {
  pillSelect(pill);
});

const radioSelect = radio => {
  radio.addEventListener('click', event => {
    var radios = document.querySelectorAll('.input .radios .radio');
    [].forEach.call(radios, function (el) {
      el.classList.remove('selected');
    });

    radio.classList.add('selected');

    // Next Button Activation
    document.getElementById('nextButton').classList.remove('disabled');
    document.getElementById('nextButton').classList.add('enabled');
  });
};

document.querySelectorAll('.input .radios .radio').forEach(radio => {
  radioSelect(radio);
});

const altRadioSelect = radio => {
  radio.addEventListener('click', event => {
    var radios = document.querySelectorAll('.radio-type-alt .radio-alt');
    [].forEach.call(radios, function (el) {
      el.classList.remove('selected');
    });

    radio.classList.add('selected');

    // Next Button Activation
    document.getElementById('nextButton').classList.remove('disabled');
    document.getElementById('nextButton').classList.add('enabled');
  });
};

document.querySelectorAll('.radio-type-alt .radio-alt').forEach(radio => {
  altRadioSelect(radio);
});
