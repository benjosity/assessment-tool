import ViewResults from './animations/viewResults';

const calculateResults = answers => {
  let level = '';
  let appetite = '';

  // Get Level and update Results title
  if (answers[0] == 'A' || answers[0] == 'B') {
    level = '0';
    document.getElementById('result-title').textContent = 'Level 0: Full-Stack Observability';
  } else if (answers[0] == 'C') {
    level = '1';
    document.getElementById('result-title').textContent = 'Level 1: Business VIsualization';
  } else if (answers[0] == 'D') {
    level = '2';
    document.getElementById('result-title').textContent = 'Level 2: Business Correlation';
  } else if (answers[0] == 'E') {
    level = '3';
    document.getElementById('result-title').textContent = 'Level 3: Business Validation';
  } else if (answers[0] == 'F') {
    level = '4';
    document.getElementById('result-title').textContent = 'Level 4: Business Prioritization';
  } else if (answers[0] == 'G') {
    level = '5';
    document.getElementById('result-title').textContent = 'Level 5: Business Optimization';
  }

  // Update HTML list on lower results section
  if (level === '5' || level === '4') {
    document.getElementById('high-tier').style.display = 'block';
  } else {
    document.getElementById('low-tier').style.display = 'block';
  }

  // Get Level Tier
  if (answers[1] == 'A' || answers[1] == 'B' || answers[1] == 'C') {
    appetite = 'A';
  } else {
    appetite = 'B';
    document.getElementById('fact-block').style.display = 'hidden';
  }

  // Show main results copy
  const result = level + '' + appetite;
  document.querySelector("[data-result='" + result + "']").style.display = 'block';

  ViewResults();
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
