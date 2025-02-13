document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const tauntDiv = document.getElementById("tauntMessage");
    const collage = document.getElementById("collage");
    const heartsContainer = document.getElementById("hearts-container");
    const celebrationMessage = document.getElementById("celebrationMessage");
    const bgMusic = document.getElementById("bgMusic");
    const mainTitle = document.querySelector("h1");
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
        const maxX = window.innerWidth - noBtn.clientWidth - 20;
        const maxY = window.innerHeight - noBtn.clientHeight - 20;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;

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
        mainTitle.style.display = "none";
        collage.style.display = "grid";
        celebrationMessage.style.display = "block";
        tauntDiv.innerText = "";

        celebrationMessage.innerHTML = "<h2>Advance Happy Valentine's Day and Happy 7 Monthsary, My Love! 💖</h2>";
        generateHearts();
        playMusic();
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

    function playMusic() {
        if (bgMusic) {
            bgMusic.currentTime = 39;
            bgMusic.play().catch(error => console.log("Music playback failed: ", error));
        }
    }

    askQuestion();
});
