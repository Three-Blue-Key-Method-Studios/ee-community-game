class Interactive {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.states = {
            IDLE: "idle",
            HOVER: "hover",
            PRESS: "press",
            RELEASE: "release"
        }
        this.state = this.states.IDLE;
    }
}