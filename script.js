let yesCount = 0;

document.getElementById("noBtn").addEventListener("mouseover", function() {
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
});

document.getElementById("yesBtn").addEventListener("click", function() {
    yesCount++;
    if (yesCount < 3) {
        alert("Are you sure? 😊");
    } else {
        startCelebration();
    }
});

function startCelebration() {
    document.body.innerHTML = "<h1>Yay! 🎉💖</h1>";
    createFireworks();
    createFallingHearts();
}

// Fireworks effect
function createFireworks() {
    let script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.3.2";
    script.onload = () => confetti();
    document.body.appendChild(script);
}

// Falling hearts effect
function createFallingHearts() {
    let style = document.createElement("style");
    style.innerHTML = `
        @keyframes fall {
            0% { transform: translateY(-10vh); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
        }
        .heart {
            position: absolute;
            top: 0;
            font-size: 2rem;
            color: red;
            animation: fall linear infinite;
        }
    `;
    document.head.appendChild(style);

    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);
    }
}
