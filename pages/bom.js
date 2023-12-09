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
      text = `${yourNumber} too large `;
      p.innerText += text;
    } else if (yourNumber < computerGuess && !isNaN(yourNumber)) {
      console.log(yourNumber, "too small");
      text = `${yourNumber} too small `;
      p.innerText += text;
    } else if (yourNumber === computerGuess && !isNaN(yourNumber)) {
      alertBox.classList.add("success");
      text = `${yourNumber} SUCCESS `;
      p.innerText += text;
      console.log(yourNumber, "success");
      let play = prompt("Type 'yes' to play again and anything else to quit: ");
      if (play !== "yes") {
        console.clear()
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
