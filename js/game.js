import World from "./world.js";
import Player from "./player.js";
import * as util from "./util.js";

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

    test()
    {
        console.log(util.getScreenWidth(), util.getScreenHeight());
    }

    initialize(screen)
    {
        this.world = new World();
        this.player = new Player(this, null, null, null);

        screen.width = util.getScreenWidth();
        screen.height = util.getScreenHeight();

        this.screen = screen;
        this.context = this.screen.getContext("2d");
        this.game_over = false;
    }
}