let currentQuestion = 1;

function checkAnswer(questionNumber) {
  let answer = document.getElementById(`answer${questionNumber}`).value.trim().toLowerCase();
  let correctAnswer = getCorrectAnswer(questionNumber);

  if (answer === correctAnswer) {
    document.getElementById(`q${questionNumber}`).style.display = 'none';
    if (questionNumber < 3) {
      currentQuestion++;
      document.getElementById(`q${currentQuestion}`).style.display = 'block';
    } else {
      document.getElementById('result').style.display = 'block';
    }
  } else {
    alert('Incorrect answer. Please try again.');
  }
}

function getCorrectAnswer(questionNumber) {
  switch (questionNumber) {
    case 1:
      return '08/01';
    case 2:
      return 'sprinkles';
    case 3:
      return 'linos belly';
    default:
      return '';
  }
}

function revealSurprise() {
  document.getElementById('surprise').style.display = 'block';
  document.getElementById('surprise').innerHTML = 'The surprise is... <a href="https://www.instagram.com/teamolittlelion">Click Here</a>';
}
