document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    let yesBtn; // "Yes" button will be created later
    let noClickCount = 0;

    // Create a div for taunts
    const tauntDiv = document.createElement("div");
    tauntDiv.id = "tauntMessage";
    document.body.appendChild(tauntDiv);

    // Ask the question before showing "Yes" button
    function askQuestion() {
        let answer = prompt("Who is your love? ❤️");
        if (answer && answer.trim().toLowerCase() === "miles") {
            createYesButton();
        } else {
            alert("Wrong answer! Try again. 😏");
            askQuestion();
        }
    }
    
    // Function to create "Yes" button after correct answer
    function createYesButton() {
        yesBtn = document.createElement("button");
        yesBtn.innerText = "Yes";
        yesBtn.id = "yesBtn";
        yesBtn.className = "btn yes-btn";
        document.getElementById("container").appendChild(yesBtn);

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
    }

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
        document.body.innerHTML = `
            <div id="message">
                <h1>🎉 Advance Happy Valentine's Day! 💖</h1>
                <h2>Advance Happy 7th Monthsary, My Love! ❤️</h2>
                <img src="love.jpg" alt="Love" class="final-img">
                <img src="love1.jpg" alt="Love" class="final-img">
                <img src="love2.jpg" alt="Love" class="final-img">
                <img src="love3.jpg" alt="Love" class="final-img">
            </div>
        `;
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
