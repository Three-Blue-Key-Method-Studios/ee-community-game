let menuExitAnimationTimer = 0;
let menuAnimationTimer = 0;

function MainMenu() {
    ctx.clearRect(0, 0, c.width, c.height);

    if (gameStateTarget == 1) {
        menuExitAnimationTimer++;
        let offset = (menuExitAnimationTimer * (menuExitAnimationTimer + 1) / 2);

        button.graphic.offsetY = -offset / 10;
        button2.graphic.offsetY = -offset / 10;
        button3.graphic.offsetY = -offset / 10;
        button.Draw("Play");
        button2.Draw("Options");
        button3.Draw("About");
        if (menuExitAnimationTimer >= 100) {
            button.graphic.offsetY = 0;
            button2.graphic.offsetY = 0;
            button3.graphic.offsetY = 0;
            gameState = 1;
            menuExitAnimationTimer = 0;
            return;
        }
    }

    if (gameStateTarget == 0) {
        button.Run("Play", mouse);
        button2.Run("Options", mouse);
        button3.Run("About", mouse);
    }


}

load++;