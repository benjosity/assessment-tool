import ViewResults from './animations/viewResults';

const calculateResults = answers => {
  let level = '';
  let appetite = '';
  let appetiteVal = '';

  // Get Level and update Results title
  if (answers[0] == 'A' || answers[0] == 'B') {
    level = '1';
    document.getElementById('result-title').textContent = 'Level 1: Full-Stack Observability';
    document.getElementById('pdf-link').href = '../pdf/P24_AppD_Assessment-Tool_Level-1A.pdf';
  } else if (answers[0] == 'C') {
    level = '2';
    document.getElementById('result-title').textContent = 'Level 2: Business VIsualization';
    document.getElementById('pdf-link').href = '../pdf/P24_AppD_Assessment-Tool_Level-1A.pdf';
  } else if (answers[0] == 'D') {
    level = '3';
    document.getElementById('result-title').textContent = 'Level 3: Business Correlation';
    document.getElementById('pdf-link').href = '../pdf/P24_AppD_Assessment-Tool_Level-1A.pdf';
  } else if (answers[0] == 'E') {
    level = '4';
    document.getElementById('result-title').textContent = 'Level 4: Business Validation';
    document.getElementById('pdf-link').href = '../pdf/P24_AppD_Assessment-Tool_Level-1A.pdf';
  } else if (answers[0] == 'F') {
    level = '5';
    document.getElementById('result-title').textContent = 'Level 5: Business Prioritization';
    document.getElementById('pdf-link').href = '../pdf/P24_AppD_Assessment-Tool_Level-1A.pdf';
  } else if (answers[0] == 'G') {
    level = '6';
    document.getElementById('result-title').textContent = 'Level 6: Business Optimization';
    document.getElementById('pdf-link').href = '../pdf/P24_AppD_Assessment-Tool_Level-1A.pdf';
  }

  // Update HTML list on lower results section
  if (level === '6' || level === '5') {
    document.getElementById('high-tier').style.display = 'block';
  } else {
    document.getElementById('low-tier').style.display = 'block';
  }

  // Get Level Tier
  if (answers[1] == 'A' || answers[1] == 'B' || answers[1] == 'C') {
    appetite = 'A';
    appetiteVal = 'has appetite';
  } else {
    appetite = 'B';
    appetiteVal = 'no appetite';
    document.getElementById('fact-block').style.display = 'none';
  }

  // Show main results copy
  const result = level + '' + appetite;
  document.querySelector('input[name="campaignID"').value = 'Level: ' + level + ', ' + appetiteVal;
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
