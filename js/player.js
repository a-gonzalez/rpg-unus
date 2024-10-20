import Asset from "./asset.js";

export default class Player extends Asset
{
    constructor({ game, sprite, position, scale })
    {
        super({ game, sprite, position, scale });

        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
    }

    draw(context)
    {
        super.draw(context);
    }
}