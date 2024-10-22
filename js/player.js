import Asset from "./asset.js";
import { UP, DOWN, RIGHT, LEFT, getTileSize } from "./util.js";

export default class Player extends Asset
{
    constructor({ game, sprite, position, scale })
    {
        super({ game, sprite, position, scale });

        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);

        this.speed = 2;
    }

    /*draw(context)
    {
        super.draw(context);
    }*/

    update(delta_time)
    {
        let nextY = this.destinationPosition.y;
        let nextX = this.destinationPosition.x;

        const distance = this.moveTowards(this.destinationPosition, this.speed);
        const arrived = distance <= this.speed;

        let tilesize = getTileSize();

        if (arrived === true)
        {
            if (this.game.input.lastKey === UP)
            {
                //--this.position.y;
                nextY -= tilesize;
            }
            else if (this.game.input.lastKey === DOWN)
            {
                //++this.position.y;
                nextY += tilesize;
            }
            else if (this.game.input.lastKey === LEFT)
            {
                //--this.position.x;
                nextX -= tilesize;
            }
            else if (this.game.input.lastKey === RIGHT)
            {
                //++this.position.x;
                nextX += tilesize;
            }
            this.destinationPosition.x = nextX;
            this.destinationPosition.y = nextY;
        }
    }
}