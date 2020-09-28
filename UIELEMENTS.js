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
class UICanvasButtonGraphic {
    constructor(width, height) {
        this.width = width;
        this.height = height;
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
    }
    Draw(x, y, width, height, state, text = "") {
        let colour = this.stateColours[state].colour;
        if (this.hasGradient) {
            let offset = {
                x: x + width / 2,
                y: y + height / 2
            }
            colour = ctx.createLinearGradient(-this.gradientDirection.x * this.gradientSize + offset.x, this.gradientDirection.y * this.gradientSize + offset.y, this.gradientDirection.x * this.gradientSize + offset.x, -this.gradientDirection.y * this.gradientSize + offset.y);
            colour.addColorStop(0, this.stateColours[state].colour);
            colour.addColorStop(1, this.stateColours[state].secondaryColour);
        }
        ctx.fillStyle = this.stateColours[state].borderColour;
        ctx.fillRect(x - this.borderSize, y - this.borderSize, width + this.borderSize * 2, height + this.borderSize * 2);
        ctx.fillStyle = colour;
        ctx.fillRect(x, y, width, height);
        let textWidth = ctx.measureText(text).width;
        ctx.fillStyle = this.stateColours[state].textColour;
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
        if (mouseX > this.x - offsetX && mouseY > this.y - offsetY &&
            mouseX < this.x - offsetX + this.width && mouseY < this.y - offsetY + this.height) {
            if (mousePressed) {
                this.state = UISTATES.PRESS;
            } else {
                this.state = UISTATES.HOVER;
            }
        }
        switch (this.state) {
            case UISTATES.PRESS:
                this.state = UISTATES.RELEASE;
                break;
            case UISTATES.RELEASE:
                this.state = UISTATES.HOVER; //because the mouse is still over the button
                break;
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
            case UISTATES.RELEASE:
                this.OnRelease();
            default:
                return;
        }
    }
    Run(text = "") {
        let offsetX = 0;
        let offsetY = 0;
        if (this.isCentered) {
            offsetX = this.width / 2;
            offsetY = this.height / 2;
        }
        this.graphic.Draw(this.x - offsetX, this.y - offsetY, this.width, this.height, this.state, text);
        this.RunMethods();
    }
}

load++;