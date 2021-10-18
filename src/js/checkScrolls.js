function hasScroll(el, direction) {
  direction = (direction === 'vertical') ? 'scrollTop' : 'scrollLeft';
  var result = !! el[direction];

  if (!result) {
      el[direction] = 1;
      result = !!el[direction];
      el[direction] = 0;
  }
  return result;
}

const isScrollable = function (ele) {
  // Compare the height to see if the element has scrollable content
  const hasScrollableContent = ele.scrollHeight > ele.clientHeight;

  // It's not enough because the element's `overflow-y` style can be set as
  // * `hidden`
  // * `hidden !important`
  // In those cases, the scrollbar isn't shown
  const overflowYStyle = window.getComputedStyle(ele).overflowY;
  const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;

  return hasScrollableContent && !isOverflowHidden;
};

const checkScrolls = () => {
  var questionScrolls = document.querySelectorAll('.question');

  console.log('check');
  
  [].forEach.call(questionScrolls, function (el) {
    var innerQuestion = el.querySelector('.inner-question')
    if (hasScroll(innerQuestion, 'vertical') === true || hasScroll(el, 'vertical') === true || isScrollable(innerQuestion) == true || isScrollable(el) == true ) {
      el.insertAdjacentHTML('beforeend', '<div class="down-indicator"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" fill="none"><path stroke="#19212B" stroke-width="1.2" d="m1 13 11.998 10.667L25 13M1 1l11.998 10.667L25 1" /></svg></div>');
    }
  });
}

export default checkScrolls;