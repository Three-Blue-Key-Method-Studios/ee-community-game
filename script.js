let c = document.createElement("canvas");
document.body.appendChild(c);
c.width = window.innerWidth / 1.5;
c.height = c.width / 1.75;
let ctx = c.getContext("2d");

let loads = 3;
let load = 0;

let gameState = 0;
let gameStateTarget = 0;
/*
0 = Main Menu
1 = Ingame
2 = Options
etc...
*/

let mouse = {
    x: 0,
    y: 0,
    isDown: false,
    dragPosition: {
        x: 0,
        y: 0
    }
}
document.onmousedown = () => {
    mouse.isDown = true;
    mouse.dragPosition.x = mouse.x;
    mouse.dragPosition.y = mouse.y;
}
document.onmouseup = () => {
    mouse.isDown = false;
}
document.onmousemove = (e) => {
    mouse.x = e.clientX - c.getBoundingClientRect().x;
    mouse.y = e.clientY - c.getBoundingClientRect().y;
}
let buttonType;
let button;

function Initialise() {

    //BLUE BUTTON
    buttonType = new UIcButtonGraphic();
    buttonType.textSize = 30;
    buttonType.hasGradient = true;
    buttonType.stateColours[UISTATES.IDLE].colour = "#E6203E";
    buttonType.stateColours[UISTATES.IDLE].secondaryColour = "#FAA62F";
    buttonType.stateColours[UISTATES.IDLE].borderColour = "#E6203E";
    buttonType.stateColours[UISTATES.IDLE].textColour = "#ffffff";

    buttonType.stateColours[UISTATES.HOVER].colour = "#FAA62F";
    buttonType.stateColours[UISTATES.HOVER].secondaryColour = "#FF7947";
    buttonType.stateColours[UISTATES.HOVER].borderColour = "#E6203E";
    buttonType.stateColours[UISTATES.HOVER].textColour = "#ffffff";


    buttonType.stateColours[UISTATES.PRESS].colour = "#FF7947";
    buttonType.stateColours[UISTATES.PRESS].secondaryColour = "#FAA62F";
    buttonType.stateColours[UISTATES.PRESS].borderColour = "#E6203E";
    buttonType.stateColours[UISTATES.PRESS].textColour = "#ffffff";


    buttonType.gradientSize = 100;
    //MENU BUTTONS
    button = new UIButton(c.width / 2, c.height / 2 - 100, 500, 75, buttonType, true);
    button.OnRelease = () => {
        gameStateTarget = 1;
    }
    button2 = new UIButton(c.width / 2, c.height / 2, 500, 75, buttonType, true);
    button3 = new UIButton(c.width / 2, c.height / 2 + 100, 500, 75, buttonType, true);
}

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

function LoadLoop() {
    if (load != loads)
        requestAnimationFrame(LoadLoop)
    else {
        Initialise();
        MainLoop();
    }
}

window.onload = () => {
    LoadLoop();
};