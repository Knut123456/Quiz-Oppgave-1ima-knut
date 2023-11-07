const answerInput = document.getElementById("answerInput");
const submitAnswerButton = document.getElementById("submitAnswer");
const resultDisplay = document.getElementById("result");

const correctAnswer = "markus persson"; 

submitAnswerButton.addEventListener("click", function () {
    const playerAnswer = answerInput.value.trim().toLowerCase(); 

    if (playerAnswer == correctAnswer) {
        resultDisplay.textContent = "Riktig svar!";
        setTimeout(function() {
            window.location.href = "ferdig.html";
        }, 3000);
    } else {
        resultDisplay.textContent = "Feil svar. Prøv igjen.";
    }
});