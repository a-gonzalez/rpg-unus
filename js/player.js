import Asset from "./asset.js";
import { UP, DOWN, RIGHT, LEFT } from "./util.js";

export default class Player extends Asset
{
    constructor({ game, sprite, position, scale })
    {
        super({ game, sprite, position, scale });

        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);

        this.speed = 2;
    }

    draw(context)
    {
        super.draw(context);
    }

    update(delta_time)
    {
        let nextY = this.destinationPosition.y;
        let nextX = this.destinationPosition.x;

        const distance = this.moveTowards(this.destinationPosition, this.speed);

        if (this.game.input.lastKey === UP)
        {
            --this.position.y;
        }
        else if (this.game.input.lastKey === DOWN)
        {
            ++this.position.y;
        }
        else if (this.game.input.lastKey === LEFT)
        {
            --this.position.x;
        }
        else if (this.game.input.lastKey === RIGHT)
        {
            ++this.position.x;
        }
    }
}