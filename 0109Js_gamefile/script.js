const gameArea = document.getElementById('gameArea');
const colors = ['Red', 'Orange', 'Deepskyblue', 'Blue', 'Purple', 'Limegreen', 'Yellow', 'Violet', 'Magenta'];
const balls = [];

function createBall() {
    let ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * (gameArea.clientWidth - 50))}px`;
    ball.style.top = `${Math.floor(Math.random() * (gameArea.clientHeight - 50))}px`;
    gameArea.appendChild(ball);
    balls.push(ball);
}

setInterval(createBall, 2000);

gameArea.addEventListener('click', function(event) {
    if (event.target.classList.contains('ball')) {
        // 色が同じボールを見つけて消す
        gameArea.addEventListener('click', function(event) {
            if (event.target.classList.contains('ball')) {
                const clickedColor = event.target.style.backgroundColor;
                balls.forEach(ball => {
                    if (ball.style.backgroundColor === clickedColor) {
                        ball.remove(); // ボールを削除
                    }
                });
            }
        });
    }
});
