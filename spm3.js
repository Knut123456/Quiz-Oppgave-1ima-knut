const submitAnswerButton = document.getElementById("submitAnswer");

let liv = Number(localStorage.getItem("liv"))

submitAnswerButton.addEventListener("click", function () {
    liv--;
    tekst.textContent = liv
    if (liv == 0) {
        window.location.href = "feil.html"
    }
    })