import World from "./world.js";
//import * as util from "./util.js";

export const TILE_SIZE = 32;
export const COLUMNS = 15;
export const ROWS = 20;

export default class Game
{
    constructor(screen)
    {
        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize(screen);

    }

    render(delta_time)
    {
        this.world.drawGrid(this.context);
    }

    test()
    {
        console.log(util.getScreenWidth(), util.getScreenHeight());
    }

    initialize(screen)
    {
        screen.width = this.getScreenWidth();
        screen.height = this.getScreenHeight();

        this.screen = screen;
        this.context = this.screen.getContext("2d");
        this.game_over = false;

        this.world = new World();
    }

    getTileSize()
    {
        return TILE_SIZE;
    }

    getRowCount()
    {
        return ROWS;
    }

    getColumnCount()
    {
        return COLUMNS;
    }

    getScreenWidth()
    {
        return TILE_SIZE * COLUMNS;
    }

    getScreenHeight()
    {
        return TILE_SIZE * ROWS;
    }
}