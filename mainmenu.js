let menuExitAnimationTimer = 0;
let menuAnimationTimer = 0;
let menuBackgroundTimer = 0;



function MainMenu() {
    menuBackgroundTimer += 0.005;
    let x = (Math.sin(menuBackgroundTimer * 2) * .5 + .5) * c.width;
    let y = (Math.cos(menuBackgroundTimer * 2) * .5 + .5) * c.height;
    let bgGradient = ctx.createLinearGradient(x, c.height - y, c.width - x, y);
    bgGradient.addColorStop(0, "hsl(16, 100%, 64%)");
    bgGradient.addColorStop(1, "hsl(35, 95%, 58%)");
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, c.width, c.height);
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