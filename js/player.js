import Asset from "./asset.js";
import { UP, DOWN, RIGHT, LEFT, getTileSize } from "./util.js";

export default class Player extends Asset
{
    constructor({ game, sprite, position, scale })
    {
        super({ game, sprite, position, scale });

        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);

        this.speed = 100;
        this.walking_frames = 8; // all directions
        this.moving = false;
    }

    /*draw(context)
    {
        super.draw(context);
    }*/

    update(delta_time)
    {
        let nextY = this.destinationPosition.y;
        let nextX = this.destinationPosition.x;

        const scaled_speed = this.speed * (delta_time / 1000);

        const distance = this.moveTowards(this.destinationPosition, scaled_speed);
        const arrived = distance <= scaled_speed;

        let tilesize = getTileSize();

        if (arrived === true)
        {
            if (this.game.input.lastKey === UP)
            {
                //--this.position.y;
                nextY -= tilesize;

                this.sprite.y = 8;
            }
            else if (this.game.input.lastKey === DOWN)
            {
                //++this.position.y;
                nextY += tilesize;

                this.sprite.y = 10;
            }
            else if (this.game.input.lastKey === LEFT)
            {
                //--this.position.x;
                nextX -= tilesize;

                this.sprite.y = 9;
            }
            else if (this.game.input.lastKey === RIGHT)
            {
                //++this.position.x;
                nextX += tilesize;

                this.sprite.y = 11;
            }
            let column = nextX / tilesize;
            let row = nextY / tilesize;

            if (this.game.world.getTile(this.game.world.level_1.collisionLayer, row, column) !== 1)
            {
                this.destinationPosition.x = nextX;
                this.destinationPosition.y = nextY;
            }
        }

        if (this.game.input.keys.length > 0 || this.arrived === false)
        {
            this.moving = true;
        }
        else
        {
            this.moving = false;
        }

        if (this.game.update === true && this.moving === true)
        {
            this.sprite.x < this.walking_frames ? this.sprite.x++ : this.sprite.x = 0;
        }
        else if (this.moving === false)
        {
            this.sprite.x = 0;
        }
    }
}
// walk up - row 8, frames 9
// walk left - 9, frames 9
// walk down - row 10, frames 9
// walk right - row 11, frames 9
