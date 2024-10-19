import * as util from "./util.js";

export default class World
{
    constructor()
    {
        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize();
    }

    initialize()
    {
        this.level_1 = {};
    }

    drawGrid(context)
    {
        let tilesize = util.getTileSize();

        for (let row = 0; row < util.getRowCount(); row++)
        {
            for (let column = 0; column < util.getColumnCount(); column++)
            {
                context.strokeRect(column * tilesize, row * tilesize, tilesize, tilesize);
            }
        }
    }
}