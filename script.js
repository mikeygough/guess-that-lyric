// select elements
const songs = document.getElementById('songs');
const selection = document.querySelector('.selection');
const firstLine = document.querySelector('.first-line');
const form = document.querySelector('form');
const messageOverlay = document.getElementById('message-overlay');
const resultsGif = document.getElementById('results-gif');
const playAgainButton = document.getElementById('play-again-button');

// define lyrics
const lyrics = {
  side: {
    first_line: "I've been here all night...",
    second_line: "I've been here all day",
  },
  seven: {
    first_line: "Yeah, breakfast at Tiffany's and bottles of bubbles...",
    second_line: 'Girls with tattoos who like getting in trouble',
  },

  nasa: {
    first_line: 'This is one small step for woman...',
    second_line: 'One giant leap for woman-kind',
  },
};

// update text to match user's selection
songs.addEventListener('change', (event) => {
  selection.innerHTML = `Here's the first line to <em>${
    songs.options[songs.selectedIndex].text
  }</em>: `;

  firstLine.innerHTML = `<em>"${lyrics[songs.value]['first_line']}"</em>`;
});

// check guess, show results
form.addEventListener('submit', (event) => {
  // prevent form submission
  event.preventDefault();
  let isCorrect = false;

  // display message overlay
  messageOverlay.style.display = 'flex';
  messageOverlay.style.flexDirection = 'column';

  // get guess
  const guess = document.getElementById('guess-input').value;

  // check
  if (guess === lyrics[songs.value]['second_line']) {
    isCorrect = true;
  }

  // set gif & message based on correctness
  if (isCorrect) {
    resultsGif.src = 'assets/images/correct.gif';
    resultsGif.alt = 'ariana-grande-correct-gif';
    playAgainButton.innerText = 'Correct! Play Again?';
  } else {
    resultsGif.src = 'assets/images/incorrect.gif';
    resultsGif.alt = 'ariana-grande-incorrect-gif';
    playAgainButton.innerText = 'Incorrect! Play Again?';
  }

  // show playAgainButton
  playAgainButton.style.display = 'revert';
});

// reset the form, remove the message
playAgainButton.addEventListener('click', (event) => {
  selection.innerHTML = "Here's the first line to:";
  document.getElementById('guess-input').value = '';
  playAgainButton.style.display = 'none';
  messageOverlay.style.display = 'none';
});
