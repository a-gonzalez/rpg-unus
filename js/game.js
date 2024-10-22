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
        let image = new Image();
        image.src = "./img/player.png";

        let tilesize = getTileSize();

        let configuration = {
            game: this,
            sprite: {
                sheet: image,
                x: 4,
                y: 2,
                width: 64,
                height: 64
            },
            position: { x: 1 * tilesize, y: 2 * tilesize },
            scale: 1
        };

        this.world = new World();
        this.player = new Player(configuration);
        this.input = new Input();

        screen.width = getScreenWidth();
        screen.height = getScreenHeight();

        this.screen = screen;
        this.context = this.screen.getContext("2d");
        this.game_over = false;
    }
}