document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    const btnContainer = document.getElementById("btnContainer");
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
        btnContainer.appendChild(yesBtn);

        yesBtn.addEventListener("click", function () {
            if (noClickCount < 2) {
                alert("Are you sure? Think again! 😏");
                noClickCount++;
            } else {
                showCelebration();
            }
        });
    }

    function showCelebration() {
        document.body.innerHTML = "<h1>💖 YAY! Happy Valentine's Day! 💖</h1>";
        confettiEffect();
    }

    // No Button moves randomly
    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    function confettiEffect() {
        for (let i = 0; i < 20; i++) {
            let heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.className = "heart";
            document.body.appendChild(heart);

            let posX = Math.random() * window.innerWidth;
            let duration = Math.random() * 3 + 2;

            heart.style.left = `${posX}px`;
            heart.style.animationDuration = `${duration}s`;

            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
        }
    }

    // Start the process by asking the question
    askQuestion();
});
