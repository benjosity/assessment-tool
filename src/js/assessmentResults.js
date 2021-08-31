const calculateResults = answers => {
  let level = '';
  let appetite = '';

  if (answers[0] == 'A' || answers[0] == 'B') {
    level = '0';
  } else if (answers[0] == 'C') {
    level = '1';
  } else if (answers[0] == 'D') {
    level = '2';
  } else if (answers[0] == 'E') {
    level = '3';
  } else if (answers[0] == 'F') {
    level = '4';
  } else if (answers[0] == 'G') {
    level = '5';
  }

  if (answers[1] == 'A' || answers[1] == 'B' || answers[1] == 'C') {
    appetite = 'A';
  } else {
    appetite = 'B';
  }

  const result = level + ' ' + appetite;
  console.log(result);
};
const getResults = () => {
  const answerSet = new Array();
  let questions = document.querySelectorAll('.valid-question');

  [].forEach.call(questions, function (el) {
    let answer = el.querySelector('.selected-value');
    if (answer != null) {
      var answerValue = answer.getAttribute('data-value');
      answerSet.push(answerValue);
    }
  });

  calculateResults(answerSet);
};

export default getResults;
