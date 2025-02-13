document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const tauntDiv = document.getElementById("tauntMessage");
    const collage = document.getElementById("collage");
    const heartsContainer = document.getElementById("hearts-container");
    const celebrationMessage = document.getElementById("celebrationMessage");
    let noClickCount = 0;
    let heartsGenerated = 0;

    function askQuestion() {
        setTimeout(() => {
            let answer = prompt("Who is your love? ❤️");
            if (answer && answer.trim().toLowerCase() === "miles") {
                yesBtn.style.display = "inline-block";
            } else {
                alert("Wrong answer! Try again. 😏");
                askQuestion();
            }
        }, 500);
    }

    yesBtn.addEventListener("click", function () {
        if (noClickCount < 3) {
            const messages = [
                "Are you sure? 🤔",
                "Are you really sure? 😳",
                "Are you really really sure? 😍"
            ];
            tauntDiv.innerText = messages[noClickCount];
            tauntDiv.style.display = "block";
            noClickCount++;
        } else {
            yesBtn.style.display = "none";
            showCelebration();
        }
    });

    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.transition = "transform 0.3s ease-in-out";
        noBtn.style.transform = `translate(${x}px, ${y}px)`;

        let tauntMessages = [
            "You can't catch me! 😜",
            "Too slow! 😆",
            "Nice try! 😂",
            "Keep chasing me! 😏",
            "Hehe, not today! 😛"
        ];
        tauntDiv.innerText = tauntMessages[Math.floor(Math.random() * tauntMessages.length)];
        tauntDiv.style.display = "block";
    });

    function showCelebration() {
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
        tauntDiv.style.display = "none";
        collage.style.display = "grid";
        celebrationMessage.style.display = "block";
        tauntDiv.innerText = "";

        celebrationMessage.innerHTML = "<h2>Advance Happy Valentine's Day and Happy 7 Monthsary, My Love! 💖</h2>";
        generateHearts();
    }

    function generateHearts() {
        if (heartsGenerated >= 100) return;
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.animationDuration = Math.random() * 2 + 3 + "s";
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
        heartsGenerated += 30;
    }

    askQuestion();
});
