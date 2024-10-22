import Input from "./input.js";
import World from "./world.js";
import Player from "./player.js";
//import * as util from "./util.js";
import { getScreenHeight, getScreenWidth, getTileSize } from "./util.js";

export default class Game
{
    constructor(screen)
    {
        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize(screen);
    }

    render(delta_time)
    {
        this.context.clearRect(0, 0, this.screen.width, this.screen.height);

        this.world.drawBackground(this.context);
        this.world.drawGrid(this.context);

        this.player.update(delta_time)
        this.player.draw(this.context);
        
        this.world.drawForeground(this.context);
    }

    initialize(screen)
    {
        this.world = new World();
        this.player = new Player({ game: this, position: { x: 1 * getTileSize(), y: 2 * getTileSize() }});
        this.input = new Input();


        screen.width = getScreenWidth();
        screen.height = getScreenHeight();

        this.screen = screen;
        this.context = this.screen.getContext("2d");
        this.game_over = false;
    }
}