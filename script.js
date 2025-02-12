document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const tauntDiv = document.getElementById("tauntMessage");
    const collageContainer = document.getElementById("collage-container");
    const heartsContainer = document.getElementById("hearts-container");
    const finalMessage = document.getElementById("final-message");
    const fireworksContainer = document.getElementById("fireworks-container");
    let noClickCount = 0;

    function askQuestion() {
        let answer = prompt("Who is your love? ❤️");
        if (answer && answer.trim().toLowerCase() === "miles") {
            yesBtn.style.display = "inline-block";
        } else {
            alert("Wrong answer! Try again. 😏");
            askQuestion();
        }
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
            showCelebration();
        }
    });

    noBtn.addEventListener("mouseover", function () {
        const maxX = window.innerWidth - noBtn.clientWidth;
        const maxY = window.innerHeight - noBtn.clientHeight;
        const x = Math.max(0, Math.random() * maxX);
        const y = Math.max(0, Math.random() * maxY);
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
        collageContainer.style.display = "flex";
        finalMessage.style.display = "block";
        generateHearts();
        generateFireworks();
    }

    function generateHearts() {
        for (let i = 0; i < 50; i++) {
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
    }

    function generateFireworks() {
        for (let i = 0; i < 10; i++) {
            const firework = document.createElement("div");
            firework.classList.add("firework");
            firework.style.left = Math.random() * window.innerWidth + "px";
            firework.style.top = Math.random() * window.innerHeight + "px";
            fireworksContainer.appendChild(firework);
            setTimeout(() => firework.remove(), 2000);
        }
    }

    askQuestion();
});
