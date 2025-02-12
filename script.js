document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    let yesBtn = document.getElementById("yesBtn"); 
    let noClickCount = 0;

    const tauntDiv = document.getElementById("tauntMessage");

    yesBtn.style.display = "none";

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
            noClickCount++;
        } else {
            showCelebration();
        }
    });

    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
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
        document.getElementById("message").style.display = "block";
        document.getElementById("collage").style.display = "grid";
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
