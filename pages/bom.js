let p = document.querySelector("p");
const alertBox = document.querySelector(".alert-box");

let text;
let yourNumber;
let computerGuess;

/**
 * User will guess a number.  The program will coach the user on the proximity of guesses to the randomly chosen number.
 * @param  {}
 * @param  {}
 * @return {}
 */
let endOfFile = false;
function guessANumber() {
  computerGuess = Math.floor(Math.random() * 100 + 1);
  console.log(computerGuess);
  while (!endOfFile) {
    yourNumber = Number(prompt("Please enter a number:  "));
    if (yourNumber > computerGuess && !isNaN(yourNumber)) {
      console.log(yourNumber, "too large");
      text = `\n${yourNumber} too large\n`;
      p.innerText += text;
    } else if (yourNumber < computerGuess && !isNaN(yourNumber)) {
      console.log(yourNumber, "too small");
      text = `\n${yourNumber} too small\n`;
      p.innerText += text;
    } else if (yourNumber === computerGuess && !isNaN(yourNumber)) {
      alertBox.classList.add("success");
      text = `\n${yourNumber} SUCCESS`;
      p.innerText += text;
      console.log(yourNumber, "success");
      let play = prompt("Would you like to play again?  ");
      if (play !== "yes") {
        break;
      } else {
        console.clear();
        computerGuess = Math.floor(Math.random() * 100 + 1);
        console.log(computerGuess);
        continue;
      }
    }
    continue;
  }
}
