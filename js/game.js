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

        if (this.debug === true)
        {
            this.world.drawGrid(this.context);
        }
        this.player.update(delta_time)
        this.player.draw(this.context);

        this.world.drawForeground(this.context);

        if (this.debug === true)
        {
            this.world.drawCollisionMap(this.context);
        }
        
        if (this.update_timer < this.update_interval)
        {
            this.update_timer += delta_time;
            this.update = false;
        }
        else
        {
            //this.update_timer = 0;
            this.update_timer = this.update_interval % this.update_timer;
            this.update = true;
        }
    }

    initialize(screen)
    {
        let image = new Image();
        image.src = "./img/angel_zebulon.png";

        let tilesize = getTileSize();

        let configuration = {
            game: this,
            sprite: {
                sheet: image,
                x: 0,
                y: 11,
                width: 64,
                height: 64
            },
            position: { x: 1 * tilesize, y: 2 * tilesize },
            scale: 1.2
        };

        this.world = new World();
        this.player = new Player(configuration);
        this.input = new Input(this);

        screen.width = getScreenWidth();
        screen.height = getScreenHeight();

        this.screen = screen;
        this.context = this.screen.getContext("2d");
        this.game_over = false;
        this.debug = false;
        this.update = false;
        this.update_timer = 0;
        this.update_interval = 100;
    }

    toggleDebug()
    {
        this.debug = !this.debug;
    }
}