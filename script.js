document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn"); // Get Yes button
    let noClickCount = 0;

    // Create a div for taunts
    const tauntDiv = document.getElementById("tauntMessage");

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
        if (noClickCount === 0) {
            tauntDiv.innerText = "Are you sure? 🤔";
            noClickCount++;
        } else if (noClickCount === 1) {
            tauntDiv.innerText = "Are you really sure? 😳";
            noClickCount++;
        } else if (noClickCount === 2) {
            tauntDiv.innerText = "Are you really really sure? 😍";
            noClickCount++;
        } else {
            showCelebration();
        }
    });

    // Make "No" button move and display taunts
    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
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
    });

    function showCelebration() {
        document.getElementById("message").style.display = "block"; // Show message
        document.getElementById("imageContainer").style.display = "block"; // Show images
        showFireworks();
    }

    function showFireworks() {
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
