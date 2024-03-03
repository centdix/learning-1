function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function checkNumber(enteredNumber) {
    let randomNumber = generateRandomNumber();
    if (enteredNumber < randomNumber) {
        return "Your guess is too low."
    } else if (enteredNumber > randomNumber) {
        return "Your guess is too high"
    } else {
        return "Bien ouej."
    }
}
