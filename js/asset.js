import { getTileSize } from "./util.js";

export default class Asset
{
    constructor({ game, sprite, position, scale })
    {
        //console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize(game, sprite, position, scale);
    }

    initialize(game, sprite, position, scale)
    {
        this.game = game;
        this.sprite = sprite;
        this.position = position;
        this.scale = scale;
    }

    draw(context)
    {
        let tilesize = getTileSize();

        context.fillRect(5 * tilesize, 6 * tilesize, tilesize, tilesize);
    }

    update(delta_time)
    {

    }
}