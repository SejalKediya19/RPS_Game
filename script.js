let score = { wins: 0, losses: 0, draws: 0 };

const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const restartBtn = document.getElementById('restart');
const choicesArray = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    animateChoice(choice);
    const computerChoice = choicesArray[Math.floor(Math.random() * 3)];
    const winner = detWinner(userChoice, computerChoice);
    updateScore(winner);
    displayResult(userChoice, computerChoice, winner);
  });
});
restartBtn.addEventListener('click', () => {
  score = { wins: 0, losses: 0, draws: 0 };
  scoreDisplay.textContent = `Wins: 0 | Losses: 0 | Draws: 0`;
  result.textContent = 'Play your move!';
});
function detWinner(user, computer) {
  if (user === computer) return 'Draw';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return 'You Win!';
  } else {
    return 'You Lose!';
  }
}
function displayResult(user, computer, winner) {
  result.textContent = `You chose ${user}, computer chose ${computer}. ${winner}`;
}
function updateScore(winner) {
  if (winner === 'You Win!') {
    score.wins += 1;
  } else if (winner === 'You Lose!') {
    score.losses += 1;
  } else {
    score.draws += 1;
  }
  scoreDisplay.textContent = `Wins: ${score.wins} | Losses: ${score.losses} | Draws: ${score.draws}`;
}
function animateChoice(choice) {
  choice.classList.add('animated-choice');
  setTimeout(() => {
    choice.classList.remove('animated-choice');
  }, 1000);
}