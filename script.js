document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    let yesBtn;
    let noClickCount = 0;
    const music = document.getElementById("bgMusic");

    function askQuestion() {
        let answer = prompt("Who is your love? ❤️");
        if (answer && answer.trim().toLowerCase() === "miles") {
            createYesButton();
            music.play();
        } else {
            alert("Wrong answer! Try again. 😏");
            askQuestion();
        }
    }

    function createYesButton() {
        yesBtn = document.createElement("button");
        yesBtn.innerText = "Yes";
        yesBtn.className = "btn yes-btn";
        document.getElementById("btnContainer").appendChild(yesBtn);

        yesBtn.addEventListener("click", function () {
            if (noClickCount < 2) {
                alert("Are you sure? Think again! 😏");
                noClickCount++;
            } else {
                showCelebration();
            }
        });
    }

    // No Button moves randomly
    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth
