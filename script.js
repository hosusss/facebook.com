document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    let yesBtn; // "Yes" button will be created later
    let noClickCount = 0;

    // Create a div for taunts
    const tauntDiv = document.createElement("div");
    tauntDiv.style.position = "fixed";
    tauntDiv.style.top = "10%";
    tauntDiv.style.left = "50%";
    tauntDiv.style.transform = "translateX(-50%)";
    tauntDiv.style.fontSize = "24px";
    tauntDiv.style.color = "white";
    tauntDiv.style.textShadow = "2px 2px 10px rgba(255, 0, 102, 0.8)";
    tauntDiv.style.fontFamily = "Dancing Script, cursive";
    tauntDiv.style.textAlign = "center";
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

        // Display a playful taunt
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
                <img src="love.jpg" alt="Love" style="width: 300px; display: block; margin: 20px auto;">
                <img src="love1.jpg" alt="Love" style="width: 300px; display: block; margin: 20px auto;">
                <img src="love2.jpg" alt="Love" style="width: 300px; display: block; margin: 20px auto;">
                <img src="love3.jpg" alt="Love" style="width: 300px; display: block; margin: 20px auto;">
            </div>
        `;
        showFireworks();
    }

    function showFireworks() {
        const container = document.createElement("div");
        container.style.position = "fixed";
        container.style.width = "100vw";
        container.style.height = "100vh";
        container.style.top = "0";
        container.style.left = "0";
        container.style.pointerEvents = "none";
        document.body.appendChild(container);

        for (let i = 0; i < 30; i++) {
            const heart = document.createElement("div");
            heart.innerHTML = "❤️";
            heart.style.position = "absolute";
            heart.style.fontSize = `${Math.random() * 30 + 20}px`;
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
            container.appendChild(heart);
        }

        const style = document.createElement("style");
        style.innerHTML = `
            @keyframes fall {
                0% { transform: translateY(-10vh); opacity: 1; }
                100% { transform: translateY(100vh); opacity: 0; }
            }
            #message {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                font-size: 2rem;
                font-family: Arial, sans-serif;
                color: red;
            }
        `;
        document.head.appendChild(style);
    }

    // Start the question prompt when the page loads
    askQuestion();
});
