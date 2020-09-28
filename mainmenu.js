let buttonType;
let button;

function Initialise() {
    buttonType = new UICanvasButtonGraphic();
    buttonType.textSize = 50;
    buttonType.hasGradient = true;
    buttonType.stateColours[UISTATES.IDLE].colour = "#1540AD";
    buttonType.stateColours[UISTATES.IDLE].secondaryColour = "#5283FF";
    buttonType.gradientSize = 100;
    button = new UIButton(canvas.width / 2, canvas.height / 2, 800, 100, buttonType, true);
}

function MainMenu() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    button.Run("This is a blue button, you dumbo");

}

load++;