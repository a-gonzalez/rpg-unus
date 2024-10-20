import Input from "./input.js";
import World from "./world.js";
import Player from "./player.js";
//import * as util from "./util.js";
import { getScreenHeight, getScreenWidth } from "./util.js";

export default class Game
{
    constructor(screen)
    {
        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize(screen);
    }

    render()
    {
        this.world.drawGrid(this.context);
        this.player.draw(this.context);
    }

    initialize(screen)
    {
        this.world = new World();
        this.player = new Player({ position: { x: 7, y: 10 }});
        this.input = new Input();

        screen.width = getScreenWidth();
        screen.height = getScreenHeight();

        this.screen = screen;
        this.context = this.screen.getContext("2d");
        this.game_over = false;
    }
}