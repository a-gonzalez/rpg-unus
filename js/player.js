import Asset from "./asset.js";

export default class Player extends Asset
{
    constructor(game, sprite, location, scale)
    {
        super(game, sprite, location, scale);

        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
    }

    draw(context)
    {
        super.draw(context);
    }
}