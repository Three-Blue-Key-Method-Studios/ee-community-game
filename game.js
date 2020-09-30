let gameStarted = false;
let gameEnterAnimationTimer = 0;

function InGame() {

    if (gameStarted) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, c.width, c.height);

    } else {
        ctx.clearRect(0, 0, c.width, c.height);

        //probably doing enter animation
        gameEnterAnimationTimer++;
        //replace these with an image or maybe just the game itself i guess
        ctx.fillStyle = "rgba(255,255,255," + gameEnterAnimationTimer / 100 + ")";
        ctx.fillRect(0, 0, c.width, c.height);
        if (gameEnterAnimationTimer >= 100) {
            gameStarted = true;
        }
    }
}



load++;