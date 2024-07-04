// Extracting component from html 

let inputNum = document.getElementById("guess");
const randomNum = Math.floor(Math.random() * 100); // in this line random number will generate
const displayScore = document.querySelector("#Score");
const displayMessage = document.querySelector(".message");
let score = 10; // starting Score

// This Fuction Calls Out When Check Button Click
const checkTheNumber = () => {
    if(score !== 0){if (inputNum.valueAsNumber >= 0 && inputNum.valueAsNumber <= 100) {
        if (inputNum.valueAsNumber === randomNum) {
            displayMessage.innerText = `Hurray! You got The Number ${randomNum} and your Score is ${score}`;
            displayScore.innerText = `${score}`;
            setTimeout(() =>{location.reload()}, 5000);
        } else {
            score--;
            if (inputNum.valueAsNumber < randomNum && Math.abs(inputNum.valueAsNumber - randomNum) <= 2) {
                displayMessage.innerText = "You are very close to the Number";
                console.log(inputNum.valueAsNumber);
                displayScore.innerText = `${score}`;
                inputNum.value = "";
            } else if (inputNum.valueAsNumber < randomNum) {
                displayMessage.innerText = "This Number comes before the Guess Number";
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
        displayMessage.innerText = "Please enter your number between 0 to 100 and then check your answer!";
        console.log(inputNum.valueAsNumber);
        inputNum.value = "";
    }}else{
        displayMessage.innerText = "Ohh you fail the challenge!"
        setTimeout(() =>{
            location.reload();
        }, 5000);
    }
}

// This Function Calls Out When Reset Button Click
const resetGame = () =>{
    location.reload(); 
}


