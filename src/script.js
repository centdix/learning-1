
function generateNumber(max) {
    return Math.floor(Math.random() * max);
}

// dire si le nombre est plus petit ou plus grand
function onValidate(userInput, randomNumber) {
    // si plus petit
    if (userInput < randomNumber) {
        return "Votre nombre est trop petit"
    }

    // si plus grand
    if (userInput > randomNumber) {
        return "Votre nombre est trop grand"
    }

    if (userInput == randomNumber) {
        return "Bravo le sang."
    }
}

document.addEventListener("DOMContentLoaded", () => {

    let number = 2
    number = number + 4
    
    let string = "resultat"
    string = string + "test"

    let input = document.getElementById("mon_input");

    // element HTML <p> qui va contenir notre resultat
    let resultParagraph = document.getElementById("result");

    // recuperer ce qui est de base dans le paragraphe
    let baseContent = resultParagraph.innerHTML;

    let randomNumber = generateNumber(100);
    let inputValue = 0;

    let button = document.getElementById("button");
    button.addEventListener("click", () => {

        // resultat de la fonction => ex: votre nombre est trop grand
        let result = onValidate(inputValue, randomNumber);

        resultParagraph.style.display = "flex";

        // modifier le paragraphe pour afficher "votre nombre est trop grand"

        // Le contenu de base de notre paragraphe
        // => resultParagraph.innerHTML

        // reinitialiser resultParagraph
        // resultParagraph.innerHTML = "Resultat: ";

        // ici on a "Resultat: Votre nombre machin"
        resultParagraph.innerHTML = baseContent + result;
    })

    input.addEventListener("input", (event) => {
        const value = event.target.value;
        console.log('value is:', value);
        inputValue = value;

        // reinitialiser l'input quand on appuie sur valider
    })

    console.log('printing')
    // console.log(inputValue)
})