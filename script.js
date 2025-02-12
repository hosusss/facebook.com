document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    let yesBtn; // "Yes" button appears after answering the question
    let noClickCount = 0;

    // Center buttons container
    const btnContainer = document.createElement("div");
    btnContainer.style.position = "fixed";
    btnContainer.style.top = "50%";
    btnContainer.style.left = "50%";
    btnContainer.style.transform = "translate(-50%, -50%)";
    btnContainer.style.display = "flex";
    btnContainer.style.gap = "20px";

    noBtn.style.fontSize = "24px";
    noBtn.style.padding = "15px 30px";
    noBtn.style.position = "relative";
    noBtn.style.cursor = "pointer";

    document.body.appendChild(btnContainer);
    btnContainer.appendChild(noBtn);

    // Ask question before showing "Yes"
    function askQuestion() {
        let answer = prompt("Who is your love? ❤️");
        if (answer && answer.trim().toLowerCase() === "miles") {
            createYesButton();
        } else {
            alert("Wrong answer! Try again. 😏");
            askQuestion();
        }
    }
    
    // Create "Yes" button after correct answer
    function createYesButton() {
        yesBtn = document.createElement("button");
        yesBtn.innerText = "Yes";
        yesBtn.style.fontSize = "24px";
        yesBtn.style.padding = "15px 30px";
        yesBtn.style.cursor = "pointer";
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

    // Make "No" button move and taunt
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
        alert(tauntMessages[Math.floor(Math.random() * tauntMessages.length)]);
    });

    // Show final message + hearts fireworks
    function showCelebration() {
        document.body.innerHTML = `
            <div id="message">
                <h1>🎉 Happy Valentine's Day! 💖</h1>
                <h2>Happy 7th Monthsary, My Love! ❤️</h2>
            </div>
        `;
        showFireworks();
        showFallingHearts();
    }

    function showFireworks() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const heart = document.createElement("div");
                heart.innerHTML = "💖";
                heart.style.position = "fixed";
                heart.style.fontSize = `${Math.random() * 50 + 30}px`;
                heart.style.left = `${Math.random() * 100}vw`;
                heart.style.top = `${Math.random() * 100}vh`;
                heart.style.opacity = "1";
                heart.style.transition = "opacity 1s ease-out, transform 1s ease-out";
                document.body.appendChild(heart);

                setTimeout(() => {
                    heart.style.opacity = "0";
                    heart.style.transform = "scale(2)";
                }, 100);
                
                setTimeout(() => heart.remove(), 1000);
            }, i * 300);
        }
    }

    function showFallingHearts() {
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

    // Start the question prompt
    askQuestion();
});
