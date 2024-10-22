import BackgroundLevelOne from "./background-level-one.js";
import { getTileSize, getRowCount, getColumnCount, getBackgroundPath } from "./util.js";

export default class World
{
    constructor()
    {
        console.log(`${this.constructor.name}.ctor @ ${new Date().toLocaleString()}`);
        
        this.initialize();
    }

    initialize()
    {
        this.level_1 = {
            waterLayer: [],
            groundLayer: [],
            backgroundLayer: document.getElementById("bg1"),
            foregroundLayer: document.getElementById("fg1")
        };
        
    }

    drawBackground(context)
    {
        context.drawImage(this.level_1.backgroundLayer, 0, 0);
    }

    drawForeground(context)
    {
        context.drawImage(this.level_1.foregroundLayer, 0, 0);
    }

    drawGrid(context)
    {
        let tilesize = getTileSize();

        for (let row = 0; row < getRowCount(); row++)
        {
            for (let column = 0; column < getColumnCount(); column++)
            {
                context.strokeRect(column * tilesize, row * tilesize, tilesize, tilesize);
            }
        }
    }
}