const showResults = () => {
  console.log('show results');
};
const calculateResults = () => {
  let questions = document.querySelectorAll('.valid-question');
  const answerSet = new Array();
  [].forEach.call(questions, function (el) {
    let answer = el.querySelector('.selected-value');
    if (answer != null) {
      var answerValue = answer.getAttribute('data-value');
      answerSet.push(answerValue);
    }
  });
  console.log(answerSet);
};

export default calculateResults;
