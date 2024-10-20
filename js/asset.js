import { getTileSize } from "./util.js";

export default class Asset
{
    constructor({ game, sprite, position, scale })
    {
        //console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize({ game, sprite, position, scale });
    }

    initialize({ game, sprite, position, scale })
    {
        let tilesize = getTileSize();

        this.game = game;
        this.sprite = sprite ?? {
            x: 0,
            y: 0,
            width: tilesize,
            height: tilesize,
            image: ""
        };
        this.position = position ?? { x: 0, y: 0 };
        this.scale = scale ?? 1;
    }

    draw(context)
    {
        let tilesize = getTileSize();

        context.fillRect(this.position.x * tilesize, this.position.y * tilesize, tilesize, tilesize);
    }

    update(delta_time)
    {

    }
}