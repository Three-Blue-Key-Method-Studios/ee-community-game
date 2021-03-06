let UISTATES = {
    IDLE: "IDLE",
    HOVER: "HOVER",
    PRESS: "PRESS",
    RELEASE: "RELEASE"
}
class UIInteractive {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.state = UISTATES.IDLE;
    }
    OnHover() {
        return;
    }
    OnPress() {
        return;
    }
    OnRelease() {
        return;
    }
    CheckState() {
        return;
    }
}
class UIcButtonGraphic {
    constructor() {
        this.stateColours = { //colours for each state
            IDLE: {
                colour: "#FF0000",
                secondaryColour: "#FFFFFF",
                textColour: "#000000",
                borderColour: "#000000"
            },
            HOVER: {
                colour: "#FF0000",
                secondaryColour: "#FFFFFF",
                textColour: "#000000",
                borderColour: "#000000"
            },
            PRESS: {
                colour: "#FF0000",
                secondaryColour: "#FFFFFF",
                textColour: "#000000",
                borderColour: "#000000"
            } //Release wont exist because its so short that it wont be visible anyway
        }
        this.hover = false;
        this.hasGradient = false;
        this.gradientType = 0;
        this.gradientDirection = {
            x: 1,
            y: 1
        };
        this.gradientSize = 1;

        this.textSize = 30;

        this.borderSize = 5;

        this.roundedness = 0; //deal with that later tbh, just rectangles for now

        this.offsetX = 0;
        this.offsetY = 0;
    }
    Draw(x, y, width, height, state, text = "") {
        let drawState = state;
        if (drawState == UISTATES.RELEASE) {
            drawState = UISTATES.PRESS;
        }
        x += this.offsetX;
        y += this.offsetY;
        let colour = this.stateColours[drawState].colour;
        if (this.hasGradient) {
            let offset = {
                x: x + width / 2,
                y: y + height / 2
            }
            colour = ctx.createLinearGradient(-this.gradientDirection.x * this.gradientSize + offset.x, this.gradientDirection.y * this.gradientSize + offset.y, this.gradientDirection.x * this.gradientSize + offset.x, -this.gradientDirection.y * this.gradientSize + offset.y);
            colour.addColorStop(0, this.stateColours[drawState].colour);
            colour.addColorStop(1, this.stateColours[drawState].secondaryColour);
        }
        ctx.fillStyle = this.stateColours[drawState].borderColour;
        ctx.fillRect(x - this.borderSize, y - this.borderSize, width + this.borderSize * 2, height + this.borderSize * 2);
        ctx.fillStyle = colour;
        ctx.fillRect(x, y, width, height);
        let textWidth = ctx.measureText(text).width;
        ctx.fillStyle = this.stateColours[drawState].textColour;
        ctx.font = this.textSize + "px Arial";
        ctx.fillText(text, x - textWidth / 2 + width / 2, y + height / 2 + this.textSize / 4);
    }
}
class UIButton extends UIInteractive {
    constructor(x, y, width, height, graphic, isCentered = false) {
        super(x, y);
        this.width = width;
        this.height = height;
        this.graphic = graphic;
        this.isCentered = isCentered;
    }
    CheckState(mouseX, mouseY, mousePressed) {
        let offsetX = 0;
        let offsetY = 0;
        if (this.isCentered) {
            offsetX = this.width / 2;
            offsetY = this.height / 2;
        }
        let isInBounds = mouseX > this.x - offsetX && mouseY > this.y - offsetY && mouseX < this.x - offsetX + this.width && mouseY < this.y - offsetY + this.height;

        if (isInBounds) {
            if (mousePressed) {
                this.state = UISTATES.PRESS;
            } else {
                if (this.state == UISTATES.IDLE) {
                    this.state = UISTATES.HOVER;
                }
                if (this.state == UISTATES.PRESS) {
                    this.OnRelease();
                    this.state = UISTATES.HOVER;
                }
            }
        } else {
            if (this.state == UISTATES.HOVER) {
                this.state = UISTATES.IDLE;
            }
            if (this.state == UISTATES.PRESS) {
                this.state = UISTATES.IDLE;
            }
        }


    }
    RunMethods() {
        switch (this.state) {
            case UISTATES.HOVER:
                this.OnHover();
                break;
            case UISTATES.PRESS:
                this.OnPress();
                break;
            default:
                return;
        }
    }
    Draw(text = "") {
        let offsetX = 0;
        let offsetY = 0;
        if (this.isCentered) {
            offsetX = this.width / 2;
            offsetY = this.height / 2;
        }
        this.graphic.Draw(this.x - offsetX, this.y - offsetY, this.width, this.height, this.state, text);
    }
    Run(text = "", mouse) {
        this.Draw(text);
        this.RunMethods();
        this.CheckState(mouse.x, mouse.y, mouse.isDown);
    }
}

load++;