
// generer un nombre aleatoire entre 0 et max
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

// attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {

    // element HTML <input> qui va contenir notre nombre
    let input = document.getElementById("input");

    // element HTML <p> qui va contenir notre resultat
    let resultParagraph = document.getElementById("result");

    // recupere ce qui est de base dans le paragraphe
    let baseContent = resultParagraph.innerHTML;

    // generer un nombre aleatoire
    let randomNumber = generateNumber(100);
    console.log(randomNumber);

    // initialiser la valeur de l'input
    let inputValue = 0;

    // element HTML <button> qui va declencher la validation
    let button = document.getElementById("button");

    // ajouter un ecouteur d'evenement sur le bouton, qui se declenche quand on clique dessus
    button.addEventListener("click", () => {

        // resultat de la fonction => ex: votre nombre est trop grand
        let result = onValidate(inputValue, randomNumber);

        // afficher le resultat dans le paragraphe
        resultParagraph.innerHTML = baseContent + result;
    })

    input.addEventListener("input", (event) => {
        const value = event.target.value;

        // mettre a jour la valeur de l'input
        inputValue = value;
    })
})