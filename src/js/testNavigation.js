import { gsap } from 'gsap';
var slidesHTML = document.getElementsByClassName("question"),
    slides = Array.from(slidesHTML),
    moveSlideTL = gsap.timeline();
    

    const nextClick = () => {
      if(!moveSlideTL.isActive()) {
        var slideFrom = document.querySelector(".question.active"),
            sectionToIndex = slides.indexOf(slideFrom),
            nextSlideKey = sectionToIndex + 1,
            slideTo = slides[nextSlideKey];

    
        if(sectionToIndex !== slides.length - 1) {
          moveToSlide(slideFrom, slideTo);
        }
      }
    }
    
    const prevClick = () => {
      if(!moveSlideTL.isActive()) {
        var slideFrom = document.querySelector(".question.active"),
            sectionToIndex = slides.indexOf(slideFrom);
    
        if(sectionToIndex != 0) {
          slideTo = slides.eq(sectionToIndex - 1);
          moveToSlide(slideFrom, slideTo);
        }
      }
    }

    function moveToSlide(slideFrom, slideTo) {

      gsap.set('.go', {autoAlpha:0}) // ????
    
      if(slides.indexOf(slideFrom) < slides.indexOf(slideTo)) { // vorwärts
    
        moveSlideTL = gsap.timeline({onComplete: setActiveSlide, onCompleteParams: [slideTo, slideFrom]})
          .to(slideTo, {xPercent:-100, duration:0.8, className: "question active"})
          .to(slideFrom, {xPercent:-200, duration:0.8, className: "question"},0)
          .set(slideFrom, {xPercent:0})
    
      } else {
    
        moveSlideTL = gsap.timeline({onComplete: setActiveSlide, onCompleteParams: [slideTo, slideFrom]})
          .set(slideTo, {xPercent:-200, className: "question active"})
          .to(slideTo, {xPercent:-100, duration:0.8})
          .to(slideFrom, {xPercent:0, duration:0.8, className: "question"},0)
      }
    
    }

    function setActiveSlide(active, last) {
  
      var currentSlideIndex = slides.indexOf(active);
      
      if(currentSlideIndex == 0) {
        gsap.set('.back-question', {autoAlpha:0})
      } else {
        gsap.set('.back-question', {autoAlpha:1})
      }
      
    }

export default nextClick;