function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function compareNumbers(input, randomNumber) {
    console.log(input, randomNumber)
    if (input > randomNumber) {
        return "Too high!";
    } else if (input < randomNumber) {
        return "Too low!";
    } else {
        return "You got it!";
    }
}

function checkInput() {
    const input = document.getElementById("input").value;
    const result = compareNumbers(input, randomNumber);
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = result;
}

let randomNumber = getRandomNumber();
