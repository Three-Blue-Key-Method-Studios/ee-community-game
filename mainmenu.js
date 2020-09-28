let buttonType;
let button;

function Initialise() {
    buttonType = new UICanvasButtonGraphic();
    buttonType.textSize = 50;
    buttonType.hasGradient = true;
    buttonType.stateColours[UISTATES.IDLE].colour = "#1540AD";
    buttonType.stateColours[UISTATES.IDLE].secondaryColour = "#5283FF";
    buttonType.stateColours[UISTATES.PRESS].colour = "#00ff00";
    buttonType.stateColours[UISTATES.PRESS].secondaryColour = "#000000";
    buttonType.gradientSize = 100;
    button = new UIButton(canvas.width / 1.5, canvas.height / 5, 800, 100, buttonType, true);
    button2 = new UIButton(canvas.width / 3, canvas.height / 2, 800, 100, buttonType, true);
    button3 = new UIButton(canvas.width / 2, canvas.height / 3, 800, 100, buttonType, true);
    button4 = new UIButton(canvas.width / 2, canvas.height / 1.5, 800, 100, buttonType, true);
}

function MainMenu() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    button.Run(button.state, mouse);
    button2.Run("This is a blue button, you dumbo", mouse);
    button3.Run("This is a blue button, you dumbo", mouse);
    button4.Run("This is a blue button, you dumbo", mouse);

}

load++;