document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    let noClickCount = 0;

    const tauntDiv = document.getElementById("tauntMessage");
    const finalMessage = document.getElementById("finalMessage");
    const imageCollage = document.getElementById("imageCollage");

    // Hide "Yes" button initially
    yesBtn.style.display = "none";

    // Ask the question before showing "Yes" button
    function askQuestion() {
        let answer = prompt("Who is your love? ❤️");
        if (answer && answer.trim().toLowerCase() === "miles") {
            yesBtn.style.display = "inline-block"; // Show "Yes" button
        } else {
            alert("Wrong answer! Try again. 😏");
            askQuestion();
        }
    }

    // "Yes" button click event
    yesBtn.addEventListener("click", function () {
        if (noClickCount < 3) {
            const tauntMessages = [
                "Are you sure? 🤔",
                "Are you really sure? 😳",
                "Are you really really sure? 😍"
            ];
            tauntDiv.innerText = tauntMessages[noClickCount];
            tauntDiv.style.display = "block";
            noClickCount++;
        } else {
            showCelebration();
        }
    });

    // Make "No" button move and display taunts
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
        document.getElementById("message").style.display = "block"; // Show message
        imageCollage.style.display = "grid"; // Show image collage
        finalMessage.style.display = "block"; // Show final message
        showFloatingHearts();
    }

    function showFloatingHearts() {
        const container = document.createElement("div");
        container.id = "hearts-container";
        document.body.appendChild(container);

        for (let i = 0; i < 30; i++) {
            const heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.className = "heart";
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
            container.appendChild(heart);
        }
    }

    askQuestion();
});
