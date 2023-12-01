const submitAnswerButton = document.getElementById("submitAnswer");
const tekst = document.getElementById ("counter")

let liv = Number(localStorage.getItem("liv"))

submitAnswerButton.addEventListener("click", function () {
    liv -=1
    tekst.textContent = liv
    if (liv == 0) {
        window.location.href = "feil.html"
    }
    })