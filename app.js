// Extracting component from html

let inputNum = document.getElementById("guess");
const randomNum = Math.floor(Math.random() * 100); // in this line random number will generate
const displayScore = document.querySelector("#Score");
const displayMessage = document.querySelector(".message");
let score = 10; // starting Score

// This Fuction Calls Out When Check Button Click
const checkTheNumber = () => {
  if (score !== 0) {
    if (inputNum.valueAsNumber >= 0 && inputNum.valueAsNumber <= 100) {
      if (inputNum.valueAsNumber === randomNum) {
        displayMessage.innerText = `Hurray! You got The Number ${randomNum} and your Score is ${score}`;
        displayScore.innerText = `${score}`;
        setTimeout(() => {
          location.reload();
        }, 20000);
      } else {
        score--;
        if (
          inputNum.valueAsNumber < randomNum &&
          Math.abs(inputNum.valueAsNumber - randomNum) <= 3
        ) {
          displayMessage.innerText = "You are very close to the Number";
          console.log(inputNum.valueAsNumber);
          displayScore.innerText = `${score}`;
          inputNum.value = "";
        } else if (inputNum.valueAsNumber < randomNum) {
          displayMessage.innerText =
            "This Number comes before the Guess Number";
          console.log(inputNum.valueAsNumber);
          displayScore.innerText = `${score}`;
          inputNum.value = "";
        } else if (inputNum.valueAsNumber > randomNum) {
          displayMessage.innerText = "This Number comes after the Guess Number";
          console.log(inputNum.valueAsNumber);
          displayScore.innerText = `${score}`;
          inputNum.value = "";
        }
      }
    } else {
      score--;
      displayMessage.innerText =
        "Please enter your number between 0 to 100 and then check your answer!";
      console.log(inputNum.valueAsNumber);
      inputNum.value = "";
    }
  } else {
    displayMessage.innerText = `Ohh you fail the challenge! Your number is ${randomNum}`;
    setTimeout(() => {
      location.reload();
    }, 20000);
  }
};

// This Function Calls Out When Reset Button Click
const resetGame = () => {
  location.reload();
};

// calling the function on clicking check button
document.querySelector("#check").addEventListener("click", checkTheNumber);

// Add event listener for Enter key on the input field
const inputField = document.querySelector("#guess");

inputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkTheNumber();
  }
});
