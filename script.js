<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy 7th Monthsary! ❤️</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #ffe6f2;
            overflow: hidden;
        }

        #btnContainer {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            gap: 20px;
        }

        button {
            font-size: 24px;
            padding: 15px 30px;
            cursor: pointer;
            border: none;
            border-radius: 10px;
        }

        #noBtn {
            background-color: #ff4d4d;
            color: white;
            position: relative;
        }

        #yesBtn {
            background-color: #4CAF50;
            color: white;
            display: none;
        }

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
    </style>
</head>
<body>

    <div id="btnContainer">
        <button id="noBtn">No</button>
        <button id="yesBtn">Yes</button>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const noBtn = document.getElementById("noBtn");
            const yesBtn = document.getElementById("yesBtn");
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

            // Make "No" button move away when hovered
            noBtn.addEventListener("mouseover", function () {
                const maxX = window.innerWidth - noBtn.clientWidth;
                const maxY = window.innerHeight - noBtn.clientHeight;

                noBtn.style.position = "absolute";
                noBtn.style.left = `${Math.random() * maxX}px`;
                noBtn.style.top = `${Math.random() * maxY}px`;

                let tauntMessages = [
                    "You can't catch me! 😜",
                    "Too slow! 😆",
                    "Nice try! 😂",
                    "Keep chasing me! 😏",
                    "Hehe, not today! 😛"
                ];
                alert(tauntMessages[Math.floor(Math.random() * tauntMessages.length)]);
            });

            // "Yes" button click
            yesBtn.addEventListener("click", function () {
                if (noClickCount < 2) {
                    alert("Are you sure? Think again! 😏");
                    noClickCount++;
                } else {
                    showCelebration();
                }
            });

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
            }

            // Start the game
            askQuestion();
        });
    </script>

</body>
</html>
