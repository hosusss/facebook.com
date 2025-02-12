document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const music = document.getElementById("bgMusic");
    let noClickCount = 0;

    function askQuestion() {
        let answer = prompt("Who is your love? ❤️");
        if (answer && answer.trim().toLowerCase() === "miles") {
            music.play();
        } else {
            alert("Wrong answer! Try again. 😏");
            askQuestion();
        }
    }

    yesBtn.addEventListener("click", function () {
        if (noClickCount < 2) {
            alert("Are you sure? Think again! 😏");
            noClickCount++;
        } else {
            showCelebration();
        }
    });

    // No Button moves randomly
    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });

    function showCelebration() {
        alert("Yay! 🎉 Happy Valentine's Day! 💖");
        for (let i = 0; i < 30; i++) {
            createHeart();
        }
    }

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        document.body.appendChild(heart);

        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight;
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        heart.animate([
            { transform: `translateY(${y}px)`, opacity: 1 },
            { transform: `translateY(-100vh)`, opacity: 0 }
        ], { duration: 5000, easing: "linear" });

        setTimeout(() => heart.remove(), 5000);
    }

    askQuestion();
});
