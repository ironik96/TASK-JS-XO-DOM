const X_ELEMENT = "X";
const O_ELEMENT = "O";
const NO_ELEMENT = "";
const WIN_PATTERNS = new Set([
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"],
]);

// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  let docElement = document.getElementById(index);
  docElement.style.color = element === X_ELEMENT ? "green" : "red";
  docElement.innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
function clickButton(index) {
  if (board[index - 1] === NO_ELEMENT) {
    board[index - 1] = element;
    fillButton(index, element);
  }
  element = toggleElement(element);
  checkWinner(X_ELEMENT);
  checkWinner(O_ELEMENT);
  if (!board.includes(NO_ELEMENT)) draw();
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */

const restartGame = () => {
  board = [...new Array(9)].map((e) => NO_ELEMENT);
  element = Math.floor(Math.random() * 2) === 0 ? X_ELEMENT : O_ELEMENT;
  board.forEach((e, i) => fillButton(i + 1, e));
};

const toggleElement = (element) =>
  element === X_ELEMENT ? O_ELEMENT : X_ELEMENT;

const getElementIndices = (element) =>
  board.map((e, i) => (e === element ? i : "")).join("");

const winner = (element) => {
  winningAlert(element);
  restartGame();
};

const draw = () => {
  alert("Draw");
  restartGame();
};

function checkWinner(element) {
  const indices = getElementIndices(element);
  WIN_PATTERNS.forEach((pattern) => {
    if (pattern.every((pos) => indices.includes(pos))) {
      winner(element);
      return;
    }
  });
}

let board;
let element;
restartGame();
