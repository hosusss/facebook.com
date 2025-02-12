document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    let noClickCount = 0;
    let passwordAttempts = 0;
    const correctPassword = "Miles";  // Correct answer to the password question

    // Add a teaser message
    const teaserMessage = document.createElement("div");
    teaserMessage.innerHTML = "<h2>Want a surprise? Press 'No'! 🎁</h2>";
    teaserMessage.style.position = "fixed";
    teaserMessage.style.top = "20px";
    teaserMessage.style.left = "50%";
    teaserMessage.style.transform = "translateX(-50%)";
    teaserMessage.style.textAlign = "center";
    teaserMessage.style.fontSize = "1.5rem";
    teaserMessage.style.color = "#ff3366";
    document.body.appendChild(teaserMessage);

    // Add a taunting message when she hovers over "No"
    const tauntMessage = document.createElement("div");
    tauntMessage.innerHTML = "<h2>You can't catch me! 😜</h2>";
    tauntMessage.style.position = "fixed";
    tauntMessage.style.bottom = "20px";
    tauntMessage.style.left = "50%";
    tauntMessage.style.transform = "translateX(-50%)";
    tauntMessage.style.textAlign = "center";
    tauntMessage.style.fontSize = "1.5rem";
    tauntMessage.style.color = "#ff3366";
    tauntMessage.style.opacity = "0";
    document.body.appendChild(tauntMessage);

    // Make "No" button move when hovered over
    noBtn.addEventListener("mouseover", function () {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;

        // Show the taunting message when hovering over "No"
        tauntMessage.style.opacity = "1";
        setTimeout(() => {
            tauntMessage.style.opacity = "0";
        }, 1000);
    });

    yesBtn.addEventListener("click", function () {
        if (passwordAttempts === 0) {
            // Ask for password on first click
            const password = prompt("Who is your love?");
            if (password === correctPassword) {
                alert("Password correct! But you still need to click 3 more times!");
                passwordAttempts++;  // Increase attempt count after correct password
            } else {
                alert("Incorrect password. Try again!");
            }
        } else if (noClickCount < 2) {
            alert("Are you sure? Think again! 😏");
            noClickCount++;
        } else {
            showCelebration();
        }
    });

    // Show the final celebration message
    function showCelebration() {
        document.body.innerHTML = `
            <div id="message">
                <h1>🎉 Happy Valentine's Day! 💖</h1>
                <h2>Happy 7th Monthsary, My Love! ❤️</h2>
            </div>
        `;
        showFireworks();
    }

    // Create fireworks animation
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
});
