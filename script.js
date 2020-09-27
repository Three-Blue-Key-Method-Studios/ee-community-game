let canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = window.innerWidth / 1.5;
canvas.height = canvas.width / 2;
let ctx = canvas.getContext("2d");

let gameState = 0;
/*
0 = Main Menu
1 = Ingame
2 = Options
etc...
*/

function MainLoop() {
    switch (gameState) {
        case 0:
            MainMenu();
            break;
        case 1:
            InGame();
            break;
        case 2:
            Options();
            break;
    }
    requestAnimationFrame(MainLoop)
}
window.onload = () => MainLoop();