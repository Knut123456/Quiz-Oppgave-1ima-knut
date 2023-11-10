
// const make it so that Id on html get on
const answerInput = document.getElementById("answerInput");
const submitAnswerButton = document.getElementById("submitAnswer");
const resultDisplay = document.getElementById("result");
const tekst = document.getElementById ("counter")


let liv = Number(localStorage.getItem("liv"))


const correctAnswer = "markus persson"; 

submitAnswerButton.addEventListener("click", function () {
    const playerAnswer = answerInput.value.trim().toLowerCase(); 
    liv--;
    tekst.textContent = liv
    if (liv == 0) {
        window.location.href = "feil.html"
    }

    if (playerAnswer == correctAnswer) {
        resultDisplay.textContent = "Riktig svar!";
        setTimeout(function() {
            window.location.href = "ferdig.html";
        }, 3000);
    } else {
        resultDisplay.textContent = "Feil svar. Prøv igjen.";
        liv --;
    }
});







